import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b0c0f",
          backgroundImage:
            "radial-gradient(circle at 78% 25%, rgba(129,140,248,0.25), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#818cf8",
            marginBottom: 24,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#eceef1",
            lineHeight: 1.1,
          }}
        >
          Data Analyst &amp;
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#eceef1",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Financial Analytics
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9aa0ac" }}>
          {profile.subtitle}
        </div>
      </div>
    ),
    { ...size }
  );
}
