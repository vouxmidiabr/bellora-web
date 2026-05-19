"use client";

import { useLang } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

function BellLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 20h18" stroke="#F2EDE5" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5.5 20C5.5 20 5.5 12 12 8.5C18.5 12 18.5 20 18.5 20" stroke="#F2EDE5" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="6.5" r="2" stroke="#F2EDE5" strokeWidth="1.4" fill="none" />
      <line x1="8" y1="17.5" x2="15" y2="11.5" stroke="#C8860A" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{ display: "block", fontSize: 13, fontWeight: 300, color: "#5C5852", textDecoration: "none", marginBottom: 9, transition: "color .2s", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}
      onMouseEnter={e => (e.currentTarget.style.color = "#F2EDE5")}
      onMouseLeave={e => (e.currentTarget.style.color = "#5C5852")}
    >
      {children}
    </a>
  );
}

export function Footer() {
  const { t, lang, setLang } = useLang();

  return (
    <footer id="footer" style={{ background: "#1D1B18", borderTop: "1px solid rgba(255,255,255,.06)", padding: "52px 0" }}>
      <div className="wrap">
        {/* Top grid */}
        <div className="foot-top-resp" style={{ paddingBottom: 44, borderBottom: "1px solid rgba(255,255,255,.06)" }}>
          {/* Left: logo + desc */}
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", marginBottom: 12 }}>
              <BellLogo />
              <span style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 5, color: "#F2EDE5", textTransform: "uppercase" }}>
                BELLORA
              </span>
            </a>
            <p style={{ fontSize: 12.5, fontWeight: 300, color: "#5C5852", maxWidth: 210, lineHeight: 1.6, margin: 0, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
              {t.footDesc}
            </p>
          </div>

          {/* Right: link columns */}
          <div className="foot-links-resp">
            {/* Product */}
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#8C8580", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                {t.footCol1}
              </div>
              <FootLink href="#features">Features</FootLink>
              <FootLink href="#platform">Platform</FootLink>
              <FootLink href="#pricing">Pricing</FootLink>
              <FootLink href="#">Changelog</FootLink>
            </div>
            {/* Company */}
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#8C8580", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                {t.footCol2}
              </div>
              <FootLink href="#">About</FootLink>
              <FootLink href="#">Contact</FootLink>
              <FootLink href="#">Privacy</FootLink>
              <FootLink href="#">Terms</FootLink>
            </div>
            {/* Get started */}
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#8C8580", marginBottom: 14, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                {t.footCol3}
              </div>
              <FootLink href="#cta">Request Demo</FootLink>
              <FootLink href="#">Book a call</FootLink>
              <FootLink href="mailto:hello@bellora.io">hello@bellora.io</FootLink>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="foot-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 20 }}>
          <span style={{ fontSize: 11.5, fontWeight: 300, color: "#5C5852", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
            {t.footCopy}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {(["EN", "PT", "ES"] as Language[]).map((l, i) => (
              <span key={l} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {i > 0 && <span style={{ color: "#333" }}>·</span>}
                <button
                  onClick={() => setLang(l)}
                  style={{
                    fontSize: 11,
                    fontWeight: 300,
                    color: lang === l ? "#C8860A" : "#5C5852",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: 1,
                    textDecoration: "none",
                    transition: "color .2s",
                    fontFamily: "var(--font-dm), DM Sans, sans-serif",
                    padding: 0,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C8860A")}
                  onMouseLeave={e => (e.currentTarget.style.color = lang === l ? "#C8860A" : "#5C5852")}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .foot-top-resp {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 60px;
        }
        .foot-links-resp {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        @media (max-width: 980px) {
          .foot-top-resp { grid-template-columns: 1fr; }
          .foot-links-resp { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .foot-links-resp { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .foot-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
          .foot-links-resp { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
