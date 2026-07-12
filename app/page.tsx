import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { ValueBar } from "@/components/sections/value-bar";
import { Pain } from "@/components/sections/pain";
import { Tools } from "@/components/sections/tools";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Discover } from "@/components/sections/discover";
import { Example } from "@/components/sections/example";
import { ForWhom } from "@/components/sections/for-whom";
import { Pricing } from "@/components/sections/pricing";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { FaqJsonLd } from "@/components/site/faq-json-ld";
import { FAQ_HOME } from "@/lib/faq";

// Title con keywords transaccionales para búsqueda; el título de marca se
// conserva en OpenGraph (definido en el layout). Canonical propio de la home.
export const metadata: Metadata = {
  title: {
    absolute: "Página web y menú QR gratis para tu restaurante | Markerante",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <FaqJsonLd items={FAQ_HOME} />
      <Hero />
      <ValueBar />
      <Pain />
      <Tools />
      <HowItWorks />
      <Discover />
      <Example />
      <ForWhom />
      <Pricing />
      <FaqSection />
      <FinalCta />
    </>
  );
}
