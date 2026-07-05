# Markerante — Brief del Landing (markerante.com)

> Versión 1 · 2026-07-05 · Autor: planeación de marca (Axel + Claude)
> Este documento es el **handoff para los agentes de desarrollo**. Define QUÉ va en el landing (estructura, copy, gráficos). El CÓMO técnico (componentes, rutas, theming del generador) lo resuelven los agentes de desarrollo.

---

## 0. Contexto

**Markerante es un hub de herramientas de marketing para restaurantes en LATAM**, pensado para dueños que no tienen tiempo ni ganas de pelearse con la tecnología. No es "un generador de sitios": el generador es la herramienta insignia y el gancho gratis de entrada. El producto es la plataforma, con herramientas gratis y de pago, y el catálogo crece con el tiempo.

- **Objetivo del landing:** convertir a dueños de restaurante en usuarios del hub. Puerta de entrada = crear su sitio gratis.
- **Acción #1 (CTA global):** "Empieza gratis" → `/crear`.
- **Público:** dueños de restaurante en México/LATAM, sin conocimientos técnicos, con poco tiempo.
- **Idioma:** es-MX.
- **Este landing es la marca de Markerante** (lima + Fede). No confundir con el template de los sitios de clientes (que es neutral y lo manejan los agentes de desarrollo).

---

## 1. Sistema visual (para este sitio)

- **Paleta:** negro `#1C1716` · verde lima `#E5FC78` (hero) · coral `#FF6B4A` (CTAs/urgencia) · marfil `#FAFFF2` (fondo) · blanco `#FEFEFE`. Neutros: grafito `#2A2422`, gris medio `#6B6560`, gris claro `#E8E7E2`.
- **Tipografía:** titulares **Space Grotesk Bold, en MAYÚSCULAS**; cuerpo **Roboto**; acento selectivo **Stoke** (una que otra tagline). Space Grotesk es webfont — permitido en NUESTRO sitio (no en los de clientes).
- **Mascota:** **Fede** (doodle lima con gorro de chef) como guía simpático. Sin fotografía; todo el universo es ilustrado.
- **Logo:** lockup/isologo lima (`03_branding/iconos/`). Favicon y app icon ya generados.
- **Regla de oro:** combinación firma negro + lima; coral solo como acento (texto negro sobre coral). Máx. 3 colores por pieza.

Assets de marca en `../../03_branding/` (paleta, iconos, y `fede/universo/` con poses, escenas, íconos y patrones ya recortados en PNG transparente).

---

## 2. Positioning

- **One-liner:** *Todo el marketing de tu restaurante, en un solo lugar.*
- **Promesa:** haz tú mismo el marketing de tu restaurante — fácil, sin estudiar de más y sin pagarle un dineral a una agencia. Empieza tu presencia digital hoy, de la mano de expertos.
- **Beneficio estrella (AEO):** además de verte bien, te vuelve **encontrable en Google y en ChatGPT**. Es el diferenciador, pero se comunica como beneficio, no como el gancho principal.
- **Pilares de valor:** *Fácil de usar* · *Más barato que una agencia* · *Tu presencia digital hoy* · *Hecho por expertos, usado por ti*.
- **Voz:** directa, cálida, cero tecnicismos. Hablarle al dueño de tú, como un aliado. **Prohibido** en copy al usuario: "non-techie", "AEO", "SaaS" y jerga técnica. La idea "sin saber de tecnología" se dice como *"fácil"* o *"sin complicarte"*, nunca dando por hecho que el usuario es ignorante.

---

## 3. Sitemap

```
/                     Home (long-scroll) — hace todo el trabajo de conversión
/precios              Planes: Gratis vs Plan de pago
/faq                  Preguntas frecuentes
/legal/terminos       Términos y condiciones
/legal/privacidad     Aviso de privacidad + ARCO
(futuro) /blog        Motor de SEO propio — Fase 2
(futuro) /herramientas/[tool]  Página por herramienta — cuando el catálogo crezca
```

CTA global → `/crear` (wizard existente en el monorepo). Login/Entrar → `/login`.

---

## 4. Header (navegación)

Sticky, fondo marfil, sombra sutil al hacer scroll.

`[lockup Markerante]   Herramientas · Cómo funciona · Precios · FAQ        [Entrar]  [Empieza gratis ▸]`

- "Empieza gratis" = botón coral, texto negro. Es el CTA persistente.
- En móvil: menú hamburguesa; el botón "Empieza gratis" siempre visible.

---

## 5. Home — sección por sección

> Formato de cada sección: **Objetivo · Copy · Gráfico · Nota**. El copy es propuesta editable.

### S1 · Hero
- **Objetivo:** en 5 segundos, comunicar "todo tu marketing en un lugar" + fácil + arrancar la acción.
- **Copy:**
  - Eyebrow: `HERRAMIENTAS DE MARKETING PARA RESTAURANTES`
  - **H1 (recomendado):** `TODO EL MARKETING DE TU RESTAURANTE, EN UN SOLO LUGAR`
  - Sub: "Herramientas sencillas para hacer tu propio marketing y empezar tu presencia digital hoy. Sin estudiar de más, sin pagarle un dineral a una agencia — y de la mano de expertos."
  - CTA primario: `Empieza gratis` → `/crear`
  - CTA secundario: `Ver herramientas` (scroll a S4)
  - Microcopy bajo CTA: "Gratis · Fácil de usar · Listo en minutos"
- **Gráfico:** Fede presentando un celular/laptop con un sitio (NUEVO: `fede_hero_presenta`). Blobs lima/coral de fondo + sparkles.
- **H1 alternativas (A/B):**
  - `HAZ EL MARKETING DE TU RESTAURANTE, FÁCIL Y EN UN SOLO LUGAR`
  - `EL MARKETING DE TU RESTAURANTE NO TIENE QUE SER COMPLICADO`
  - `TU RESTAURANTE EN INTERNET, SIN COMPLICARTE NI GASTAR DE MÁS`

### S2 · Barra de confianza (pilares de valor)
- **Objetivo:** reducir fricción inmediata con los 4 pilares.
- **Copy:** franja con 4 pilares: "Fácil de usar" · "Más barato que una agencia" · "Tu presencia digital hoy" · "Hecho por expertos".
- **Gráfico:** íconos doodle pequeños (sparkle, cohete, ubicación, gráfica).

### S3 · El dolor
- **Objetivo:** que el dueño se sienta identificado.
- **Copy:**
  - **H2:** `SI NO APARECES EN INTERNET, EXISTES SOLO PARA QUIEN YA TE CONOCE`
  - Body: "La gente decide dónde comer buscando en Google y, cada vez más, preguntándole a ChatGPT. Si tu restaurante no aparece, te están eligiendo a la competencia. Hacer marketing suena a estudiar mil cosas o pagarle un dineral a una agencia — y no tienes tiempo para ninguna de las dos."
  - 3 dolores (con ícono): *No apareces cuando te buscan* · *Las agencias cobran caro y no siempre entregan* · *No tienes tiempo para complicarte*.
- **Gráfico:** Fede pensando/confundido (`fede_pensando`, `fede_confundido`).

### S4 · Las herramientas  ⭐ (sección protagonista)
- **Objetivo:** mostrar que es un hub que crece; comunicar valor gratis y de pago.
- **Copy:**
  - **H2:** `UNA CAJA DE HERRAMIENTAS PARA TU RESTAURANTE`
  - Sub: "Empieza con las gratis. Suma las de pago cuando las necesites. Y vienen más."
  - **Grid de tarjetas** (ver §6 para el detalle): cada una con ícono doodle, nombre, una línea y badge (Gratis / Incluida en pago / Próximamente).
- **Gráfico:** íconos doodle por herramienta (varios ya existen; faltan Menú QR y Anuncios — ver §9).
- **Nota:** las "Próximamente" van con opacidad/badge distinto; comunican roadmap sin prometer fecha.

### S5 · Cómo funciona (3 pasos)
- **Objetivo:** mostrar lo fácil que es (anti-fricción).
- **Copy:**
  - **H2:** `TU RESTAURANTE EN INTERNET, EN 3 PASOS`
  - Paso 1 — **Pega tu Google Maps.** "Tomamos lo que ya existe de tu negocio. Sin formularios eternos." (o llena unos datos si prefieres).
  - Paso 2 — **La IA arma tu sitio con tu voz.** "Textos, secciones y estilo listos en segundos. Tú solo revisas."
  - Paso 3 — **Publica y aparece.** "Tu restaurante encontrable en Google y ChatGPT. Gratis."
- **Gráfico:** 3 escenas de Fede (`fede_senalando`/`fede_laptop_marketing`/`fede_celebrando`) o un strip nuevo de 3 pasos.

### S6 · Descubribilidad / AEO (el diferenciador)
- **Objetivo:** clavar el ángulo único: aparecer en IA, no solo en Google.
- **Copy:**
  - **H2:** `QUE TE ENCUENTREN EN GOOGLE Y EN CHATGPT`
  - Body: "Cada vez más gente no busca en Google: le pregunta a ChatGPT '¿dónde como tacos cerca?'. Markerante prepara tu sitio para los dos mundos: SEO hiperlocal para Google, y un formato que las IAs leen para recomendarte. Se llama AEO — y casi nadie lo está haciendo todavía."
  - Bullets: *SEO hiperlocal* · *Listo para IA (llms.txt)* · *Datos estructurados de tu restaurante* · *Rápido y ligero*.
- **Gráfico:** Fede siendo "descubierto" (NUEVO: `fede_descubrible` — Fede + burbuja de chat IA + pin + estrella) + íconos `grafica`/`ubicacion`/`sparkle`.

### S7 · Mira un ejemplo
- **Objetivo:** prueba tangible de calidad.
- **Copy:** **H2:** `ASÍ SE VE UN SITIO HECHO CON MARKERANTE` + "Generado en minutos, listo para recibir clientes." + CTA "Crea el tuyo gratis".
- **Gráfico:** screenshot/preview del sitio demo (los agentes de desarrollo pueden usar `/site/demo`). No requiere ilustración nueva.
- **Nota:** el sitio de ejemplo usa el template neutral del cliente (terracota), NO la marca Markerante — es correcto y así debe verse.

### S8 · Para quién
- **Objetivo:** que cada tipo de restaurante se vea reflejado.
- **Copy:** **H2:** `HECHO PARA TODO TIPO DE RESTAURANTE` + chips/tarjetas: Taquerías · Cafeterías · Fine dining · Mariscos · Pizzerías · Panaderías · Dark kitchens · Food trucks.
- **Gráfico:** patrón de sparkles/blobs + íconos; opcional Fede con distintos props.

### S9 · Precios (resumen)
- **Objetivo:** transparencia; empujar el gratis, insinuar el upgrade.
- **Copy:** **H2:** `EMPIEZA GRATIS. PAGA SOLO LO QUE SUMA.` + dos tarjetas (ver §7). CTA a `/precios` y a `/crear`.
- **Gráfico:** blobs; Fede pulgar arriba (`fede_pulgar_arriba`).

### S10 · FAQ (resumen)
- 4-5 preguntas destacadas + link a `/faq`. (Contenido en §8.)

### S11 · CTA final
- **Copy:** **H2:** `TU RESTAURANTE MERECE ESTAR EN INTERNET` + "Gratis, en minutos, sin complicaciones." + CTA grande `Empieza gratis`.
- **Gráfico:** Fede saludando/celebrando (`fede_saludo`, `fede_celebrando`) + fondo lima sólido con sparkles.

### Footer
- Logo (lockup), tagline corta, columnas: Herramientas · Producto (Cómo funciona, Precios, Ejemplo) · Recursos (FAQ, Blog próximamente) · Legal (Términos, Privacidad/ARCO).
- Redes, © Markerante, "Hecho en México 🇲🇽".
- **Nota:** este footer es de la MARCA Markerante (isologo lima). No confundir con el "Hecho con Markerante" que aparece en los sitios de clientes.

---

## 6. Las herramientas — detalle del grid

| Herramienta | Estado | Precio | Una línea | Ícono |
|---|---|---|---|---|
| **Sitio web con IA** | Vivo | **Gratis** (dominio propio de pago) | "Tu sitio profesional, generado con IA en minutos." | `icon_celular_app` / `icon_cohete` |
| **Menú QR** | Vivo | **Gratis** | "Tu menú digital con código QR, siempre actualizado." | `icon_menu_qr` (NUEVO) |
| **Reseñas de Google** | Vivo | **Incluida en el plan de pago** | "Muestra y gestiona tus reseñas de Google en un lugar." | `icon_resena` / `icon_campana` |
| **Píxeles y eventos** | Próximamente | — | "Mide quién visita tu sitio y qué hace." | `icon_grafica` |
| **Anuncios con Google Maps** | Próximamente | — | "Genera campañas para que te encuentren cerca." | `icon_ubicacion` |
| **Anuncios con Meta Ads** | Próximamente | — | "Crea anuncios para Instagram y Facebook, fácil." | `icon_anuncios` (NUEVO) |

> El catálogo crece. La sección debe comunicar "esto es un hub que se expande", no una lista cerrada.

---

## 7. Precios (`/precios` + resumen en home)

**Plan Gratis — $0**
- Sitio web con IA
- Menú QR
- Subdominio `tunombre.markerante.com`
- SEO hiperlocal + listo para IA (AEO)
- CTA: `Empieza gratis`

**Plan de pago — [nombre por definir]**
- Todo lo del gratis, más:
- Dominio propio (`turestaurante.com`) — ~$2,399 MXN/año
- Reseñas de Google integradas
- Acceso a nuevas herramientas de pago conforme salen
- CTA: `Consíguelo` (o fake-door "Quiero mi dominio" si aún no hay checkout)

> **Pendiente de negocio:** nombre y estructura exacta del plan de pago (¿precio único anual del dominio? ¿membresía mensual que incluye reseñas + dominio?). Marcar precios como "desde" hasta cerrarlo.

---

## 8. FAQ (`/faq`)

1. **¿De verdad es gratis?** Sí. Crear y publicar tu sitio y tu menú QR es gratis. Solo pagas si quieres dominio propio o las herramientas del plan de pago.
2. **¿Necesito saber de tecnología?** No. Si sabes usar WhatsApp, puedes. Pegas tu Google Maps y la IA hace el resto.
3. **¿Cuánto tarda?** Minutos. En serio.
4. **¿Qué es eso de "aparecer en ChatGPT"?** Preparamos tu sitio para que los buscadores de IA (como ChatGPT o Google AI) puedan leerlo y recomendar tu restaurante cuando alguien pregunte dónde comer.
5. **¿Puedo usar mi propio dominio?** Sí, con el plan de pago. Si no, tu sitio vive en `tunombre.markerante.com`, también gratis.
6. **¿Y si ya tengo página?** Puedes crear la tuya con Markerante para mejorar tu presencia y aparecer en IA, o migrar tu dominio.
7. **¿Funciona para dark kitchens, food trucks o negocios sin local fijo?** Sí.
8. **¿Mis datos están seguros?** Sí. Cumplimos con la ley mexicana de protección de datos y puedes ejercer tus derechos ARCO. Ver Aviso de privacidad.

---

## 9. Gráficos — inventario y por generar

**Ya tenemos (en `03_branding/fede/universo/.../individual/`, PNG transparente):**
- Poses: saludo, señalando, pensando, celebrando, pulgar_arriba, confundido.
- Escenas: mesero, cajero, cocinando, delivery, laptop_marketing, telefono.
- Íconos: plato, celular_app, sparkle, cohete, grafica, ubicacion, campana, resena.
- Patrones: blobs (×3), bocadillo, divider_ondas, pattern_sparkles, pattern_confeti, doodads.

**Por generar (NUEVOS, mismo estilo doodle lima, referencia `fede_master_v1.png`):**
1. `fede_hero_presenta` — Fede mostrando un celular/laptop con un sitio web en pantalla. (Hero S1)
2. `fede_descubrible` — Fede siendo encontrado: burbuja de chat de IA + pin de ubicación + estrella/sparkles alrededor. (S6 AEO)
3. `icon_menu_qr` — ícono doodle de código QR / menú. (Grid herramientas)
4. `icon_anuncios` — ícono doodle de anuncios / megáfono o cursor+play (Meta/Google Ads). (Grid herramientas)
5. (Opcional) `fede_3pasos` — strip de 3 viñetas para "Cómo funciona".
6. (Opcional) `fede_hola_landing` — Fede saludando en versión "bienvenida" para el CTA final.

**No requieren ilustración:** el ejemplo de sitio (S7) usa un screenshot del sitio demo del generador.

---

## 10. SEO / AEO / meta (coherente con el producto)

- **Title:** `Markerante — Todo el marketing de tu restaurante en un solo lugar`
- **Meta description:** `Herramientas de marketing para tu restaurante, fáciles de usar y sin pagar caro a una agencia. Crea tu sitio web y menú QR gratis, y aparece en Google y ChatGPT.`
- **OG image:** ✅ lista — `03_branding/fede/universo/landing/og_image.png` (1200×630): Fede feliz frente a su taquería llena + banda con lockup y tagline "TODO TU MARKETING EN UN SOLO LUGAR".
- **JSON-LD:** `Organization` / `SoftwareApplication` para Markerante (el sitio de la plataforma).
- **llms.txt propio:** predicar con el ejemplo — Markerante debe ser encontrable por IA igual que los sitios que genera.
- **Keywords semilla:** "página web para restaurante", "menú QR gratis", "cómo aparecer en Google Maps restaurante", "marketing para restaurantes México".

---

## 11. Notas de handoff (ligero — el detalle técnico es de los agentes de desarrollo)

- El landing vive en el monorepo (rutas de marketing, p. ej. `app/(marketing)/` o `app/page.tsx` + `app/marketing/`). Los agentes de desarrollo definen la estructura de componentes.
- Server components donde se pueda (perf). CTAs → `/crear`.
- Consumir tokens de color de la marca Markerante (lima), **separados** de los tokens `--tpl-*` del template de clientes. No mezclar.
- Space Grotesk vía next/font (self-host) para no depender de red externa.
- Este brief define contenido y gráficos; cualquier decisión de negocio pendiente está marcada como **[por definir]**.

**Pendientes de negocio a cerrar:**
- Nombre y estructura del plan de pago (§7).
- ¿Menú QR realmente 100% gratis sin límite?
- Copy final del H1 (opciones en S1).
