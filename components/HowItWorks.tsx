"use client";

import { useLang } from "@/context/LanguageContext";

function Step({ num, title, body, delay }: { num: number; title: string; body: string; delay?: string }) {
  return (
    <div className={`reveal${delay ? ` ${delay}` : ""}`} style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          border: "1.5px solid rgba(154,97,8,.3)",
          background: "rgba(154,97,8,.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-manrope), Manrope, sans-serif",
          fontWeight: 700,
          fontSize: 20,
          color: "#9A6108",
          marginBottom: 26,
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        {num}
      </div>
      <div style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 600, fontSize: 20, color: "#1C1A17", marginBottom: 12, letterSpacing: -0.3 }}>
        {title}
      </div>
      <p style={{ fontSize: 13.5, fontWeight: 300, color: "#625D57", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
        {body}
      </p>
    </div>
  );
}

export function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how" style={{ padding: "120px 0", background: "#FAF9F7" }}>
      <div className="wrap">
        <div style={{ marginBottom: 72 }}>
          <div className="reveal" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#9A6108", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.howLabel}
          </div>
          <h2
            className="reveal d1"
            style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 3.5vw, 46px)", lineHeight: 1.1, color: "#1C1A17", letterSpacing: -1 }}
            dangerouslySetInnerHTML={{ __html: t.howHead }}
          />
          <p className="reveal d2" style={{ fontSize: 15, fontWeight: 300, color: "#625D57", maxWidth: 480, lineHeight: 1.65, marginTop: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.howSub}
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div className="how-line how-line-resp" />
          <div className="how-grid-resp">
            <Step num={1} title={t.how1Title} body={t.how1Body} />
            <Step num={2} title={t.how2Title} body={t.how2Body} delay="d1" />
            <Step num={3} title={t.how3Title} body={t.how3Body} delay="d2" />
          </div>
        </div>
      </div>

      <style>{`
        .how-grid-resp {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .how-line-resp { display: block; }
        @media (max-width: 980px) {
          .how-grid-resp { grid-template-columns: 1fr; gap: 40px; }
          .how-line-resp { display: none !important; }
        }
      `}</style>
    </section>
  );
}
