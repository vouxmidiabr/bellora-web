"use client";

import { useLang } from "@/context/LanguageContext";
import { useDemoModal } from "@/context/DemoModalContext";

function Check() {
  return (
    <span style={{ color: "#0A7050", fontSize: 14, flexShrink: 0, fontWeight: 600, lineHeight: 1 }}>✓</span>
  );
}

export function Pricing() {
  const { t } = useLang();
  const { openModal } = useDemoModal();

  return (
    <section id="pricing" style={{ padding: "120px 0", background: "#F2EFE9" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 44px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#9A6108", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.priceLabel}
          </div>
          <h2 className="reveal d1" style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 3.5vw, 46px)", lineHeight: 1.1, color: "#1C1A17", letterSpacing: -1 }}>
            {t.priceHead}
          </h2>
          <p className="reveal d2" style={{ fontSize: 15, fontWeight: 300, color: "#625D57", maxWidth: 420, margin: "14px auto 0", lineHeight: 1.65, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.priceSub}
          </p>
        </div>

        {/* Single card */}
        <div className="reveal d1" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            className="price-card-single"
            style={{
              background: "#fff",
              border: "1px solid rgba(154,97,8,.30)",
              borderRadius: 20,
              boxShadow: "0 0 0 1px rgba(154,97,8,.10), 0 12px 40px rgba(154,97,8,.08)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1px 1fr",
            }}
          >
            {/* Left: price + features */}
            <div style={{ padding: "44px 48px" }}>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#9A6108", marginBottom: 10, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                {t.priceFrom}
              </div>
              <div style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 800, fontSize: 58, color: "#9A6108", lineHeight: 1, letterSpacing: -2, marginBottom: 10 }}>
                <sup style={{ fontSize: "42%", verticalAlign: "super", letterSpacing: 0, fontWeight: 700 }}>€</sup>
                {t.priceMo.replace("€", "").replace("/mês","").replace("/mo","").replace("/mes","")}
                <span style={{ fontSize: 18, fontWeight: 400, letterSpacing: 0, color: "#9C9590" }}>
                  /{t.priceMo.split("/")[1]}
                </span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 300, color: "#625D57", lineHeight: 1.5, marginBottom: 32, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                {t.priceAdapted}
              </div>

              <div style={{ height: 1, background: "rgba(28,26,23,0.08)", marginBottom: 28 }} />

              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[t.priceF1, t.priceF2, t.priceF3, t.priceF4].map((feat, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 400, color: "#1C1A17", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                    <Check />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical divider */}
            <div style={{ background: "rgba(154,97,8,.12)" }} />

            {/* Right: CTA */}
            <div style={{ padding: "44px 48px", background: "rgba(154,97,8,.025)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: 22, color: "#1C1A17", lineHeight: 1.25, letterSpacing: -0.5, marginBottom: 16 }}>
                {t.priceCtaQ}
              </div>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#625D57", lineHeight: 1.7, margin: "0 0 32px", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                {t.priceCtaDesc}
              </p>
              <button
                onClick={openModal}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#9A6108",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 28px",
                  fontFamily: "var(--font-dm), DM Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all .22s ease",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#B8760A";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(154,97,8,.25)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#9A6108";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {t.priceDemoBtn}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .price-card-single {
            grid-template-columns: 1fr !important;
          }
          .price-card-single > div:nth-child(2) {
            height: 1px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
