import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  budget:  z.string().optional(),
  message: z.string().min(20).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, budget, message } = parsed.data;
    const to = process.env.CONTACT_EMAIL;

    if (!to) {
      console.error("CONTACT_EMAIL env var not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from:    "Portfolio Contact <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `New enquiry from ${name} via portfolio`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#0284c7;margin-top:0;">New contact form submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#555;width:100px;">Name</td>
              <td style="padding:8px 0;color:#111;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#555;">Email</td>
              <td style="padding:8px 0;color:#111;">${email}</td>
            </tr>
            ${budget ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;">Budget</td><td style="padding:8px 0;color:#111;">${budget}</td></tr>` : ""}
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;" />
          <h3 style="color:#333;margin-top:0;">Message</h3>
          <p style="color:#444;line-height:1.7;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
