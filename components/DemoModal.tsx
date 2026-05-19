"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { useDemoModal } from "@/context/DemoModalContext";

const ACCESS_KEY = "cb9c3c09-f1ce-46bf-ba46-341314d028fe";

type FormState = { name: string; hotel: string; email: string; phone: string; rooms: string };
type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  border: "1.5px solid rgba(28,26,23,.12)",
  borderRadius: 10,
  padding: "11px 14px",
  fontFamily: "var(--font-dm), DM Sans, sans-serif",
  fontSize: 14,
  color: "#1C1A17",
  background: "#fff",
  outline: "none",
  transition: "border-color .2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11.5,
  fontWeight: 500,
  color: "#625D57",
  marginBottom: 5,
  fontFamily: "var(--font-dm), DM Sans, sans-serif",
  letterSpacing: 0.2,
};

export function DemoModal() {
  const { open, closeModal } = useDemoModal();
  const { t } = useLang();
  const [form, setForm] = useState<FormState>({ name: "", hotel: "", email: "", phone: "", rooms: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    setForm({ name: "", hotel: "", email: "", phone: "", rooms: "" });
    setStatus("idle");
    closeModal();
  };

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const fd = new FormData();
      fd.append("access_key", ACCESS_KEY);
      fd.append("subject", `Nova demo Bellora — ${form.hotel}`);
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("hotel_name", form.hotel);
      fd.append("phone", form.phone || "—");
      fd.append("rooms", form.rooms || "—");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        console.error("Web3Forms error:", data);
        setErrorMsg(data.message || "");
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

  const focusBorder = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(154,97,8,.5)";
  };
  const blurBorder = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(28,26,23,.12)";
  };

  return (
    <>
      <div
        onClick={handleClose}
        style={{
          position: "fixed", inset: 0, zIndex: 2000,
          background: "rgba(0,0,0,.6)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      />

      <div
        style={{
          position: "fixed", inset: 0, zIndex: 2001,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
          pointerEvents: "none",
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          style={{
            background: "#FAF9F7",
            borderRadius: 20,
            border: "1px solid rgba(154,97,8,.15)",
            boxShadow: "0 24px 80px rgba(0,0,0,.3)",
            width: "100%",
            maxWidth: 480,
            overflow: "hidden",
            pointerEvents: "auto",
          }}
        >
          {status === "success" ? (
            <div style={{ padding: "56px 48px", textAlign: "center" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "rgba(10,112,80,.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A7050" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: 22, color: "#1C1A17", letterSpacing: -0.5, marginBottom: 10 }}>
                {t.demoSuccessTitle}
              </h3>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#625D57", lineHeight: 1.7, marginBottom: 32, fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                {t.demoSuccessSub}
              </p>
              <button
                onClick={handleClose}
                style={{ background: "#9A6108", color: "#fff", border: "none", borderRadius: 10, padding: "12px 28px", fontFamily: "var(--font-dm), DM Sans, sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
              >
                {t.demoClose}
              </button>
            </div>
          ) : (
            <>
              <div style={{ padding: "28px 32px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div>
                  <h2 style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", fontWeight: 700, fontSize: 22, color: "#1C1A17", letterSpacing: -0.5, marginBottom: 6 }}>
                    {t.demoTitle}
                  </h2>
                  <p style={{ fontSize: 13, fontWeight: 300, color: "#625D57", fontFamily: "var(--font-dm), DM Sans, sans-serif" }}>
                    {t.demoSub}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close"
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#9C9590", padding: 4, marginTop: -2, flexShrink: 0 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <form onSubmit={submit} style={{ padding: "24px 32px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                {([
                  { key: "name" as const, label: t.demoName, type: "text", required: true },
                  { key: "hotel" as const, label: t.demoHotel, type: "text", required: true },
                  { key: "email" as const, label: t.demoEmail, type: "email", required: true },
                  { key: "phone" as const, label: t.demoPhone, type: "tel", required: false },
                ]).map(({ key, label, type, required }) => (
                  <div key={key}>
                    <label style={labelStyle}>
                      {label}{required && <span style={{ color: "#9A6108", marginLeft: 3 }}>*</span>}
                    </label>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={set(key)}
                      required={required}
                      style={inputStyle}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                    />
                  </div>
                ))}

                <div>
                  <label style={labelStyle}>{t.demoRooms}</label>
                  <select
                    value={form.rooms}
                    onChange={set("rooms")}
                    style={{ ...inputStyle, color: form.rooms ? "#1C1A17" : "#9C9590", appearance: "none", cursor: "pointer" }}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  >
                    <option value="">{t.demoRoomsPlaceholder}</option>
                    <option value="<20">{"< 20"}</option>
                    <option value="20-50">20 – 50</option>
                    <option value="51-150">51 – 150</option>
                    <option value="150+">150+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    marginTop: 6,
                    background: "#9A6108",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "13px 28px",
                    fontFamily: "var(--font-dm), DM Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: status === "sending" ? "default" : "pointer",
                    opacity: status === "sending" ? 0.7 : 1,
                    transition: "opacity .2s",
                  }}
                >
                  {status === "sending" ? t.demoSending : t.demoSubmit}
                </button>

                {status === "error" && (
                  <p style={{ fontSize: 12, color: "#DC2626", textAlign: "center", fontFamily: "var(--font-dm), DM Sans, sans-serif", margin: 0 }}>
                    {errorMsg || t.demoError}
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
