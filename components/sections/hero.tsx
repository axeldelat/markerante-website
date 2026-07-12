import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CREATE_URL } from "@/lib/site";

import fedeHero from "@/public/fede/landing/fede_hero_presenta.png";
import blob1 from "@/public/fede/patrones/blob_1.png";
import sparkles from "@/public/fede/patrones/pattern_sparkles.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={blob1}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 w-[420px] opacity-60 select-none"
      />
      <Image
        src={sparkles}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-8 w-[280px] opacity-40 select-none"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-4 inline-block rounded-full bg-ink px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.14em] text-lime">
            Herramientas de marketing para restaurantes
          </p>
          <h1 className="headline text-4xl sm:text-5xl lg:text-6xl">
            Todo el marketing de tu restaurante,{" "}
            <span className="bg-lime px-2 [box-decoration-break:clone]">
              en un solo lugar
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
            Herramientas sencillas para hacer tu propio marketing y empezar tu
            presencia digital hoy. Sin estudiar de más, sin pagarle un dineral
            a una agencia — y de la mano de expertos.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CREATE_URL}
              data-cta="hero"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-full px-8 text-base font-bold"
              )}
            >
              Empieza gratis
            </a>
            <a
              href="#herramientas"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full border-ink/20 px-8 text-base font-medium"
              )}
            >
              Ver herramientas
            </a>
          </div>
          <p className="mt-4 text-sm text-smoke">
            Gratis · Fácil de usar · Listo en minutos
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src={fedeHero}
            alt="Fede, la mascota de Markerante, presentando un sitio web de restaurante en un celular"
            priority
            sizes="(max-width: 1024px) 28rem, 40vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
