import Image from "next/image";

import iconSparkle from "@/public/fede/iconos/icon_sparkle.png";
import iconCohete from "@/public/fede/iconos/icon_cohete.png";
import iconUbicacion from "@/public/fede/iconos/icon_ubicacion.png";
import iconGrafica from "@/public/fede/iconos/icon_grafica.png";

const PILLARS = [
  { label: "Fácil de usar", icon: iconSparkle },
  { label: "Más barato que una agencia", icon: iconGrafica },
  { label: "Tu presencia digital hoy", icon: iconCohete },
  { label: "Hecho por expertos", icon: iconUbicacion },
];

export function ValueBar() {
  return (
    <section aria-label="Por qué Markerante" className="bg-ink text-paper">
      <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {PILLARS.map((pillar) => (
          <li key={pillar.label} className="flex items-center gap-3">
            <Image
              src={pillar.icon}
              alt=""
              aria-hidden
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="font-display text-sm font-bold uppercase tracking-wide text-lime sm:text-base">
              {pillar.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
