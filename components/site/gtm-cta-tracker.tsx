"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Empuja un evento `cta_click` al dataLayer cuando se hace clic en cualquier
// enlace marcado con `data-cta`. GTM lo usa para disparar el evento GA4
// `generate_lead` (condicionado a que el destino contenga "/crear").
// Delegación en document para no convertir cada sección en client component.
export function GtmCtaTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[data-cta]");
      if (!link) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cta_click",
        cta: link.dataset.cta,
        destino: link.getAttribute("href"),
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
