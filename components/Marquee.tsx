"use client";

import { useLang } from "@/context/LanguageContext";

const HOTELS = [
  "Grand Viseu Palace",
  "Douro Suites",
  "LX Boutique Collection",
  "Algarve Royal",
  "Porto Heritage Hotel",
  "Sintra Retreat",
  "Évora Palace",
];

export function Marquee() {
  const { t } = useLang();

  const items = [...HOTELS, ...HOTELS];

  return (
    <section
      id="marquee"
      style={{
        background: "#F2EFE9",
        borderTop: "1px solid rgba(28,26,23,.08)",
        borderBottom: "1px solid rgba(28,26,23,.08)",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: 2.5,
          textTransform: "uppercase",
          color: "#9C9590",
          marginBottom: 14,
          fontFamily: "var(--font-dm), DM Sans, sans-serif",
        }}
      >
        {t.marqueeLabel}
      </div>
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="mq-inner">
          {items.map((hotel, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#9C9590",
                  opacity: 0.6,
                  whiteSpace: "nowrap",
                  padding: "0 18px",
                }}
              >
                {hotel}
              </span>
              <span style={{ color: "rgba(154,97,8,.35)", fontSize: 8, padding: "0 4px" }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
