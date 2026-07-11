// Configuración central del sitio: URLs, metadata base y enlaces al app del generador.

// El landing vive en www.markerante.com; el app del generador en app.markerante.com.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.markerante.com";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.markerante.com";

export const CREATE_URL = `${APP_URL}/crear`;
export const LOGIN_URL = `${APP_URL}/login`;

export const SITE_NAME = "Markerante";
export const SITE_TITLE =
  "Markerante — Todo el marketing de tu restaurante en un solo lugar";
export const SITE_DESCRIPTION =
  "Herramientas de marketing para tu restaurante, fáciles de usar y sin pagar caro a una agencia. Crea tu sitio web y menú QR gratis, y aparece en Google y ChatGPT.";
