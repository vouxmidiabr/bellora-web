"use client";

import { useLang } from "@/context/LanguageContext";

function IconSmartphone() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function IconBarChart() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconMonitor() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  delay?: string;
}

function FeatureCard({ icon, title, body, delay }: CardProps) {
  return (
    <div
      className={`reveal${delay ? ` ${delay}` : ""}`}
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "36px 32px",
        border: "1px solid rgba(28,26,23,0.08)",
        boxShadow: "0 1px 3px rgba(28,26,23,.04), 0 6px 20px rgba(28,26,23,.05)",
        transition: "transform .28s ease, box-shadow .28s ease",
        cursor: "default",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 4px 12px rgba(28,26,23,.06), 0 20px 50px rgba(28,26,23,.1)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.transform = "none";
        el.style.boxShadow = "0 1px 3px rgba(28,26,23,.04), 0 6px 20px rgba(28,26,23,.05)";
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          border: "1px solid rgba(154,97,8,.22)",
          background: "rgba(154,97,8,.05)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 22,
          color: "#9A6108",
        }}
      >
        {icon}
      </div>
      <div style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 600, fontSize: 18, color: "#1C1A17", marginBottom: 12, letterSpacing: -0.3 }}>
        {title}
      </div>
      <p style={{ fontSize: 14, fontWeight: 300, color: "#625D57", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
        {body}
      </p>
    </div>
  );
}

export function Features() {
  const { t } = useLang();

  const cards = [
    { icon: <IconSmartphone />, title: t.feat1Title, body: t.feat1Body },
    { icon: <IconZap />,        title: t.feat2Title, body: t.feat2Body, delay: "d1" },
    { icon: <IconGlobe />,      title: t.feat3Title, body: t.feat3Body, delay: "d2" },
    { icon: <IconBarChart />,   title: t.feat4Title, body: t.feat4Body },
    { icon: <IconUsers />,      title: t.feat5Title, body: t.feat5Body, delay: "d1" },
    { icon: <IconMonitor />,    title: t.feat6Title, body: t.feat6Body, delay: "d2" },
  ];

  return (
    <section id="features" style={{ padding: "120px 0", background: "#FAF9F7" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 44px" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="reveal" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#9A6108", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.featLabel}
          </div>
          <h2
            className="reveal d1"
            style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 3.5vw, 46px)", lineHeight: 1.1, color: "#1C1A17", letterSpacing: -1 }}
            dangerouslySetInnerHTML={{ __html: t.featHead }}
          />
        </div>

        <div className="feat-grid-resp">
          {cards.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>
      </div>

      <style>{`
        .feat-grid-resp {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 980px) {
          .feat-grid-resp { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .feat-grid-resp { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
