import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #09090b 0%, #0c1a2e 50%, #0a0a1a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(14,165,233,0.15)",
            border: "1px solid rgba(14,165,233,0.3)",
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
          <span style={{ color: "#38bdf8", fontSize: 16, fontWeight: 600 }}>
            Available for freelance
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Your startup needs code.{" "}
          <span style={{ color: "#38bdf8" }}>I ship it.</span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 28, color: "#71717a", maxWidth: "700px", lineHeight: 1.5 }}>
          Full-Stack Developer · Next.js · Stripe · AI Automation
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "32px",
          }}
        >
          <span style={{ color: "#a1a1aa", fontSize: 20 }}>yourportfolio.vercel.app</span>
          <span style={{ color: "#38bdf8", fontSize: 20, fontWeight: 600 }}>
            Available on Fiverr ↗
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
