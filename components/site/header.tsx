import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CREATE_URL, LOGIN_URL } from "@/lib/site";

const NAV_LINKS = [
  { href: "/#herramientas", label: "Herramientas" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/precios", label: "Precios" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Markerante, inicio" className="shrink-0">
          <Image
            src="/brand/markerante_logo_horizontal.svg"
            alt="Markerante"
            width={150}
            height={32}
            priority
            className="h-7 w-auto sm:h-8"
            style={{ width: "auto" }}
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-lime/40 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LOGIN_URL}
            data-cta="header_entrar"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "hidden text-sm sm:inline-flex"
            )}
          >
            Entrar
          </a>
          <a
            href={CREATE_URL}
            data-cta="header"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-5 font-bold"
            )}
          >
            Empieza gratis
          </a>

          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-lg" }),
                "md:hidden"
              )}
              aria-label="Abrir menú"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/brand/markerante_logo_horizontal.svg"
                    alt="Markerante"
                    width={140}
                    height={30}
                    className="h-7 w-auto"
                    style={{ width: "auto" }}
                  />
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Menú móvil" className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-lime/40"
                      >
                        {link.label}
                      </Link>
                    }
                  />
                ))}
                <a
                  href={LOGIN_URL}
                  data-cta="menu_entrar"
                  className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-lime/40"
                >
                  Entrar
                </a>
                <a
                  href={CREATE_URL}
                  data-cta="menu"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-3 rounded-full font-bold"
                  )}
                >
                  Empieza gratis
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
