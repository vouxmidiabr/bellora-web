"use client";

import { useLang } from "@/context/LanguageContext";

function PhoneMockup() {
  const { t } = useLang();
  return (
    <div
      style={{
        width: 278,
        flexShrink: 0,
        background: "#1D1B18",
        borderRadius: 40,
        border: "1px solid rgba(255,255,255,.08)",
        boxShadow: "0 40px 80px rgba(28,26,23,.18), 0 8px 24px rgba(28,26,23,.12)",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Notch */}
      <div style={{ width: 90, height: 22, background: "#131110", borderRadius: "0 0 14px 14px", margin: "0 auto" }} />

      {/* Header bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#131110", padding: "9px 16px 11px", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <span style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontSize: 9, letterSpacing: 3.5, color: "#C8860A", textTransform: "uppercase" }}>
          ⬡ BELLORA
        </span>
        <span style={{ background: "rgba(200,134,10,.12)", border: "1px solid rgba(200,134,10,.3)", borderRadius: 12, padding: "2px 8px", fontFamily: "var(--font-dm), DM Sans, sans-serif", fontSize: 9, color: "#C8860A" }}>
          Rm. 204
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 9 }}>
        <div style={{ background: "#131110", padding: "6px 10px", borderRadius: 7, fontSize: 10, color: "#8a8580", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
          {t.phoneGreet}
        </div>
        <div style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: 15, lineHeight: 1.25, color: "#F2EDE5" }} dangerouslySetInnerHTML={{ __html: t.phoneTitle }} />
        <div style={{ fontSize: 9.5, color: "#706C68", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.phoneSub}</div>

        {/* Category grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
          <PhoneCard color="gold" label={t.catRoomService} icon={<IconUtensils />} />
          <PhoneCard color="teal" label={t.catHousekeeping} icon={<IconBed />} />
          <PhoneCard color="brown" label={t.catMaintenance} icon={<IconWrench />} />
          <PhoneCard color="grn" label={t.catReception} icon={<IconHome />} />
        </div>

        {/* Tracker */}
        <div style={{ background: "#131110", border: "1px solid rgba(255,255,255,.06)", borderRadius: 11, padding: "9px 11px", display: "flex", alignItems: "center", gap: 8 }}>
          <span className="pulse-dot" style={{ width: 7, height: 7 }} />
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#C8860A", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.trackerT}</div>
            <div style={{ fontSize: 8.5, color: "#706C68", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.trackerS}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const colorMap = {
  gold:  { border: "rgba(200,134,10,.28)",  label: "#C8860A", stroke: "#C8860A" },
  teal:  { border: "rgba(45,125,154,.28)",  label: "#2D7D9A", stroke: "#2D7D9A" },
  brown: { border: "rgba(139,69,19,.28)",   label: "#8B4513", stroke: "#8B4513" },
  grn:   { border: "rgba(74,120,86,.28)",   label: "#4A7856", stroke: "#4A7856" },
};

function PhoneCard({ color, label, icon }: { color: keyof typeof colorMap; label: string; icon: React.ReactNode }) {
  const c = colorMap[color];
  return (
    <div style={{ background: "#131110", borderRadius: 11, padding: "11px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, border: `1px solid ${c.border}` }}>
      <div style={{ color: c.stroke }}>{icon}</div>
      <span style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: 0.5, textAlign: "center", color: c.label, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

function KPICard() {
  const { t } = useLang();
  return (
    <div
      className="kpi-card-float"
      style={{
        position: "absolute",
        left: 296,
        top: "38%",
        background: "#fff",
        border: "1px solid rgba(28,26,23,0.08)",
        borderRadius: 14,
        padding: "14px 17px",
        width: 152,
        boxShadow: "0 8px 30px rgba(28,26,23,.1), 0 2px 8px rgba(28,26,23,.06)",
        zIndex: 3,
      }}
    >
      <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: 1.2, textTransform: "uppercase", color: "#9C9590", marginBottom: 4, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
        {t.kpiLabel}
      </div>
      <div style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: 28, color: "#9A6108", lineHeight: 1.1 }}>
        2.4<span style={{ fontSize: 14, fontWeight: 400 }}> min</span>
      </div>
      <div style={{ fontSize: 9.5, color: "#625D57", margin: "3px 0 8px", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.kpiSub}</div>
      <div style={{ height: 2, background: "#E9E5DE", borderRadius: 1, marginBottom: 5 }}>
        <div style={{ height: 2, width: "78%", background: "linear-gradient(90deg, #9A6108, #0A7050)", borderRadius: 1 }} />
      </div>
      <div style={{ fontSize: 8.5, fontWeight: 500, color: "#0A7050", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.kpiNote}</div>
    </div>
  );
}

/* SVG Icons for phone grid */
function IconUtensils() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" /><path d="M21 15v7" />
    </svg>
  );
}
function IconBed() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
    </svg>
  );
}
function IconWrench() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconHome() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "130px 0 80px",
        position: "relative",
        overflow: "hidden",
        background: "#FAF9F7",
      }}
    >
      {/* Dot grid */}
      <div className="hero-dot-grid" />
      {/* Glow */}
      <div className="hero-glow" />

      <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="hero-inner-grid">
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            {/* Pill badge */}
            <div
              className="reveal"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                border: "1px solid rgba(154,97,8,.24)",
                borderRadius: 30,
                padding: "5px 14px 5px 9px",
                marginBottom: 32,
                fontFamily: "var(--font-dm), DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: "#9A6108",
                letterSpacing: 0.8,
                boxShadow: "0 2px 12px rgba(154,97,8,.1)",
              }}
            >
              <span className="pulse-dot" />
              {t.heroPill}
            </div>

            {/* Headline */}
            <h1
              className="reveal d1 hero-h1"
              style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 8vw, 66px)",
                lineHeight: 1.1,
                letterSpacing: "-2.5px",
                color: "#1C1A17",
                maxWidth: 780,
                margin: "0 0 28px",
              }}
              dangerouslySetInnerHTML={{ __html: t.heroH }}
            />

            {/* Subtitle */}
            <p
              className="reveal d2 hero-sub"
              style={{
                fontSize: 17,
                fontWeight: 300,
                color: "#625D57",
                lineHeight: 1.7,
                maxWidth: 510,
                margin: "0 0 40px",
                fontFamily: "var(--font-dm), DM Sans, sans-serif",
              }}
            >
              {t.heroSub}
            </p>

            {/* Buttons */}
            <div className="reveal d3 hero-btns" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
              <a href="#cta" style={primaryBtnStyle}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#B8760A"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 24px rgba(154,97,8,.22)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#9A6108"; el.style.transform = "none"; el.style.boxShadow = "none"; }}
              >
                {t.heroBtn1}
              </a>
              <a href="#platform" style={ghostBtnStyle}
                onMouseEnter={e => { e.currentTarget.style.color = "#1C1A17"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#625D57"; }}
              >
                {t.heroBtn2}
              </a>
            </div>

            {/* Trust line */}
            <div className="reveal d3" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#9C9590", flexWrap: "nowrap" }}>
              {["PT", "ES", "DE"].map(c => (
                <span key={c} style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.5, color: "#9C9590", border: "1px solid rgba(28,26,23,0.08)", borderRadius: 4, padding: "2px 6px", background: "#F2EFE9", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                  {c}
                </span>
              ))}
              <span style={{ fontFamily: "var(--font-dm), DM Sans, sans-serif", fontWeight: 300 }}>{t.heroTrust}</span>
            </div>
          </div>

          {/* Right column — phone + KPI */}
          <div className="reveal d2 hero-right-col" style={{ display: "flex", alignItems: "flex-start", position: "relative", justifyContent: "flex-start" }}>
            <div className="hero-phone-wrap" style={{ position: "relative", width: 460, flexShrink: 0 }}>
              <PhoneMockup />
              <KPICard />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-inner-grid {
          display: grid;
          grid-template-columns: 1fr 460px;
          gap: 64px;
          align-items: center;
          width: 100%;
        }
        .kpi-card-float { display: block; }
        @media (max-width: 980px) {
          .hero-inner-grid { grid-template-columns: 1fr; gap: 50px; }
          .hero-right-col { order: -1; justify-content: center !important; }
          .kpi-card-float { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-right-col { display: flex; justify-content: center !important; overflow: hidden; }
          .hero-phone-wrap { width: 100% !important; display: flex; justify-content: center; }
          .hero-btns { flex-wrap: wrap; }
          .hero-sub { font-size: 15px !important; max-width: 100% !important; }
          .hero-h1 { letter-spacing: -1px !important; }
        }
      `}</style>
    </section>
  );
}

const primaryBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
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
  whiteSpace: "nowrap",
};

const ghostBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "transparent",
  color: "#625D57",
  border: "none",
  padding: "13px 0",
  fontFamily: "var(--font-dm), DM Sans, sans-serif",
  fontWeight: 400,
  fontSize: 13.5,
  cursor: "pointer",
  textDecoration: "none",
  transition: "color .22s",
  whiteSpace: "nowrap",
};
