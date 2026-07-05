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

export default function Home() {
  return (
    <>
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
