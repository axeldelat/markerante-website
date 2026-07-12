import Script from "next/script";

// GA4 cargado directo con gtag.js (sin GTM). Cross-domain configurado para
// que la sesión se una entre el landing y el app del generador.
const GA_ID = "G-QYDPFVZQ78";

export function Ga4Script() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}', { linker: { domains: ['markerante.com', 'app.markerante.com'] } });`}
      </Script>
    </>
  );
}
