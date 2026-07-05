import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso de Markerante.",
  alternates: { canonical: "/legal/terminos" },
  robots: { index: false },
};

// Placeholder estructural: el contenido legal real lo provee Axel.
export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <h1 className="headline text-4xl">Términos y condiciones</h1>
      <p className="mt-5 text-smoke">
        Última actualización: por publicar.
      </p>

      <div className="mt-10 space-y-8 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            1. Sobre Markerante
          </h2>
          <p className="mt-3 text-smoke">
            Contenido en preparación. Aquí describiremos quién opera
            Markerante y el alcance del servicio.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            2. Uso del servicio
          </h2>
          <p className="mt-3 text-smoke">
            Contenido en preparación. Aquí describiremos las condiciones de
            uso de las herramientas, cuentas y planes.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            3. Planes y pagos
          </h2>
          <p className="mt-3 text-smoke">
            Contenido en preparación. Aquí describiremos los planes gratis y
            de pago, renovaciones y cancelaciones.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            4. Contacto
          </h2>
          <p className="mt-3 text-smoke">
            Contenido en preparación. Aquí publicaremos los medios de
            contacto para temas legales.
          </p>
        </section>
      </div>
    </div>
  );
}
