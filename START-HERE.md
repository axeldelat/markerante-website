# 👋 START HERE — Landing de Markerante (markerante.com)

> Paquete de handoff para construir el landing con Claude Code. Léelo completo antes de escribir código.

## Qué vas a construir

El **landing / sitio de marketing de Markerante**: `markerante.com`. Es una web de conversión cuyo trabajo #1 es que dueños de restaurante creen su sitio gratis (CTA → el app del generador, en otro deploy).

**Markerante es un hub de herramientas de marketing para restaurantes en LATAM** (hechas para gente sin conocimientos técnicos). El generador de sitios es la herramienta insignia y el gancho gratis; el producto es la plataforma, y el catálogo de herramientas crece.

> ⚠️ Esto es el sitio de la **marca Markerante** (paleta lima + mascota Fede). NO es el template de los sitios que genera el producto (ese es neutral y vive en otro repo). No los confundas.

## Stack (decidido)

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** como design system (obligatorio)
- **next/font** self-host para **Space Grotesk** (titulares) y **Roboto** (cuerpo)
- Deploy: **Vercel**, dominio `markerante.com`
- Proyecto **standalone** (no es el monorepo del generador). El app del generador vive aparte; este landing enlaza a él por URL (ver `docs/tech-notes.md`).

## Skill de calidad de UI

Instala el taste-skill para mejor layout/tipografía/espaciado (anti-slop):

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

- Úsalo como capa de **calidad de layout**, NO para imponer su estética. La estética es Fede + lima (ver `docs/design-system.md`).
- Ajusta los diales: **MOTION_INTENSITY bajo** (la marca es "sin animaciones pesadas"), DESIGN_VARIANCE medio, VISUAL_DENSITY bajo (con aire).

## Orden de lectura

1. `START-HERE.md` (este archivo)
2. `CLAUDE.md` — reglas y memoria del proyecto
3. `docs/landing-brief.md` — QUÉ va en el sitio (estructura + secciones + intención)
4. `docs/content-copy.md` — TODO el copy final en es-MX, listo para pegar
5. `docs/design-system.md` — tokens de marca en Tailwind, tipografía, mapa de componentes shadcn, reglas de Fede
6. `docs/assets-manifest.md` — dónde está cada gráfico y a qué `/public` va
7. `docs/work-plan.md` — plan por fases con criterios de aceptación
8. `docs/tech-notes.md` — SEO/AEO, metadata, enlaces al app, deploy

## Assets

Todo el material de marca (logos, favicon, OG, Fede, íconos, patrones) está en `brand-assets/`. Cópialo a `/public` según `docs/assets-manifest.md`.

## Regla de oro

Directo, cálido, sin tecnicismos al usuario. Nada de "non-techie", "AEO", "SaaS" en copy visible. La marca se apoya en ilustración (Fede), **cero fotografía**.
