import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { CREATE_URL } from "@/lib/site";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Herramientas",
    links: [
      { label: "Sitio web con IA", href: "/#herramientas" },
      { label: "Menú QR", href: "/#herramientas" },
      { label: "Reseñas de Google", href: "/#herramientas" },
    ],
  },
  {
    title: "Producto",
    links: [
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "Precios", href: "/precios" },
      { label: "Ejemplo", href: "/#ejemplo" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Blog (próximamente)", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y condiciones", href: "/legal/terminos" },
      { label: "Aviso de privacidad", href: "/legal/privacidad" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="space-y-4">
            <Image
              src="/brand/markerante_lockup_dark.svg"
              alt="Markerante"
              width={170}
              height={36}
              className="h-9 w-auto"
              style={{ width: "auto" }}
            />
            <p className="max-w-xs text-sm leading-relaxed text-paper/70">
              Todo el marketing de tu restaurante, en un solo lugar.
            </p>
            <a
              href={CREATE_URL}
              className="inline-flex items-center rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:-translate-y-px"
            >
              Empieza gratis
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="space-y-3">
              <h2 className="font-display text-sm font-bold uppercase tracking-wide text-lime">
                {col.title}
              </h2>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-8 bg-paper/15" />

        <div className="flex flex-col items-start justify-between gap-2 text-sm text-paper/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Markerante</p>
          <p>Hecho en México 🇲🇽</p>
        </div>
      </div>
    </footer>
  );
}
