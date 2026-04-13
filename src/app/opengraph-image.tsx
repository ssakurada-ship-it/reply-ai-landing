import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ReplyAI — AI-powered review replies, cold emails, and contract review";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "64px" }}>&#9889;</span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            ReplyAI
          </span>
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#a5b4fc",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          AI-powered review replies, cold emails,
          <br />
          and contract review in one tool
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {["Review Reply", "ColdAI", "ContractScan"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "20px",
                color: "#e0e7ff",
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "20px",
            color: "#94a3b8",
          }}
        >
          $33/mo for all 3 tools &bull; 14-day free trial
        </div>
      </div>
    ),
    { ...size }
  );
}
