export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿De verdad es gratis?",
    answer:
      "Sí. Crear y publicar tu sitio y tu menú QR es gratis. Solo pagas si quieres dominio propio o las herramientas del plan de pago.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer:
      "No. Si sabes usar WhatsApp, puedes. Pegas tu Google Maps y la IA hace el resto.",
  },
  {
    question: "¿Cuánto tarda?",
    answer: "Minutos. En serio.",
  },
  {
    question: "¿Qué es eso de “aparecer en ChatGPT”?",
    answer:
      "Preparamos tu sitio para que los buscadores de IA puedan leerlo y recomendar tu restaurante cuando alguien pregunte dónde comer.",
  },
  {
    question: "¿Puedo usar mi propio dominio?",
    answer:
      "Sí, con el plan de pago. Si no, tu sitio vive en tunombre.markerante.com, también gratis.",
  },
  {
    question: "¿Y si ya tengo página?",
    answer:
      "Puedes crear la tuya con Markerante para mejorar tu presencia y aparecer en IA, o migrar tu dominio.",
  },
  {
    question:
      "¿Funciona para dark kitchens, food trucks o negocios sin local fijo?",
    answer: "Sí.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Sí. Cumplimos con la ley mexicana de protección de datos y puedes ejercer tus derechos ARCO.",
  },
];

// Las 5 destacadas que se muestran en la home.
export const FAQ_HOME = FAQ_ITEMS.slice(0, 5);
