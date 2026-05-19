"use client";

import { useLang } from "@/context/LanguageContext";

function Check() {
  return <span style={{ color: "#0A7050", fontSize: 13, flexShrink: 0, fontWeight: 600 }}>✓</span>;
}

interface PriceCardProps {
  tier: string;
  amount: string;
  period: string;
  rooms: string;
  features: string[];
  btnLabel: string;
  btnHref: string;
  featured?: boolean;
  goldAccent?: boolean;
  delay?: string;
}

function PriceCard({ tier, amount, period, rooms, features, btnLabel, btnHref, featured, goldAccent, delay }: PriceCardProps) {
  return (
    <div
      className={`reveal${delay ? ` ${delay}` : ""}`}
      style={{
        background: "#fff",
        border: featured ? "1px solid rgba(154,97,8,.35)" : "1px solid rgba(28,26,23,0.08)",
        borderRadius: 20,
        padding: "36px 32px",
        position: "relative",
        boxShadow: featured
          ? "0 0 0 1px rgba(154,97,8,.15), 0 8px 30px rgba(154,97,8,.1)"
          : "0 2px 8px rgba(28,26,23,.04)",
        transition: "transform .28s ease, box-shadow .28s ease",
        cursor: "default",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = featured
          ? "0 0 0 1px rgba(154,97,8,.15), 0 20px 50px rgba(154,97,8,.15)"
          : "0 8px 30px rgba(28,26,23,.1)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.transform = "none";
        el.style.boxShadow = featured
          ? "0 0 0 1px rgba(154,97,8,.15), 0 8px 30px rgba(154,97,8,.1)"
          : "0 2px 8px rgba(28,26,23,.04)";
      }}
    >
      {featured && (
        <div style={{
          position: "absolute",
          top: -11,
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(90deg, #9A6108, #0A7050)",
          color: "#fff",
          fontFamily: "var(--font-dm), DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: 9.5,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          borderRadius: 20,
          padding: "3px 14px",
          whiteSpace: "nowrap",
        }}>
          MOST POPULAR
        </div>
      )}

      <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: goldAccent ? "#9A6108" : "#625D57", marginBottom: 18, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
        {tier}
      </div>
      <div style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 800, fontSize: amount === "Custom" ? 38 : 52, color: goldAccent ? "#9A6108" : "#1C1A17", lineHeight: 1, marginBottom: 6, letterSpacing: -2 }}>
        {amount === "Custom" ? amount : (
          <>
            <sup style={{ fontSize: "46%", verticalAlign: "super", letterSpacing: 0 }}>€</sup>
            {amount.replace("€", "")}
          </>
        )}
      </div>
      <div style={{ fontSize: 11.5, fontWeight: 300, color: "#9C9590", marginBottom: 6, visibility: period ? "visible" : "hidden", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
        {period || "spacer"}
      </div>
      <div style={{ fontSize: 12.5, fontWeight: 300, color: "#625D57", marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(28,26,23,0.08)", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
        {rooms}
      </div>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11, marginBottom: 30 }}>
        {features.map((feat, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 300, color: "#625D57", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            <Check />
            {feat}
          </li>
        ))}
      </ul>

      <a
        href={btnHref}
        style={featured ? primaryBtnFull : outlineBtnFull}
        onMouseEnter={e => {
          const el = e.currentTarget;
          if (featured) {
            el.style.background = "#B8760A";
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = "0 8px 24px rgba(154,97,8,.22)";
          } else {
            el.style.background = "#1C1A17";
            el.style.color = "#FAF9F7";
            el.style.borderColor = "#1C1A17";
          }
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          if (featured) {
            el.style.background = "#9A6108";
            el.style.transform = "none";
            el.style.boxShadow = "none";
          } else {
            el.style.background = "transparent";
            el.style.color = "#1C1A17";
            el.style.borderColor = "rgba(28,26,23,0.22)";
          }
        }}
      >
        {btnLabel}
      </a>
    </div>
  );
}

export function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" style={{ padding: "120px 0", background: "#F2EFE9" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 44px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#9A6108", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.priceLabel}
          </div>
          <h2 className="reveal d1" style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 3.5vw, 46px)", lineHeight: 1.1, color: "#1C1A17", letterSpacing: -1 }}>
            {t.priceHead}
          </h2>
          <p className="reveal d2" style={{ fontSize: 15, fontWeight: 300, color: "#625D57", maxWidth: 480, margin: "14px auto 0", lineHeight: 1.65, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.priceSub}
          </p>
        </div>

        <div className="price-grid-resp">
          <PriceCard
            tier="Starter"
            amount="€149"
            period={t.starterPeriod}
            rooms={t.starterRooms}
            features={[t.starterF1, t.starterF2, t.starterF3, t.starterF4, t.starterF5]}
            btnLabel={t.starterBtn}
            btnHref="#cta"
          />
          <PriceCard
            tier="Pro"
            amount="€299"
            period={t.proPeriod}
            rooms={t.proRooms}
            features={[t.proF1, t.proF2, t.proF3, t.proF4, t.proF5]}
            btnLabel={t.proBtn}
            btnHref="#cta"
            featured
            goldAccent
            delay="d1"
          />
          <PriceCard
            tier="Enterprise"
            amount="Custom"
            period=""
            rooms={t.entRooms}
            features={[t.entF1, t.entF2, t.entF3, t.entF4, t.entF5]}
            btnLabel={t.entBtn}
            btnHref="#cta"
            delay="d2"
          />
        </div>
      </div>

      <style>{`
        .price-grid-resp {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: start;
        }
        @media (max-width: 980px) {
          .price-grid-resp {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

const primaryBtnFull: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  background: "#9A6108",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  padding: "13px 26px",
  fontFamily: "var(--font-dm), DM Sans, sans-serif",
  fontWeight: 600,
  fontSize: 13.5,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all .22s ease",
};

const outlineBtnFull: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  background: "transparent",
  color: "#1C1A17",
  border: "1.5px solid rgba(28,26,23,0.22)",
  borderRadius: 10,
  padding: "13px 26px",
  fontFamily: "var(--font-dm), DM Sans, sans-serif",
  fontWeight: 600,
  fontSize: 13.5,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all .22s ease",
};
