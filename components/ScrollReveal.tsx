"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    function reveal(instant?: boolean) {
      document.querySelectorAll<HTMLElement>(".reveal:not(.visible)").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
          if (instant) {
            el.style.transition = "none";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
          el.classList.add("visible");
        }
      });
    }

    reveal(true);
    requestAnimationFrame(() => reveal(true));

    const onScroll = () => reveal(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
