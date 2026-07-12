import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CREATE_URL } from "@/lib/site";

import fedeSaludo from "@/public/fede/poses/fede_saludo.png";
import sparkles from "@/public/fede/patrones/pattern_sparkles.png";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-lime">
      <Image
        src={sparkles}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-10 top-6 w-[240px] opacity-50 select-none"
      />
      <Image
        src={sparkles}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-6 w-[240px] opacity-50 select-none"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
        <Image
          src={fedeSaludo}
          alt="Fede saludando con la mano"
          className="w-36 sm:w-44"
          sizes="11rem"
        />
        <h2 className="headline mt-6 max-w-2xl text-3xl text-ink sm:text-4xl lg:text-5xl">
          Tu restaurante merece estar en internet
        </h2>
        <p className="mt-4 text-lg text-ink/80">
          Gratis, en minutos, sin complicaciones.
        </p>
        <a
          href={CREATE_URL}
          data-cta="cta_final"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 h-13 rounded-full px-10 text-lg font-bold"
          )}
        >
          Empieza gratis
        </a>
      </div>
    </section>
  );
}
