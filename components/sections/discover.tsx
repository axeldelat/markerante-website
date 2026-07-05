import Image from "next/image";

import fedeDescubrible from "@/public/fede/landing/fede_descubrible.png";

const BULLETS = [
  "Apareces en Google",
  "Listo para buscadores de IA",
  "Tu info bien ordenada",
  "Rápido y ligero",
];

export function Discover() {
  return (
    <section className="bg-lime">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-none">
          <Image
            src={fedeDescubrible}
            alt="Fede siendo encontrado por un buscador de IA, con una burbuja de chat y un pin de ubicación"
            sizes="(max-width: 1024px) 24rem, 35vw"
            className="h-auto w-full"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="headline text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
            Que te encuentren en Google y en ChatGPT
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
            Cada vez más gente no busca en Google: le pregunta a ChatGPT
            “¿dónde como tacos cerca?”. Markerante prepara tu sitio para los
            dos mundos: para que Google te encuentre y para que las IAs puedan
            recomendarte. Casi nadie lo está haciendo todavía.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {BULLETS.map((bullet) => (
              <li
                key={bullet}
                className="rounded-full bg-ink px-5 py-2.5 text-center font-display text-sm font-bold uppercase tracking-wide text-lime"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
