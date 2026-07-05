import Image from "next/image";

import doodads from "@/public/fede/patrones/doodads.png";

const TYPES = [
  "Taquerías",
  "Cafeterías",
  "Fine dining",
  "Mariscos",
  "Pizzerías",
  "Panaderías",
  "Dark kitchens",
  "Food trucks",
];

export function ForWhom() {
  return (
    <section className="relative overflow-hidden bg-graphite text-paper">
      <Image
        src={doodads}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 -bottom-10 w-[320px] opacity-20 select-none"
      />
      <div className="relative mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="headline max-w-2xl text-3xl sm:text-4xl">
          Hecho para todo tipo de restaurante
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {TYPES.map((type) => (
            <li
              key={type}
              className="rounded-full border border-lime/40 px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-lime"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
