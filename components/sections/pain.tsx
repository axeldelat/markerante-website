import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import fedePensando from "@/public/fede/poses/fede_pensando.png";
import iconUbicacion from "@/public/fede/iconos/icon_ubicacion.png";
import iconGrafica from "@/public/fede/iconos/icon_grafica.png";
import iconCampana from "@/public/fede/iconos/icon_campana.png";

const PAINS = [
  {
    title: "No apareces cuando te buscan",
    icon: iconUbicacion,
  },
  {
    title: "Las agencias cobran caro y no siempre entregan",
    icon: iconGrafica,
  },
  {
    title: "No tienes tiempo para complicarte",
    icon: iconCampana,
  },
];

export function Pain() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem]">
            Si no apareces en internet, existes solo para quien ya te conoce
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-smoke">
            La gente decide dónde comer buscando en Google y, cada vez más,
            preguntándole a ChatGPT. Si tu restaurante no aparece, te están
            eligiendo a la competencia. Hacer marketing suena a estudiar mil
            cosas o pagarle un dineral a una agencia — y no tienes tiempo para
            ninguna de las dos.
          </p>
        </div>
        <Image
          src={fedePensando}
          alt="Fede pensando, con cara de duda"
          className="mx-auto hidden w-40 lg:block"
          sizes="10rem"
        />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {PAINS.map((pain) => (
          <Card key={pain.title} className="border-line bg-white shadow-none">
            <CardContent className="flex flex-col gap-4 p-6">
              <Image
                src={pain.icon}
                alt=""
                aria-hidden
                className="h-12 w-12 object-contain"
              />
              <p className="font-display text-base font-bold uppercase leading-snug tracking-wide">
                {pain.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
