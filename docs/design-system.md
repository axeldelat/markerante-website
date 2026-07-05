# Design System — Landing Markerante

Marca Markerante (lima + Fede) implementada con **Tailwind + shadcn/ui**. Este doc mapea la identidad a tokens y componentes.

## 1. Colores

| Token de marca | HEX | Rol |
|---|---|---|
| `ink` (negro) | `#1C1716` | Base, texto, fondos oscuros |
| `lime` (verde lima) | `#E5FC78` | Hero / highlight — bloques, fondos de impacto (NO texto sobre claro) |
| `coral` | `#FF6B4A` | CTAs, urgencia, acento de acción |
| `paper` (marfil) | `#FAFFF2` | Fondo claro |
| `white` | `#FEFEFE` | Negativos |
| `graphite` | `#2A2422` | Superficies oscuras alt |
| `muted` | `#6B6560` | Texto de apoyo |
| `line` | `#E8E7E2` | Bordes, divisores |

**Reglas de contraste:**
- ✅ lima sobre negro (combinación firma) · negro sobre lima · negro sobre marfil.
- ⚠️ lima NUNCA como color de texto sobre marfil/blanco. Solo fondo o sobre negro.
- ⚠️ coral: texto **negro** encima (no blanco).

### Mapeo a shadcn (CSS variables)
shadcn se theme-a con variables en `globals.css`. Sugerido (ajusta al formato de tu versión de shadcn/Tailwind):

```css
:root {
  --background: 78 100% 98%;      /* paper  #FAFFF2 */
  --foreground: 15 13% 9%;        /* ink    #1C1716 */
  --card: 0 0% 100%;
  --card-foreground: 15 13% 9%;
  --primary: 12 100% 65%;         /* coral  #FF6B4A  → CTAs */
  --primary-foreground: 15 13% 9%;/* texto negro sobre coral */
  --secondary: 74 95% 73%;        /* lime   #E5FC78 */
  --secondary-foreground: 15 13% 9%;
  --accent: 74 95% 73%;           /* lime */
  --accent-foreground: 15 13% 9%;
  --muted: 40 6% 91%;
  --muted-foreground: 30 8% 40%;  /* #6B6560 */
  --border: 40 12% 90%;           /* #E8E7E2 */
  --input: 40 12% 90%;
  --ring: 12 100% 65%;            /* coral */
  --radius: 0.9rem;
}
```
Además, expón tokens de marca directos en el theme de Tailwind para usarlos como `bg-lime`, `text-ink`, `bg-coral`, `bg-paper`:

```ts
// tailwind.config.ts → theme.extend.colors
colors: {
  ink: "#1C1716", lime: "#E5FC78", coral: "#FF6B4A",
  paper: "#FAFFF2", graphite: "#2A2422",
  muted: "#6B6560", line: "#E8E7E2",
}
```

## 2. Tipografía

- **Titulares (H1–H3):** Space Grotesk **Bold**, en **MAYÚSCULAS**, tracking ligero negativo. Fuentes en `brand-assets/` (o `03_branding/tipografia/Space_Grotesk`).
- **Cuerpo / UI:** Roboto (Regular/Medium).
- **Acento opcional:** Stoke (una tagline puntual).

```ts
// app/fonts.ts — next/font self-host
import localFont from "next/font/local";
export const grotesk = localFont({ src: "./_fonts/SpaceGrotesk-Bold.ttf", variable: "--font-display", weight: "700" });
import { Roboto } from "next/font/google"; // o self-host desde brand-assets
export const roboto = Roboto({ subsets: ["latin"], weight: ["400","500","700"], variable: "--font-body" });
```
Escala sugerida (mobile→desktop): H1 40→68px · H2 28→44px · H3 20→28px · body 16→18px · caption 13→14px. Line-height headlines ~1.05, body ~1.6.

## 3. Componentes shadcn por sección

| Sección | Componentes shadcn | Notas |
|---|---|---|
| Header/nav | `NavigationMenu`, `Button`, `Sheet` (móvil) | CTA "Empieza gratis" = `Button` coral. Sticky. |
| Hero | `Button` (×2), `Badge` (eyebrow) | Ilustración `fede_hero_presenta`. |
| Barra de valor | `Badge` / lista con íconos | 4 pilares. |
| Dolor | `Card` (×3) | Íconos doodle. |
| Herramientas ⭐ | `Card` + `Badge` (Gratis/Pago/Próximamente) | Grid data-driven (ver abajo). |
| Cómo funciona | `Card`/pasos numerados | 3 escenas Fede. |
| Descubribilidad | `Card` + lista | `fede_descubrible`. |
| Ejemplo | imagen/`AspectRatio` | Screenshot del sitio demo. |
| Para quién | `Badge`/chips | 8 tipos de restaurante. |
| Precios | `Card` (×2) + `Button` | Gratis vs Pago. |
| FAQ | `Accordion` | Preguntas en `content-copy.md`. |
| CTA final | `Button` grande | Fede saludando. |
| Footer | columnas + `Separator` | Lockup lima. |

### Grid de herramientas — data-driven
Modela las herramientas como datos para que agregar nuevas sea trivial (el hub crece):

```ts
type Tool = { name: string; blurb: string; icon: string; status: "free" | "paid" | "soon" };
```
Badges: `free` → "Gratis" (lima), `paid` → "Incluida en pago" (coral), `soon` → "Próximamente" (gris, opacidad). Contenido en `content-copy.md` §Herramientas.

## 4. Fede — uso por sección

- Hero: `fede/landing/fede_hero_presenta.png`
- Dolor: `fede/poses/fede_pensando.png` / `fede_confundido.png`
- Cómo funciona: `fede/escenas/fede_senalando`… o `fede/poses/*` (1 por paso)
- Descubribilidad: `fede/landing/fede_descubrible.png`
- Precios: `fede/poses/fede_pulgar_arriba.png`
- CTA final: `fede/poses/fede_saludo.png` / `fede_celebrando.png`
- Decoración: `fede/patrones/*` (blobs, sparkles, divider_ondas, confeti)
- Íconos de herramientas/valor: `fede/iconos/*` + `fede/landing/icon_menu_qr`, `icon_anuncios`

Reglas: Fede siempre con su contorno negro y gorro; nunca recolorearlo; PNG transparente sobre fondos de color o marfil.

## 5. Motion (bajo)
- Micro-interacciones: hover en botones/cards (translate/scale sutil), fade-in on-scroll ligero.
- **Prohibido:** scroll-jacking, parallax pesado, animaciones largas. Respeta `prefers-reduced-motion`.
- Si usas el taste-skill, pon MOTION_INTENSITY bajo.

## 6. Layout / ritmo
- Mobile-first. Contenedor máx ~1200px. Secciones con padding vertical generoso (aire).
- Esquinas redondeadas (radius ~0.9rem), sombras suaves, mucho marfil.
- Alterna fondos: marfil (default) ↔ bloques negro con lima ↔ acentos coral, para dar ritmo.
