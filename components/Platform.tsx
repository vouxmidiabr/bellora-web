"use client";

import { useLang } from "@/context/LanguageContext";

function IconUtensils() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" /><path d="M21 15v7" /></svg>;
}
function IconBed() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg>;
}
function IconWrench() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>;
}
function IconHome() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
}

const gCardColors = {
  gold:  { border: "rgba(154,97,8,.25)",   label: "#9A6108",  stroke: "#9A6108"  },
  teal:  { border: "rgba(45,125,154,.25)", label: "#2D7D9A",  stroke: "#2D7D9A"  },
  brown: { border: "rgba(139,69,19,.25)",  label: "#8B4513",  stroke: "#8B4513"  },
  grn:   { border: "rgba(10,112,80,.25)",  label: "#0A7050",  stroke: "#0A7050"  },
};

function GCard({ color, label, icon }: { color: keyof typeof gCardColors; label: string; icon: React.ReactNode }) {
  const c = gCardColors[color];
  return (
    <div
      style={{ background: "#F2EFE9", borderRadius: 10, padding: "12px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, border: `1px solid ${c.border}`, cursor: "pointer", transition: "opacity .2s", color: c.stroke }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      {icon}
      <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 0.5, color: c.label, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{label}</span>
    </div>
  );
}

function Dot({ type }: { type: "done" | "active" | "pend" }) {
  const base: React.CSSProperties = { width: 10, height: 10, borderRadius: "50%", flexShrink: 0 };
  if (type === "done")   return <div style={{ ...base, background: "#0A7050" }} />;
  if (type === "active") return <div style={{ ...base, background: "#9A6108", animation: "pulse 2.2s ease-in-out infinite" }} />;
  return <div style={{ ...base, background: "transparent", border: "1.5px solid #9C9590" }} />;
}

function GuestCard() {
  const { t } = useLang();

  const steps: Array<{ label: string; time: string; type: "done" | "active" | "pend" }> = [
    { label: t.step1, time: "14:32", type: "done"   },
    { label: t.step2, time: "14:34", type: "done"   },
    { label: t.step3, time: "agora", type: "active" },
    { label: t.step4, time: "—",     type: "pend"   },
  ];

  return (
    <div className="reveal" style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(28,26,23,0.08)", overflow: "hidden", boxShadow: "0 2px 8px rgba(28,26,23,.04), 0 8px 24px rgba(28,26,23,.06)" }}>
      {/* Card header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 20px", borderBottom: "1px solid rgba(28,26,23,0.08)", background: "#FAF9F7" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2D7D9A", flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 1, textTransform: "uppercase", color: "#2D7D9A", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
          {t.platGuestTitle}
        </span>
      </div>

      <div style={{ padding: "20px 22px" }}>
        <div style={{ fontSize: 10.5, fontWeight: 300, color: "#625D57", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.gBc}</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 20 }}>
          <GCard color="gold"  label={t.gCatRS} icon={<IconUtensils />} />
          <GCard color="teal"  label={t.gCatHK} icon={<IconBed />} />
          <GCard color="brown" label={t.gCatMt} icon={<IconWrench />} />
          <GCard color="grn"   label={t.gCatRc} icon={<IconHome />} />
        </div>

        {/* Order tracker header */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ color: "#9A6108", display: "flex", alignItems: "center" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          </span>
          <span style={{ fontSize: 10.5, fontWeight: 500, color: "#9A6108", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.otTitle}</span>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 10, alignItems: "start", paddingBottom: i < steps.length - 1 ? 14 : 0 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 2 }}>
                <Dot type={step.type} />
                {i < steps.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 18, background: "rgba(28,26,23,0.08)", marginTop: 4 }} />}
              </div>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 500, color: step.type === "active" ? "#9A6108" : step.type === "pend" ? "#9C9590" : "#1C1A17", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                  {step.label}
                </div>
                <div style={{ fontSize: 9, fontWeight: 300, color: "#9C9590", marginTop: 2, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Ticket({ roomColor, roomLabel, item, badge, badgeBg, badgeColor, dept, time, timeColor, slaWidth, slaColor }: {
  roomColor: string; roomLabel: string;
  item: string; badge: string; badgeBg: string; badgeColor: string;
  dept: string; time: string; timeColor: string;
  slaWidth: string; slaColor: string;
}) {
  return (
    <div style={{ background: "#FAF9F7", border: "1px solid rgba(28,26,23,0.08)", borderLeft: `3px solid ${roomColor}`, borderRadius: 10, padding: 12, marginBottom: 7 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 9.5, fontWeight: 600, color: "#9A6108", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{roomLabel}</span>
        <span style={{ fontSize: 8.5, fontWeight: 600, borderRadius: 20, padding: "2px 8px", background: badgeBg, color: badgeColor, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{badge}</span>
      </div>
      <div style={{ fontSize: 12, fontWeight: 400, color: "#1C1A17", marginBottom: 6, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{item}</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 7 }}>
        <span style={{ fontSize: 9, fontWeight: 300, color: "#9C9590", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{dept}</span>
        <span style={{ fontSize: 9, fontWeight: 600, color: timeColor, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{time}</span>
      </div>
      <div style={{ height: 2, background: "#E9E5DE", borderRadius: 1 }}>
        <div style={{ height: 2, width: slaWidth, background: slaColor, borderRadius: 1 }} />
      </div>
    </div>
  );
}

function StaffCard() {
  const { t } = useLang();

  return (
    <div className="reveal d1" style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(28,26,23,0.08)", overflow: "hidden", boxShadow: "0 2px 8px rgba(28,26,23,.04), 0 8px 24px rgba(28,26,23,.06)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 20px", borderBottom: "1px solid rgba(28,26,23,0.08)", background: "#FAF9F7" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#9A6108", flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 1, textTransform: "uppercase", color: "#9A6108", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
          {t.platStaffTitle}
        </span>
      </div>

      <div style={{ padding: "20px 22px" }}>
        {/* Status badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
          <span style={{ fontSize: 9.5, fontWeight: 400, borderRadius: 20, padding: "3px 10px", background: "rgba(249,115,22,.08)", border: "1px solid rgba(249,115,22,.18)", color: "#C25000", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.badge1}</span>
          <span style={{ fontSize: 9.5, fontWeight: 400, borderRadius: 20, padding: "3px 10px", background: "rgba(59,130,246,.08)", border: "1px solid rgba(59,130,246,.18)", color: "#2563EB", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.badge2}</span>
          <span style={{ fontSize: 9.5, fontWeight: 400, borderRadius: 20, padding: "3px 10px", background: "rgba(154,97,8,.08)", border: "1px solid rgba(154,97,8,.18)", color: "#9A6108", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.badge3}</span>
        </div>

        <Ticket roomColor="#D97706" roomLabel="Rm. 204" item={t.tk1Item} badge={t.tk1Badge} badgeBg="rgba(217,119,6,.1)" badgeColor="#D97706" dept={t.tk1Dept} time="8 min" timeColor="#D97706" slaWidth="68%" slaColor="#D97706" />
        <Ticket roomColor="#F97316" roomLabel="Rm. 118" item={t.tk2Item} badge={t.tk2Badge} badgeBg="rgba(249,115,22,.1)" badgeColor="#C25000" dept={t.tk2Dept} time="2 min" timeColor="#0A7050" slaWidth="14%" slaColor="#0A7050" />
        <Ticket roomColor="#3B82F6" roomLabel="Rm. 302" item={t.tk3Item} badge={t.tk3Badge} badgeBg="rgba(59,130,246,.1)" badgeColor="#2563EB" dept={t.tk3Dept} time="19 min" timeColor="#2563EB" slaWidth="54%" slaColor="#3B82F6" />

        <div style={{ textAlign: "center", fontSize: 9.5, fontWeight: 300, color: "#9C9590", marginTop: 10, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>{t.platFooter}</div>
      </div>
    </div>
  );
}

export function Platform() {
  const { t } = useLang();

  return (
    <section id="platform" style={{ background: "#F2EFE9", padding: "120px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 44px" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="reveal" style={{ fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: "#9A6108", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.platLabel}
          </div>
          <h2
            className="reveal d1"
            style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 3.5vw, 46px)", lineHeight: 1.1, color: "#1C1A17", letterSpacing: -1 }}
            dangerouslySetInnerHTML={{ __html: t.platHead }}
          />
          <p className="reveal d2" style={{ fontSize: 15, fontWeight: 300, color: "#625D57", maxWidth: 480, lineHeight: 1.65, marginTop: 16, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.platSub}
          </p>
        </div>

        <div className="plat-grid-resp">
          <GuestCard />
          <StaffCard />
        </div>
      </div>

      <style>{`
        .plat-grid-resp {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 980px) {
          .plat-grid-resp { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
