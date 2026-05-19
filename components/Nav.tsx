"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

function BellLogo({ dark }: { dark?: boolean }) {
  const stroke = dark ? "#F2EDE5" : "#1C1A17";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 20h18" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5.5 20C5.5 20 5.5 12 12 8.5C18.5 12 18.5 20 18.5 20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="6.5" r="2" stroke={stroke} strokeWidth="1.4" fill="none" />
      <line x1="8" y1="17.5" x2="15" y2="11.5" stroke="#9A6108" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

export function Nav() {
  const { lang, t, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(250,249,247,.94)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(28,26,23,0.08)",
        padding: scrolled ? "12px 0" : "18px 0",
        boxShadow: scrolled ? "0 4px 24px rgba(28,26,23,.06)" : "none",
        transition: "padding 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 44px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28 }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <BellLogo />
          <span style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: 5, color: "#1C1A17", textTransform: "uppercase" }}>
            BELLORA
          </span>
        </a>

        {/* Nav links — hidden on mobile */}
        <ul className="nav-links-list" style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { label: t.navFeatures, href: "#features" },
            { label: t.navPlatform, href: "#platform" },
            { label: t.navHow, href: "#how" },
            { label: t.navPricing, href: "#pricing" },
          ].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                style={{ fontFamily: "var(--font-dm), DM Sans, sans-serif", fontWeight: 400, fontSize: 13, color: "#625D57", textDecoration: "none", whiteSpace: "nowrap", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1C1A17")}
                onMouseLeave={e => (e.currentTarget.style.color = "#625D57")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: lang + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {(["EN", "PT", "ES"] as Language[]).map((l, i) => (
              <span key={l} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && <span style={{ color: "#9C9590", fontSize: 11 }}>·</span>}
                <button
                  onClick={() => setLang(l)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-dm), DM Sans, sans-serif",
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: 1,
                    color: lang === l ? "#9A6108" : "#9C9590",
                    transition: "color 0.2s",
                    padding: 0,
                  }}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
          <a
            href="#cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "#9A6108",
              border: "1.5px solid rgba(154,97,8,.3)",
              borderRadius: 10,
              padding: "10px 18px",
              fontFamily: "var(--font-dm), DM Sans, sans-serif",
              fontWeight: 600,
              fontSize: 12.5,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "all 0.22s ease",
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#9A6108"; el.style.color = "#fff"; el.style.borderColor = "#9A6108"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#9A6108"; el.style.borderColor = "rgba(154,97,8,.3)"; }}
          >
            {t.navCta}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .nav-links-list { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
