"use client";

import { useLang } from "@/context/LanguageContext";
import { useDemoModal } from "@/context/DemoModalContext";

export function CTA() {
  const { t } = useLang();
  const { openModal } = useDemoModal();

  return (
    <section
      id="cta"
      style={{
        background: "#131110",
        padding: "180px 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="cta-glow" />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Vertical decorative line */}
        <div
          className="reveal"
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to bottom, transparent, rgba(200,134,10,.45))",
            margin: "0 auto 42px",
          }}
        />

        <h2
          className="reveal d1"
          style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 7vw, 66px)",
            letterSpacing: "-1.5px",
            color: "#F2EDE5",
            lineHeight: 1.0,
            marginBottom: 24,
          }}
          dangerouslySetInnerHTML={{ __html: t.ctaH }}
        />

        <p
          className="reveal d2"
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: "#8C8580",
            lineHeight: 1.65,
            maxWidth: 520,
            margin: "0 auto 40px",
            fontFamily: "var(--font-dm), DM Sans, sans-serif",
          }}
        >
          {t.ctaSub}
        </p>

        <button
          onClick={openModal}
          className="reveal d2"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "#F2EDE5",
            color: "#131110",
            border: "none",
            borderRadius: 10,
            padding: "15px 34px",
            fontFamily: "var(--font-dm), DM Sans, sans-serif",
            fontWeight: 600,
            fontSize: 14.5,
            cursor: "pointer",
            transition: "all .22s ease",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.background = "#fff";
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = "0 12px 30px rgba(0,0,0,.3)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.background = "#F2EDE5";
            el.style.transform = "none";
            el.style.boxShadow = "none";
          }}
        >
          {t.ctaBtn}
        </button>

        <p
          className="reveal d3"
          style={{
            fontSize: 12,
            fontWeight: 300,
            color: "#5C5852",
            letterSpacing: 0.3,
            marginTop: 14,
            fontFamily: "var(--font-dm), DM Sans, sans-serif",
          }}
        >
          {t.ctaFn}
        </p>
      </div>
    </section>
  );
}
