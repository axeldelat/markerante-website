# Notas técnicas — Landing Markerante

## Stack
- Next.js (App Router) + TypeScript, Server Components por defecto.
- Tailwind CSS + shadcn/ui.
- next/font self-host: Space Grotesk (Bold) + Roboto.
- Deploy: Vercel. Dominio: `markerante.com`.
- Proyecto **standalone** (no es el monorepo del generador).

## Relación con el app del generador (otro deploy)
El landing NO incluye el wizard ni el dashboard: solo enlaza a ellos.
- `NEXT_PUBLIC_APP_URL` = URL base del app del generador (p. ej. `https://app.markerante.com` o la que definan).
- CTA "Empieza gratis" → `${NEXT_PUBLIC_APP_URL}/crear`
- "Entrar" → `${NEXT_PUBLIC_APP_URL}/login`
- **[por definir]** URL final del app y modelo de dominios (subdominio `app.` vs paths). Dejar configurable por env.

## SEO / AEO (requisito, no opcional)
Markerante vende descubribilidad — el propio landing debe ser ejemplar:
- **Metadata** por página (`generateMetadata`): title, description, canonical, lang `es-MX`.
- **OpenGraph + Twitter**: usar `public/brand/og_image.png` (1200×630).
- **JSON-LD**: `Organization` (y opcional `SoftwareApplication`) para Markerante.
- **sitemap.xml** y **robots.txt** (App Router: `app/sitemap.ts`, `app/robots.ts`).
- **`llms.txt`**: publica uno propio en la raíz describiendo qué es Markerante y sus herramientas, para que las IAs lo lean (predicar con el ejemplo). Sirve `app/llms.txt/route.ts` o `public/llms.txt`.
- Keywords semilla: "página web para restaurante", "menú QR gratis", "cómo aparecer en Google Maps restaurante", "marketing para restaurantes México".

## Rendimiento
- `next/image` para todos los PNG de Fede (transparentes, grandes). Define `sizes` y usa `priority` solo en el hero.
- Evita animaciones pesadas (marca "sin animaciones pesadas"); respeta `prefers-reduced-motion`.
- Objetivo Lighthouse: Perf/A11y/Best/SEO altos.

## Accesibilidad
- AA. Foco visible en CTAs. `alt` descriptivo en ilustraciones de Fede (o `alt=""` si son decorativas).
- Contraste: seguir reglas de marca (lima NUNCA texto sobre claro; coral con texto negro).

## taste-skill
- Instalado vía `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`.
- Úsalo para calidad de layout/tipografía/espaciado, NO para imponer estética.
- Diales: MOTION_INTENSITY **bajo**, DESIGN_VARIANCE medio, VISUAL_DENSITY bajo (con aire).

## Analítica (placeholder)
- Deja preparado un slot para píxel/eventos (p. ej. Vercel Analytics o el que definan). No bloquea el lanzamiento.

## Legal
- `/legal/terminos` y `/legal/privacidad` (con ARCO) — estructura lista; el contenido legal real lo provee Axel.

## Entregables al terminar
- Sitio funcionando (home + /precios + /faq + legales).
- SEO/AEO completo (metadata, OG, JSON-LD, sitemap, robots, llms.txt).
- README de despliegue (env vars, comandos, dominio).
