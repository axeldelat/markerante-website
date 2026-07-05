# CLAUDE.md — Landing Markerante

Memoria y reglas para el desarrollo del landing `markerante.com`. Respeta esto en todo momento.

## Qué es
Landing de marketing de **Markerante**, un hub de herramientas de marketing para restaurantes en LATAM (es-MX). Proyecto **standalone** Next.js + Tailwind + shadcn/ui. Objetivo: convertir dueños de restaurante → crear su sitio gratis (CTA al app del generador, deploy aparte).

## Reglas de marca
- **Paleta:** negro `#1C1716` · verde lima `#E5FC78` (hero) · coral `#FF6B4A` (CTAs/acento) · marfil `#FAFFF2` (fondo) · blanco `#FEFEFE`. Neutros: grafito `#2A2422`, gris medio `#6B6560`, gris claro `#E8E7E2`.
- **Combinación firma:** negro + lima. Lima nunca como texto sobre claro (contraste bajo); úsalo sobre negro o como fondo. Coral con texto negro encima. Máx. 3 colores por pieza.
- **Tipografía:** titulares **Space Grotesk Bold, MAYÚSCULAS**; cuerpo **Roboto**; acento selectivo Stoke (opcional).
- **Mascota Fede:** blob lima doodle con gorro de chef. Es el vocero del sitio. **Cero fotografía** — todo ilustrado.
- **Logo:** lockup/isologo lima (en `brand-assets/logo/`).

## Reglas de voz (copy)
- Directo, cálido, de tú, sin rodeos. Aliado del dueño.
- **Prohibido en copy visible:** "non-techie", "AEO", "SaaS", jerga técnica. "Sin saber de tecnología" se dice como *"fácil"* / *"sin complicarte"*.
- Ángulo: todo tu marketing en un lugar, fácil, más barato que una agencia, de la mano de expertos. Beneficio estrella: que te encuentren en Google **y** en ChatGPT.

## Reglas técnicas
- Tailwind + shadcn/ui obligatorio. Tokens de marca como CSS vars mapeadas al theme de Tailwind (ver `docs/design-system.md`).
- next/font self-host (Space Grotesk + Roboto). Sin CDNs de fuentes.
- **Motion bajo** (marca "sin animaciones pesadas"): micro-interacciones sutiles, nada de scroll-jacking ni animaciones pesadas.
- Accesibilidad AA. Mobile-first. Server Components por defecto; client solo donde haga falta.
- SEO/AEO es requisito, no opcional: metadata, OpenGraph, JSON-LD, sitemap, robots, y `llms.txt` propio (ver `docs/tech-notes.md`).
- No fotografía de stock. Usa los assets de `brand-assets/`.

## Enlaces al app (otro deploy)
- CTA "Empieza gratis" → `${NEXT_PUBLIC_APP_URL}/crear`
- "Entrar" → `${NEXT_PUBLIC_APP_URL}/login`
- Definir `NEXT_PUBLIC_APP_URL` por env (ver `docs/tech-notes.md`).

## No hacer
- No inventar métricas, premios ni reseñas falsas.
- No mezclar la marca Markerante (lima/Fede) con el look del template de los sitios de clientes.
- No meter fotografía. No usar lima como color de texto sobre fondo claro.
