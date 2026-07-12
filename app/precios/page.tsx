import type { Metadata } from "next";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CREATE_URL } from "@/lib/site";
import { FREE_FEATURES, PAID_FEATURES } from "@/components/sections/pricing";

import fedePulgar from "@/public/fede/poses/fede_pulgar_arriba.png";

export const metadata: Metadata = {
  title: "Precios: sitio web y menú QR gratis",
  description:
    "Crea tu sitio web y menú QR gratis. Suma dominio propio, reseñas de Google y más herramientas cuando las necesites.",
  alternates: { canonical: "/precios" },
};

export default function PreciosPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-20">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="headline text-4xl sm:text-5xl">
            Empieza gratis. Paga solo lo que suma.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-smoke">
            Crear y publicar tu sitio es gratis, sin letras chiquitas. Cuando
            tu restaurante quiera más, las herramientas de pago están listas.
          </p>
        </div>
        <Image
          src={fedePulgar}
          alt="Fede con el pulgar arriba"
          className="hidden w-32 md:block"
          sizes="8rem"
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Card className="border-2 border-ink bg-ink text-paper shadow-none">
          <CardContent className="flex h-full flex-col gap-6 p-8">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-lime">
                Plan Gratis
              </h2>
              <p className="mt-3 font-display text-5xl font-bold">$0</p>
              <p className="mt-2 text-sm text-paper/70">
                Para siempre. Sin tarjeta.
              </p>
            </div>
            <ul className="space-y-3 text-base text-paper/85">
              {FREE_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span aria-hidden className="text-lime">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={CREATE_URL}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-auto h-12 rounded-full text-base font-bold"
              )}
            >
              Empieza gratis
            </a>
          </CardContent>
        </Card>

        <Card className="border-line bg-white shadow-none">
          <CardContent className="flex h-full flex-col gap-6 p-8">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide">
                Plan de pago
              </h2>
              {/* [por definir] nombre y estructura exacta del plan de pago */}
              <p className="mt-3 font-display text-2xl font-bold text-coral">
                Desde ~$2,399 MXN/año
              </p>
              <p className="mt-2 text-sm text-smoke">
                El costo del dominio propio. Estructura final del plan por
                anunciarse.
              </p>
            </div>
            <ul className="space-y-3 text-base text-ink/85">
              {PAID_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span aria-hidden className="text-coral">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={CREATE_URL}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-auto h-12 rounded-full border-ink/20 text-base font-medium"
              )}
            >
              Consíguelo
            </a>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-sm text-smoke">
        ¿Dudas sobre los planes? Revisa las{" "}
        <a
          href="/faq"
          className="font-medium text-ink underline underline-offset-4 hover:text-coral"
        >
          preguntas frecuentes
        </a>
        .
      </p>
    </div>
  );
}
