import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_HOME } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <h2 className="headline text-center text-3xl sm:text-4xl">
        Preguntas frecuentes
      </h2>

      <Accordion className="mt-10">
        {FAQ_HOME.map((item) => (
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

      <p className="mt-8 text-center">
        <Link
          href="/faq"
          className="font-medium text-ink underline underline-offset-4 hover:text-coral"
        >
          Ver todas las preguntas
        </Link>
      </p>
    </section>
  );
}
