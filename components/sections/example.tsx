import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CREATE_URL } from "@/lib/site";

import fedeLaptop from "@/public/fede/escenas/fede_laptop_marketing.png";

export function Example() {
  return (
    <section
      id="ejemplo"
      className="mx-auto max-w-[1200px] scroll-mt-16 px-4 py-16 text-center sm:px-6 lg:py-24"
    >
      <h2 className="headline mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem]">
        Así se ve un sitio hecho con Markerante
      </h2>
      <p className="mt-4 text-lg text-smoke">
        Generado en minutos, listo para recibir clientes.
      </p>

      {/* Marco de navegador para el screenshot del sitio demo.
          TODO: reemplazar la ilustración por el screenshot real del demo
          del generador cuando esté disponible (docs/landing-brief.md §S7). */}
      <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-3">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-line" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-line" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 rounded-md bg-white px-3 py-0.5 text-xs text-smoke">
            tunombre.markerante.com
          </span>
        </div>
        <div className="flex items-center justify-center bg-paper/60 px-6 py-12">
          <Image
            src={fedeLaptop}
            alt="Fede mostrando en su laptop un sitio de restaurante recién generado"
            className="h-auto w-full max-w-md"
            sizes="(max-width: 768px) 90vw, 28rem"
          />
        </div>
      </div>

      <a
        href={CREATE_URL}
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-10 h-12 rounded-full px-8 text-base font-bold"
        )}
      >
        Crea el tuyo gratis
      </a>
    </section>
  );
}
