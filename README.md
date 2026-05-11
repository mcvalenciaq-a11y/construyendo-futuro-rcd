# Construyendo Futuro RCD

Sitio web corporativo de **Construyendo Futuro RCD**, empresa SAS dedicada a la gestión integral de Residuos de Construcción y Demolición en el norte del Valle del Cauca (sede: Roldanillo).

> Sitio desarrollado como ejercicio académico — Construyendo Futuro RCD — Roldanillo, Valle del Cauca, 2026

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + componentes estilo shadcn/ui
- **next/font** (Inter para UI, Outfit para titulares)
- **lucide-react** (iconos)
- **framer-motion** (animaciones sutiles)
- **react-hook-form** + **zod** (formularios)

---

## Correr en local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # arranca el build de producción
npm run lint    # ESLint
```

---

## Estructura de carpetas

```
construyendo-futuro-rcd/
├── app/                    # Rutas (App Router)
│   ├── layout.tsx          # Layout raíz: fuentes, Header, Footer, WhatsApp
│   ├── page.tsx            # /  → Inicio
│   ├── globals.css         # Tailwind + CSS variables + base styles
│   ├── sitemap.ts          # Sitemap dinámico
│   ├── robots.ts           # robots.txt
│   ├── servicios/          # /servicios + Cotizador
│   ├── productos/          # /productos
│   ├── cobertura/          # /cobertura (mapa SVG 6 municipios)
│   ├── normativa/          # /normativa
│   ├── nosotros/           # /nosotros
│   └── contacto/           # /contacto
├── components/
│   ├── Logo.tsx            # Logo SVG con variantes light/dark
│   ├── Header.tsx          # Nav sticky responsive
│   ├── Footer.tsx          # Footer institucional
│   ├── WhatsAppButton.tsx  # Botón flotante WhatsApp
│   └── ui/                 # Componentes base estilo shadcn (button, etc.)
├── lib/
│   └── utils.ts            # cn(), formatCOP(), CONTACT, whatsappLink()
├── public/                 # Assets estáticos
├── tailwind.config.ts      # Paleta eco + industrial
├── next.config.mjs         # Whitelisting de imágenes (Unsplash)
└── tsconfig.json
```

---

## Identidad visual

**Paleta principal** (definida en `tailwind.config.ts`):

| Token            | Hex       | Uso                                       |
| ---------------- | --------- | ----------------------------------------- |
| `olive-900`      | `#2D3A1F` | Títulos, navbar dark                      |
| `olive-700`      | `#4A5D2E` | Acentos, hover                            |
| `olive-500`      | `#6B8E3D` | Badges eco/sostenible                     |
| `orange-600`     | `#D97742` | CTAs primarios, acentos clave             |
| `orange-500`     | `#E89968` | Hover de CTA                              |
| `concrete-900`   | `#1F1F1F` | Texto principal                           |
| `concrete-700`   | `#3D3D3D` | Texto secundario                          |
| `cream-50`       | `#FBFAF7` | Background base (sustituye al blanco puro)|

**Tipografías**: Inter (UI) + Outfit (titulares y números grandes).

---

## Deploy en Vercel

1. Subir el repositorio a GitHub.
2. Entrar a [vercel.com](https://vercel.com), conectar la cuenta de GitHub.
3. **New Project** → seleccionar el repo `construyendo-futuro-rcd`.
4. Vercel detecta Next.js automáticamente. Click **Deploy**.
5. Listo: el sitio queda disponible en una URL `*.vercel.app`. Para dominio propio, configurar en **Settings → Domains**.

No requiere variables de entorno: el sitio es 100% estático/SSR sin backend.

---

## Notas

- El formulario de contacto simula el envío con `setTimeout` (no hay backend real).
- El cotizador es 100% client-side con `useState` + `useMemo`.
- Las imágenes vienen de Unsplash vía `next/image` con `remotePatterns`.
- Los logos institucionales (CVC, MADS, SENA, etc.) son sellos genéricos SVG, no copias de logos reales.
