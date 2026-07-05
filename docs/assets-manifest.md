# Manifiesto de assets — Landing Markerante

Todo el material está en `brand-assets/` (autocontenido). Cópialo a `/public` así:

```
brand-assets/logo/      → public/brand/
brand-assets/palette/   → (referencia; no necesario en /public)
brand-assets/fede/      → public/fede/
```

## Logo / marca (`brand-assets/logo/`)
| Archivo | Uso |
|---|---|
| `markerante_logo_horizontal.svg` | Lockup a color (header, footer) sobre claro |
| `markerante_lockup_dark.svg` | Lockup para fondos oscuros (wordmark blanco) |
| `markerante_isologo.svg` | Isologo a color (favicon grande, badges) |
| `markerante_isologo_negro.svg` / `_lima.svg` | Isologo monocromo (negro / lima sólido) |
| `markerante_wordmark.svg` / `_blanco.svg` | Wordmark solo (negro / blanco) |
| `favicon.ico` | Favicon (16/32/48/64) → `app/favicon.ico` |
| `app_icon_negro_1024.png` (+512, +180) | App icon / apple-touch-icon |
| `og_image.png` | OpenGraph 1200×630 (metadata) |

## Fede (`brand-assets/fede/`)
- **Maestro:** `fede_master_v1.png` (referencia; no se usa en el sitio directamente).
- **landing/** (los específicos del landing):
  - `fede_hero_presenta.png` → Hero (S1)
  - `fede_descubrible.png` → Descubribilidad (S6)
  - `icon_menu_qr.png`, `icon_anuncios.png` → grid de herramientas (S4)
- **poses/**: `fede_saludo`, `fede_senalando`, `fede_pensando`, `fede_celebrando`, `fede_pulgar_arriba`, `fede_confundido`
- **escenas/**: `fede_mesero`, `fede_cajero`, `fede_cocinando`, `fede_delivery`, `fede_laptop_marketing`, `fede_telefono`
- **iconos/**: `icon_plato`, `icon_celular_app`, `icon_sparkle`, `icon_cohete`, `icon_grafica`, `icon_ubicacion`, `icon_campana`, `icon_resena`
- **patrones/**: `blob_1..3`, `bocadillo`, `divider_ondas`, `pattern_sparkles`, `pattern_confeti`, `doodads`

Todos los PNG de Fede son **transparentes**. Úsalos con `next/image`.

## Paleta (`brand-assets/palette/`)
- `paleta_2026.png` / `.svg` — referencia visual de la paleta (para tu consulta; no va al sitio).

## Mapeo asset → sección (resumen)
| Sección | Assets |
|---|---|
| Header/Footer | `logo/markerante_logo_horizontal.svg` (o `_lockup_dark` en footer negro) |
| Hero | `fede/landing/fede_hero_presenta.png` + `fede/patrones/blob_*`, `pattern_sparkles` |
| Barra valor | `fede/iconos/icon_sparkle,icon_cohete,icon_ubicacion,icon_grafica` |
| Dolor | `fede/poses/fede_pensando`, `fede_confundido` |
| Herramientas | `fede/iconos/*` + `fede/landing/icon_menu_qr,icon_anuncios` |
| Cómo funciona | `fede/escenas/fede_senalando`… o poses (1/paso) |
| Descubribilidad | `fede/landing/fede_descubrible.png` |
| Para quién | `fede/patrones/pattern_sparkles`, chips |
| Precios | `fede/poses/fede_pulgar_arriba.png` |
| CTA final | `fede/poses/fede_saludo.png` / `fede_celebrando.png` |
| Decoración | `fede/patrones/divider_ondas`, `blob_*`, `pattern_confeti` |

> Fuente original de todos los assets: `../03_branding/` (por si necesitas regenerar o versiones extra).
