import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/app_icon_negro_512.png`,
  description: SITE_DESCRIPTION,
  areaServed: "MX",
  sameAs: ["https://www.instagram.com/markerante"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hola@markerante.com",
  },
};

const SOFTWARE_APPLICATION = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE_DESCRIPTION,
  inLanguage: "es-MX",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "MXN",
    description:
      "Plan gratis: sitio web con IA, menú QR y subdominio incluido.",
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SOFTWARE_APPLICATION),
        }}
      />
    </>
  );
}
