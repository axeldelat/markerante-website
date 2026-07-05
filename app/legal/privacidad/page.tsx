import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de Markerante y ejercicio de derechos ARCO.",
  alternates: { canonical: "/legal/privacidad" },
  robots: { index: false },
};

// Placeholder estructural: el contenido legal real (LFPDPPP/ARCO) lo provee Axel.
export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <h1 className="headline text-4xl">Aviso de privacidad</h1>
      <p className="mt-5 text-smoke">
        Última actualización: por publicar.
      </p>

      <div className="mt-10 space-y-8 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            1. Responsable del tratamiento
          </h2>
          <p className="mt-3 text-smoke">
            Contenido en preparación. Aquí identificaremos al responsable del
            tratamiento de tus datos personales.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            2. Datos que recabamos y finalidades
          </h2>
          <p className="mt-3 text-smoke">
            Contenido en preparación. Aquí detallaremos qué datos recabamos y
            para qué los usamos.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            3. Derechos ARCO
          </h2>
          <p className="mt-3 text-smoke">
            Contenido en preparación. Aquí explicaremos cómo ejercer tus
            derechos de Acceso, Rectificación, Cancelación y Oposición
            conforme a la ley mexicana de protección de datos.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            4. Contacto
          </h2>
          <p className="mt-3 text-smoke">
            Contenido en preparación. Aquí publicaremos el medio para
            solicitudes de privacidad.
          </p>
        </section>
      </div>
    </div>
  );
}
