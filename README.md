# Portfolio — Ksatria Bintang Samudra

Website portfolio pribadi. Single-page, tema elegan hijau/emas, dark mode, dibangun dengan **Vue 3 + Vite + Tailwind CSS v4**.

## Menjalankan

```bash
pnpm install
pnpm dev       # http://localhost:5173
```

## Build

```bash
pnpm build     # output ke dist/
pnpm preview   # pratinjau hasil build
```

## Deploy (Cloudflare Pages)

- Build command: `pnpm build`
- Output directory: `dist`

## Struktur

- `src/App.vue` — seluruh halaman (hero, tentang, keahlian, proyek, kontak)
- `src/style.css` — design system (token warna, font, background, animasi)
- `src/main.js` — bootstrap + directive `v-reveal` (scroll reveal)
