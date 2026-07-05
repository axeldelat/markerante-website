import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CREATE_URL } from "@/lib/site";

import fedePulgar from "@/public/fede/poses/fede_pulgar_arriba.png";

export const FREE_FEATURES = [
  "Sitio web con IA",
  "Menú QR",
  "Subdominio tunombre.markerante.com",
  "Apareces en Google y en IA",
];

export const PAID_FEATURES = [
  "Todo lo del plan Gratis",
  "Dominio propio (turestaurante.com)",
  "Reseñas de Google integradas",
  "Nuevas herramientas de pago conforme salen",
];

export function Pricing() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex items-end justify-between gap-6">
        <h2 className="headline max-w-2xl text-3xl sm:text-4xl lg:text-[2.75rem]">
          Empieza gratis. Paga solo lo que suma.
        </h2>
        <Image
          src={fedePulgar}
          alt="Fede con el pulgar arriba"
          className="hidden w-28 sm:block"
          sizes="7rem"
        />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card className="border-2 border-ink bg-ink text-paper shadow-none">
          <CardContent className="flex h-full flex-col gap-6 p-8">
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-lime">
                Plan Gratis
              </h3>
              <p className="mt-2 font-display text-4xl font-bold">$0</p>
            </div>
            <ul className="space-y-2.5 text-sm text-paper/85">
              {FREE_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-2.5">
                  <span aria-hidden className="text-lime">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={CREATE_URL}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-auto h-11 rounded-full font-bold"
              )}
            >
              Empieza gratis
            </a>
          </CardContent>
        </Card>

        <Card className="border-line bg-white shadow-none">
          <CardContent className="flex h-full flex-col gap-6 p-8">
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                Plan de pago
              </h3>
              {/* [por definir] nombre y estructura del plan de pago */}
              <p className="mt-2 text-sm text-smoke">
                Dominio propio desde ~$2,399 MXN/año
              </p>
            </div>
            <ul className="space-y-2.5 text-sm text-ink/85">
              {PAID_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-2.5">
                  <span aria-hidden className="text-coral">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/precios"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-auto h-11 rounded-full border-ink/20 font-medium"
              )}
            >
              Ver detalle de planes
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
