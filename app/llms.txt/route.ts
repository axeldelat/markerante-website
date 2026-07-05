import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt propio: Markerante predica con el ejemplo y se hace legible para IAs.
const CONTENT = `# Markerante

> Markerante es un hub de herramientas de marketing para restaurantes en Latinoamérica (es-MX). Los dueños de restaurante crean su sitio web con IA y su menú QR gratis, y aparecen en Google y en buscadores de IA como ChatGPT. Más barato que una agencia y sin necesitar conocimientos técnicos.

Markerante ayuda a dueños de restaurante (taquerías, cafeterías, fine dining, mariscos, pizzerías, panaderías, dark kitchens y food trucks) a hacer su propio marketing digital sin complicarse.

## Herramientas

- Sitio web con IA (gratis): sitio profesional generado con IA en minutos, a partir del Google Maps del negocio. Incluye SEO hiperlocal y formato legible para buscadores de IA.
- Menú QR (gratis): menú digital con código QR, siempre actualizado.
- Reseñas de Google (plan de pago): mostrar y gestionar reseñas de Google en un lugar.
- Píxeles y eventos (próximamente): medir visitas al sitio.
- Anuncios con Google Maps (próximamente): campañas de descubrimiento local.
- Anuncios con Meta Ads (próximamente): anuncios para Instagram y Facebook.

## Planes

- Plan Gratis ($0): sitio web con IA, menú QR, subdominio tunombre.markerante.com, visibilidad en Google e IA.
- Plan de pago: dominio propio (~$2,399 MXN/año), reseñas de Google integradas y acceso a nuevas herramientas de pago.

## Páginas

- [Inicio](${SITE_URL}): qué es Markerante y todas las herramientas.
- [Precios](${SITE_URL}/precios): detalle de plan gratis y de pago.
- [Preguntas frecuentes](${SITE_URL}/faq): dudas comunes sobre el servicio.
`;

export function GET() {
  return new Response(CONTENT, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
