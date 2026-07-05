// Catálogo de herramientas del hub. Agregar una herramienta = agregar una entrada.

export type ToolStatus = "free" | "paid" | "soon";

export type Tool = {
  name: string;
  blurb: string;
  icon: string;
  status: ToolStatus;
};

export const TOOL_BADGES: Record<ToolStatus, string> = {
  free: "Gratis",
  paid: "Incluida en pago",
  soon: "Próximamente",
};

export const TOOLS: Tool[] = [
  {
    name: "Sitio web con IA",
    blurb: "Tu sitio profesional, generado con IA en minutos.",
    icon: "/fede/iconos/icon_cohete.png",
    status: "free",
  },
  {
    name: "Menú QR",
    blurb: "Tu menú digital con código QR, siempre actualizado.",
    icon: "/fede/landing/icon_menu_qr.png",
    status: "free",
  },
  {
    name: "Reseñas de Google",
    blurb: "Muestra y gestiona tus reseñas de Google en un lugar.",
    icon: "/fede/iconos/icon_resena.png",
    status: "paid",
  },
  {
    name: "Píxeles y eventos",
    blurb: "Mide quién visita tu sitio y qué hace.",
    icon: "/fede/iconos/icon_grafica.png",
    status: "soon",
  },
  {
    name: "Anuncios con Google Maps",
    blurb: "Genera campañas para que te encuentren cerca.",
    icon: "/fede/iconos/icon_ubicacion.png",
    status: "soon",
  },
  {
    name: "Anuncios con Meta Ads",
    blurb: "Crea anuncios para Instagram y Facebook, fácil.",
    icon: "/fede/landing/icon_anuncios.png",
    status: "soon",
  },
];
