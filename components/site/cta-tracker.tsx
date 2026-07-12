"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Dispara el evento GA4 directo al hacer clic en cualquier enlace con data-cta.
// generate_lead cuando el destino es el generador (/crear); cta_click para el
// resto (p. ej. login). Delegación en document para no volver client cada sección.
export function CtaTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[data-cta]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const eventName = href.includes("/crear") ? "generate_lead" : "cta_click";
      window.gtag?.("event", eventName, {
        cta_location: link.dataset.cta,
        link_url: href,
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
