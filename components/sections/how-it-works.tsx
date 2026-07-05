import Image from "next/image";

import fedeSenalando from "@/public/fede/poses/fede_senalando.png";
import fedeLaptop from "@/public/fede/escenas/fede_laptop_marketing.png";
import fedeCelebrando from "@/public/fede/poses/fede_celebrando.png";

const STEPS = [
  {
    title: "Pega tu Google Maps",
    body: "Tomamos lo que ya existe de tu negocio. Sin formularios eternos.",
    image: fedeSenalando,
    alt: "Fede señalando el primer paso",
  },
  {
    title: "La IA arma tu sitio con tu voz",
    body: "Textos, secciones y estilo listos en segundos. Tú solo revisas.",
    image: fedeLaptop,
    alt: "Fede trabajando en una laptop",
  },
  {
    title: "Publica y aparece",
    body: "Tu restaurante encontrable en Google y ChatGPT. Gratis.",
    image: fedeCelebrando,
    alt: "Fede celebrando con los brazos arriba",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-[1200px] scroll-mt-16 px-4 py-16 sm:px-6 lg:py-24"
    >
      <h2 className="headline max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem]">
        Tu restaurante en internet, en 3 pasos
      </h2>

      <ol className="mt-12 grid gap-10 sm:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="relative flex flex-col">
            <div className="flex h-44 items-end justify-center">
              <Image
                src={step.image}
                alt={step.alt}
                className="max-h-44 w-auto object-contain"
                sizes="(max-width: 640px) 60vw, 20rem"
              />
            </div>
            <div className="mt-6 flex items-baseline gap-3">
              <span
                aria-hidden
                className="font-display text-4xl font-bold text-coral"
              >
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-bold uppercase leading-snug tracking-wide">
                {step.title}
              </h3>
            </div>
            <p className="mt-2 text-base leading-relaxed text-smoke">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
