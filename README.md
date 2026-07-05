# markerante.com — Landing de Markerante

Landing de marketing de **Markerante**, el hub de herramientas de marketing para restaurantes en LATAM. Next.js (App Router) + Tailwind CSS v4 + shadcn/ui.

> Reglas de marca, voz y arquitectura: ver [CLAUDE.md](CLAUDE.md) y [docs/](docs/).

## Desarrollo

```bash
pnpm install
cp .env.example .env.local   # ajusta las URLs si hace falta
pnpm dev                     # http://localhost:3000
```

## Variables de entorno

| Variable | Qué es | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | URL base del app del generador (otro deploy, vive en la raíz del dominio). Los CTAs apuntan a `/crear` y `/login` de esta URL. | `https://markerante.com` |
| `NEXT_PUBLIC_SITE_URL` | URL canónica de este sitio (metadata, sitemap, llms.txt). El landing vive en `www`. | `https://www.markerante.com` |

## Estructura

- `app/` — rutas: home, `/precios`, `/faq`, `/legal/*`, más `sitemap.ts`, `robots.ts` y `llms.txt/route.ts` (SEO/AEO).
- `components/sections/` — las 11 secciones de la home.
- `components/site/` — header, footer, JSON-LD.
- `lib/` — configuración del sitio (`site.ts`), catálogo de herramientas (`tools.ts`), FAQ (`faq.ts`).
- `public/brand/` y `public/fede/` — assets de marca (copiados de `brand-assets/`).

## Build y deploy

```bash
pnpm build   # build de producción
pnpm start   # servir el build
```

Deploy en **Vercel** (proyecto `website-markerante-2026`):

```bash
vercel --prod
```

Configura `NEXT_PUBLIC_APP_URL` y `NEXT_PUBLIC_SITE_URL` en las Environment Variables del proyecto en Vercel. Dominio de producción del landing: `www.markerante.com` (la raíz `markerante.com` es del app del generador).

## Pendientes de negocio (placeholders en el sitio)

- Nombre y estructura del plan de pago (`/precios` y sección S9).
- Contenido legal real de `/legal/terminos` y `/legal/privacidad` (ARCO).
- Screenshot real del sitio demo para la sección "Mira un ejemplo".
- Confirmar rutas del app del generador (`/crear`, `/login`) cuando esté deployado en `markerante.com`.
