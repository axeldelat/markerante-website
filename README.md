# markerante.com — Landing de Markerante

Landing de marketing de **Markerante**, el hub de herramientas de marketing para restaurantes en LATAM (es-MX). Su trabajo #1 es convertir dueños de restaurante: el CTA "Empieza gratis" los manda al app del generador a crear su sitio.

- **Producción (este sitio):** https://www.markerante.com
- **App del generador (otro repo/deploy):** https://markerante.com — código en [axeldelat/restaurant-site-generator-0626](https://github.com/axeldelat/restaurant-site-generator-0626)

> ⚠️ Este repo es el sitio de la **marca Markerante** (paleta lima + mascota Fede). No es el template de los sitios que genera el producto; ese vive en el repo del generador. Reglas de marca, voz y arquitectura: [CLAUDE.md](CLAUDE.md) y [docs/](docs/).

## Stack

- **Next.js 16** (App Router) + TypeScript, Server Components por defecto
- **Tailwind CSS v4** + **shadcn/ui** (tokens de marca como CSS vars en `app/globals.css`)
- **next/font** para Space Grotesk (titulares) y Roboto (cuerpo) — sin CDNs de fuentes en runtime
- Deploy: **Vercel**, proyecto `website-markerante-2026`

## Desarrollo

```bash
pnpm install
cp .env.example .env.local   # ajusta las URLs si hace falta
pnpm dev                     # http://localhost:3000
```

## Variables de entorno

| Variable | Qué es | Producción |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | URL base del app del generador ([repo](https://github.com/axeldelat/restaurant-site-generator-0626)). Los CTAs apuntan a `/crear` y `/login` de esta URL. | `https://markerante.com` |
| `NEXT_PUBLIC_SITE_URL` | URL canónica de este landing (metadata, sitemap, llms.txt). Vive en `www`. | `https://www.markerante.com` |

Ambas están configuradas en Vercel para Production y Preview. Sin env vars, los defaults de [lib/site.ts](lib/site.ts) usan esos mismos valores.

## Estructura

```
app/                    Rutas: home, /precios, /faq, /legal/*
  sitemap.ts            sitemap.xml
  robots.ts             robots.txt
  llms.txt/route.ts     llms.txt propio (AEO: legible para buscadores de IA)
components/sections/    Las 11 secciones de la home (S1 Hero → S11 CTA final)
components/site/        Header, Footer, JSON-LD (Organization + SoftwareApplication)
components/ui/          shadcn/ui
lib/site.ts             URLs y metadata base
lib/tools.ts            Catálogo de herramientas del grid (data-driven: agregar una = una entrada)
lib/faq.ts              Preguntas frecuentes (home muestra 5, /faq todas)
public/brand/           Logos, favicon, OG image
public/fede/            Mascota Fede: poses, escenas, íconos, patrones
brand-assets/           Fuente original de los assets (se copian a /public)
docs/                   Handoff: brief, copy aprobado, design system, plan de trabajo
```

## Build y deploy

```bash
pnpm build   # build de producción (100% estático)
pnpm start   # servir el build local

vercel deploy --prod --yes   # deploy a producción
```

**Dominios:** este proyecto lleva `www.markerante.com`. La raíz `markerante.com` pertenece al deploy del app del generador.

## Relación con el app del generador

El landing **no** incluye el wizard ni el dashboard — solo enlaza:

- `Empieza gratis` → `${NEXT_PUBLIC_APP_URL}/crear`
- `Entrar` → `${NEXT_PUBLIC_APP_URL}/login`

El app vive en [axeldelat/restaurant-site-generator-0626](https://github.com/axeldelat/restaurant-site-generator-0626) y se deploya aparte. Los sitios que genera usan un template neutral propio; no comparten look con la marca Markerante.

## Pendientes de negocio (placeholders en el sitio)

- Nombre y estructura del plan de pago (`/precios` y sección S9 de la home).
- Contenido legal real de `/legal/terminos` y `/legal/privacidad` (ARCO).
- Screenshot real del sitio demo del generador para la sección "Mira un ejemplo" (hoy hay un marco de navegador con ilustración de Fede).
- Confirmar rutas del app (`/crear`, `/login`) cuando esté deployado en `markerante.com`.
