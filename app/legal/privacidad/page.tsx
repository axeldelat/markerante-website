import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de Markerante conforme a la LFPDPPP: qué datos recabamos, para qué, y cómo ejercer tus derechos ARCO.",
  alternates: { canonical: "/legal/privacidad" },
};

const LAST_UPDATED = "11 de julio de 2026";
const ARCO_EMAIL = "privacidad@markerante.com";

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <h1 className="headline text-4xl">Aviso de privacidad</h1>
      <p className="mt-5 text-smoke">Última actualización: {LAST_UPDATED}.</p>

      <p className="mt-6 leading-relaxed text-smoke">
        <strong className="text-ink">Axel F. de la Torre G.</strong>, persona
        física con actividad empresarial, con domicilio en Arenys 103,
        Solidaridad, Playa del Carmen, Quintana Roo, C.P. 77724 (en adelante,
        &ldquo;Markerante&rdquo;), es el responsable del uso, tratamiento y
        protección de tus datos personales, conforme a la Ley Federal de
        Protección de Datos Personales en Posesión de los Particulares
        (LFPDPPP) y su normativa aplicable. Este aviso cubre el sitio{" "}
        <span className="whitespace-nowrap">www.markerante.com</span> y la
        aplicación en{" "}
        <span className="whitespace-nowrap">app.markerante.com</span>.
      </p>

      <div className="mt-10 space-y-8 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            1. Responsable de tus datos
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-smoke">
            <li>Responsable: Axel F. de la Torre G.</li>
            <li>
              Domicilio: Arenys 103, Solidaridad, Playa del Carmen, Quintana
              Roo, C.P. 77724.
            </li>
            <li>
              Contacto y derechos ARCO:{" "}
              <a className="underline" href={`mailto:${ARCO_EMAIL}`}>
                {ARCO_EMAIL}
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            2. Datos que recabamos
          </h2>
          <p className="mt-3 text-smoke">
            Según cómo interactúes con nosotros, podemos recabar:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-smoke">
            <li>
              <strong className="text-ink">Al navegar el sitio:</strong> datos
              técnicos y de navegación (dirección IP, tipo de dispositivo y
              navegador, páginas visitadas e interacciones), mediante cookies y
              tecnologías similares.
            </li>
            <li>
              <strong className="text-ink">Al crear una cuenta o usar la
              app:</strong> nombre, correo electrónico y, en su caso, teléfono;
              así como los datos de tu restaurante (nombre, dirección, enlace de
              Google Maps, menú, horarios e imágenes) que proporciones o
              autorices tomar.
            </li>
            <li>
              <strong className="text-ink">Si contratas un plan de
              pago:</strong> datos de facturación. Los datos de pago se procesan
              directamente por nuestro procesador de pagos; Markerante no
              almacena números completos de tarjeta.
            </li>
          </ul>
          <p className="mt-3 text-smoke">
            No recabamos datos personales sensibles.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            3. Finalidades del tratamiento
          </h2>
          <p className="mt-3 text-smoke">
            <strong className="text-ink">Primarias</strong> (necesarias para
            prestarte el servicio):
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-smoke">
            <li>Crear, autenticar y administrar tu cuenta.</li>
            <li>
              Generar, publicar y alojar tu sitio web y menú QR, y operar las
              herramientas que contrates.
            </li>
            <li>Procesar pagos y emitir comprobantes cuando aplique.</li>
            <li>Brindarte soporte y responder tus solicitudes.</li>
            <li>Cumplir obligaciones legales y de seguridad.</li>
          </ul>
          <p className="mt-4 text-smoke">
            <strong className="text-ink">Secundarias</strong> (no necesarias
            para el servicio; puedes oponerte sin afectar su uso):
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-smoke">
            <li>Enviarte comunicaciones comerciales y novedades de producto.</li>
            <li>Analítica, métricas de uso y mejoras del servicio.</li>
            <li>Encuestas y estudios de satisfacción.</li>
          </ul>
          <p className="mt-3 text-smoke">
            Si no deseas que tus datos se usen para las finalidades secundarias,
            puedes manifestarlo enviando un correo a{" "}
            <a className="underline" href={`mailto:${ARCO_EMAIL}`}>
              {ARCO_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            4. Transferencias y encargados
          </h2>
          <p className="mt-3 text-smoke">
            Para operar el servicio utilizamos proveedores que tratan datos por
            cuenta de Markerante (encargados), entre ellos: alojamiento e
            infraestructura (Vercel), analítica y medición (Google), servicios
            de inteligencia artificial para generar el contenido de tu sitio, y
            nuestro procesador de pagos. Algunos proveedores pueden ubicarse
            fuera de México. No transferimos tus datos a terceros para
            finalidades distintas de la prestación del servicio sin tu
            consentimiento, salvo en los casos previstos por el artículo 37 de
            la LFPDPPP.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            5. Derechos ARCO
          </h2>
          <p className="mt-3 text-smoke">
            Tienes derecho a <strong className="text-ink">Acceder</strong> a tus
            datos, <strong className="text-ink">Rectificarlos</strong> cuando
            sean inexactos, <strong className="text-ink">Cancelarlos</strong>{" "}
            cuando consideres que no se requieren y{" "}
            <strong className="text-ink">Oponerte</strong> a su tratamiento
            (derechos ARCO), así como revocar tu consentimiento. Para
            ejercerlos, envía tu solicitud a{" "}
            <a className="underline" href={`mailto:${ARCO_EMAIL}`}>
              {ARCO_EMAIL}
            </a>{" "}
            con:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-smoke">
            <li>Tu nombre completo y un medio para recibir la respuesta.</li>
            <li>Documento que acredite tu identidad o representación legal.</li>
            <li>Descripción clara de los datos y del derecho que deseas ejercer.</li>
          </ul>
          <p className="mt-3 text-smoke">
            Responderemos en un plazo máximo de 20 días hábiles y, de resultar
            procedente, se hará efectivo dentro de los 15 días hábiles
            siguientes. El ejercicio de estos derechos es gratuito.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            6. Revocación y limitación de uso
          </h2>
          <p className="mt-3 text-smoke">
            Puedes revocar tu consentimiento o limitar el uso o divulgación de
            tus datos en cualquier momento escribiendo a{" "}
            <a className="underline" href={`mailto:${ARCO_EMAIL}`}>
              {ARCO_EMAIL}
            </a>
            , en el entendido de que ello podría impedir la continuación del
            servicio.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            7. Cookies y tecnologías de rastreo
          </h2>
          <p className="mt-3 text-smoke">
            www.markerante.com utiliza cookies y tecnologías similares (incluido
            Google Tag Manager) para recordar preferencias, medir el uso del
            sitio y mejorar la experiencia. Puedes deshabilitarlas desde la
            configuración de tu navegador; algunas funciones podrían dejar de
            operar correctamente.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            8. Cambios al aviso
          </h2>
          <p className="mt-3 text-smoke">
            Este aviso puede actualizarse. Publicaremos la versión vigente en
            esta página, indicando la fecha de última actualización. Te
            recomendamos revisarlo periódicamente.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">
            9. Consentimiento
          </h2>
          <p className="mt-3 text-smoke">
            Al proporcionar tus datos personales y/o utilizar nuestros sitios y
            servicios, manifiestas haber leído este Aviso de Privacidad y
            otorgas tu consentimiento para el tratamiento de tus datos conforme
            al mismo.
          </p>
        </section>
      </div>
    </div>
  );
}
