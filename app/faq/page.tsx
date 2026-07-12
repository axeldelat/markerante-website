import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CREATE_URL } from "@/lib/site";
import { FAQ_ITEMS } from "@/lib/faq";
import { FaqJsonLd } from "@/components/site/faq-json-ld";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos tus dudas sobre Markerante: qué es gratis, cuánto tarda, cómo funciona el dominio propio y cómo apareces en Google y ChatGPT.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <FaqJsonLd items={FAQ_ITEMS} />
      <h1 className="headline text-4xl sm:text-5xl">Preguntas frecuentes</h1>
      <p className="mt-5 text-lg leading-relaxed text-smoke">
        Todo lo que nos preguntan antes de empezar. Si te queda alguna duda,
        crea tu sitio gratis y compruébalo tú mismo.
      </p>

      <Accordion className="mt-10">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger className="text-left text-base font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-smoke">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <a
          href={CREATE_URL}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 rounded-full px-8 text-base font-bold"
          )}
        >
          Empieza gratis
        </a>
      </div>
    </div>
  );
}
