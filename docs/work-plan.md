# Plan de trabajo — Landing Markerante

Plan por fases para Claude Code. Cada fase tiene criterios de aceptación. Trabaja mobile-first y ve mostrando avances.

## Fase 0 — Setup
- [ ] Scaffold Next.js (App Router, TS) en este directorio (`04_sitio_web_markerante`).
- [ ] Tailwind + shadcn/ui inicializados.
- [ ] Instalar taste-skill (`design-taste-frontend`), MOTION_INTENSITY bajo.
- [ ] next/font: Space Grotesk (Bold) + Roboto self-host.
- [ ] Tokens de marca en `globals.css` + `tailwind.config` (ver `design-system.md`).
- [ ] Copiar `brand-assets/` → `/public` según `assets-manifest.md`.
- [ ] `.env`: `NEXT_PUBLIC_APP_URL` (URL del app del generador).
- **Aceptación:** `bg-lime`, `text-ink`, `bg-coral`, `bg-paper` funcionan; fuentes cargan; un `Button` shadcn se ve con la marca.

## Fase 1 — Layout base
- [ ] Header sticky (NavigationMenu + Sheet móvil) con lockup y CTA coral.
- [ ] Footer con columnas + lockup lima.
- [ ] Sistema de secciones/contenedor (máx ~1200px, ritmo de fondos marfil/negro/coral).
- **Aceptación:** header/footer responsivos; navegación ancla funciona; CTA enlaza a `${NEXT_PUBLIC_APP_URL}/crear`.

## Fase 2 — Home (long-scroll)
Construye las 11 secciones con el copy de `content-copy.md` y los gráficos de `assets-manifest.md`:
- [ ] S1 Hero · [ ] S2 Barra de valor · [ ] S3 Dolor · [ ] S4 Herramientas (grid data-driven) · [ ] S5 Cómo funciona · [ ] S6 Descubribilidad · [ ] S7 Ejemplo · [ ] S8 Para quién · [ ] S9 Precios · [ ] S10 FAQ (Accordion) · [ ] S11 CTA final.
- **Aceptación:** copy exacto; Fede/íconos colocados; grid de herramientas renderiza desde array de datos con badges; contraste AA; se ve bien en móvil y desktop.

## Fase 3 — Páginas de soporte
- [ ] `/precios` (Gratis vs Pago, detalle).
- [ ] `/faq` (todas las preguntas).
- [ ] `/legal/terminos` y `/legal/privacidad` (placeholders con estructura; contenido legal lo provee Axel).
- **Aceptación:** navegables desde header/footer; metadata propia por página.

## Fase 4 — SEO / AEO (requisito)
- [ ] Metadata por página (title, description, canonical).
- [ ] OpenGraph + Twitter card (usar `og_image.png`).
- [ ] JSON-LD `Organization` / `SoftwareApplication` para Markerante.
- [ ] `sitemap.xml`, `robots.txt`.
- [ ] `llms.txt` propio (predicar con el ejemplo). Ver `tech-notes.md`.
- **Aceptación:** Lighthouse SEO ~100; OG se previsualiza bien; `llms.txt` accesible.

## Fase 5 — Pulido y QA
- [ ] Motion sutil (respetando `prefers-reduced-motion`).
- [ ] Accesibilidad AA (foco visible, alt en imágenes de Fede, labels).
- [ ] Performance (imágenes optimizadas `next/image`, lazy).
- [ ] Responsive final (360px → desktop).
- [ ] Revisar reglas de marca (lima nunca texto sobre claro; coral con texto negro).
- **Aceptación:** Lighthouse Perf/A11y/SEO altos; sin errores de consola; checklist de marca ok.

## Pendientes de negocio (Axel los cierra; dejar placeholders)
- Nombre y estructura del plan de pago.
- ¿Menú QR 100% gratis sin límite?
- H1 final (hay alternativas para A/B).
- Contenido legal real (Términos, Privacidad/ARCO).
- URL final del app del generador (`NEXT_PUBLIC_APP_URL`).
