<script setup>
import { ref, onMounted } from 'vue'

// ── Data ──
const name = 'Ksatria Bintang Samudra'
const role = 'AI Engineer'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Kstriabintang', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ksatria-bintang-samudra-265952313', icon: 'linkedin' },
  { label: 'Website', href: 'https://ksatriabintangsamudra.com', icon: 'globe' },
]
const email = 'ksatriabintangsamudra2022@gmail.com'

const stats = [
  { value: '30+', label: 'Repositori' },
  { value: '5+', label: 'Produk dirilis' },
  { value: '3', label: 'Domain live' },
]

const skillGroups = [
  { title: 'AI & Machine Learning', items: ['LLM & RAG', 'Prompt Engineering', 'Python', 'Model Integration', 'Automation'] },
  { title: 'Frontend', items: ['Vue 3', 'Vite', 'Tailwind CSS', 'Pinia', 'Responsive UI/UX'] },
  { title: 'Backend & Data', items: ['Flask', 'Node.js', 'Supabase', 'PostgreSQL', 'REST API'] },
  { title: 'Tooling & Deploy', items: ['Git & GitHub', 'Cloudflare Pages', 'Vercel', 'Netlify', 'CI/CD'] },
]

const projectFeatures = [
  { icon: 'clock', title: 'Sewa fleksibel', desc: 'Pemesanan per jam (3/6/12 jam) sampai harian, dengan perhitungan durasi otomatis.' },
  { icon: 'bolt', title: 'Pesan tanpa login', desc: 'Tamu cukup isi nama & nomor HP — alur pemesanan cepat, minim friksi.' },
  { icon: 'panel', title: 'Panel pemilik lengkap', desc: 'Dashboard properti, kamar, booking, penghuni, pembayaran, keuangan & laporan.' },
  { icon: 'spark', title: 'UI elegan + dark mode', desc: 'Tema hijau/emas, tipografi Fraunces, animasi ringan, mobile-friendly.' },
]
const projectStack = ['Vue 3', 'Vite', 'Tailwind CSS v4', 'Supabase', 'Pinia', 'Cloudflare Pages']

// ── Theme toggle ──
const isDark = ref(true)
function applyTheme() {
  document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
}
function toggleTheme() {
  isDark.value = !isDark.value
  try { localStorage.setItem('kb-theme', isDark.value ? 'dark' : 'light') } catch (e) { /* ignore */ }
  applyTheme()
}
onMounted(() => {
  try {
    const saved = localStorage.getItem('kb-theme')
    if (saved) isDark.value = saved === 'dark'
  } catch (e) { /* ignore */ }
  applyTheme()
})

const year = 2026
const navLinks = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#kontak', label: 'Kontak' },
]
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Living background -->
    <div class="living-bg" aria-hidden="true">
      <span class="blob b1"></span>
      <span class="blob b2"></span>
      <span class="blob b3"></span>
    </div>

    <div class="relative z-10">
      <!-- ── Navbar ── -->
      <header class="sticky top-0 z-40">
        <nav class="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#" class="flex items-center gap-2.5">
            <span class="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white">KB</span>
            <span class="hidden font-display text-lg font-semibold text-ink sm:block">Ksatria<span class="text-gold-gradient">.</span></span>
          </a>
          <div class="hidden items-center gap-1 md:flex">
            <a v-for="l in navLinks" :key="l.href" :href="l.href"
               class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-tint hover:text-ink">{{ l.label }}</a>
          </div>
          <div class="flex items-center gap-2">
            <button @click="toggleTheme" :aria-label="isDark ? 'Mode terang' : 'Mode gelap'"
                    class="grid h-9 w-9 place-items-center rounded-xl border border-line text-strong transition hover:bg-tint">
              <svg v-if="isDark" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
              <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            </button>
            <a href="#kontak" class="btn btn-primary hidden sm:inline-flex">Hubungi Saya</a>
          </div>
        </nav>
      </header>

      <main class="mx-auto max-w-6xl px-4 sm:px-6">
        <!-- ── Hero ── -->
        <section class="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1.15fr_0.85fr]">
          <div v-reveal="{ y: 28 }">
            <span class="chip"><span class="h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span> Tersedia untuk proyek baru</span>
            <h1 class="mt-6 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              Halo, saya <span class="text-gold-gradient">Ksatria</span> —<br class="hidden sm:block" />
              seorang <span class="text-brand-400">{{ role }}</span>.
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Mengubah ide jadi produk nyata. Saya membangun aplikasi web modern yang cepat, rapi,
              dan enak dipakai — dari antarmuka sampai integrasi AI di baliknya.
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-3">
              <a href="#proyek" class="btn btn-primary">Lihat Proyek</a>
              <a href="#kontak" class="btn btn-outline">Ngobrol Yuk</a>
            </div>
            <div class="mt-8 flex items-center gap-4">
              <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener" :aria-label="s.label"
                 class="grid h-10 w-10 place-items-center rounded-xl border border-line text-strong transition hover:border-brand-300 hover:bg-tint hover:text-accent">
                <svg v-if="s.icon === 'github'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>
                <svg v-else-if="s.icon === 'linkedin'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.3a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.7c0-1.1 0-2.5-1.5-2.5S12.7 13 12.7 14.2V19h-3v-9h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7z"/></svg>
                <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>
              </a>
            </div>
          </div>

          <!-- Avatar / monogram card -->
          <div v-reveal="{ y: 28, delay: 120 }" class="relative mx-auto w-full max-w-sm">
            <div class="card-lg relative overflow-hidden p-8 text-center">
              <div class="mx-auto grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 shadow-luxe-lg animate-float">
                <span class="font-display text-6xl font-bold text-white">KB</span>
              </div>
              <h2 class="mt-6 font-display text-2xl font-semibold text-ink">{{ name }}</h2>
              <p class="mt-1 text-sm font-medium text-gold-500">{{ role }} · Indonesia</p>
              <p class="mt-4 text-sm leading-relaxed text-muted">
                “Always building something new.”
              </p>
              <div class="mt-6 grid grid-cols-3 gap-2">
                <div v-for="s in stats" :key="s.label" class="rounded-xl border border-line bg-tint/50 py-3">
                  <div class="font-display text-xl font-bold text-accent">{{ s.value }}</div>
                  <div class="mt-0.5 text-[11px] font-medium text-soft">{{ s.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Tentang ── -->
        <section id="tentang" class="scroll-mt-24 py-16">
          <div v-reveal class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-gold-500">Tentang Saya</p>
            <h2 class="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Membangun produk yang <span class="text-gold-gradient">rapi</span> & bermanfaat
            </h2>
            <p class="mt-6 text-lg leading-relaxed text-muted">
              Saya seorang AI Engineer dan web developer dari Indonesia. Saya senang mengambil ide
              mentah lalu mengubahnya menjadi produk yang benar-benar dipakai orang — mulai dari
              merancang antarmuka yang bersih, menata alur pengguna, sampai menghubungkan sistem
              dengan layanan cloud dan kecerdasan buatan. Fokus saya: hasil yang cepat, detail yang
              matang, dan pengalaman yang terasa mulus di semua perangkat.
            </p>
          </div>
        </section>

        <!-- ── Keahlian ── -->
        <section id="keahlian" class="scroll-mt-24 py-16">
          <div v-reveal class="mb-10 text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-gold-500">Keahlian</p>
            <h2 class="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Yang saya gunakan sehari-hari</h2>
          </div>
          <div class="grid gap-5 sm:grid-cols-2">
            <div v-for="(g, i) in skillGroups" :key="g.title" v-reveal="{ delay: i * 80 }" class="card p-6">
              <h3 class="font-display text-lg font-semibold text-ink">{{ g.title }}</h3>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="item in g.items" :key="item" class="chip">{{ item }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Proyek Unggulan ── -->
        <section id="proyek" class="scroll-mt-24 py-16">
          <div v-reveal class="mb-10 text-center">
            <p class="text-sm font-semibold uppercase tracking-widest text-gold-500">Proyek Unggulan</p>
            <h2 class="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Daily Kost</h2>
          </div>

          <div v-reveal class="card-lg overflow-hidden">
            <div class="grid md:grid-cols-2">
              <!-- Visual -->
              <div class="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 p-8">
                <div class="animate-gradient absolute inset-0 opacity-60"
                     style="background-image: radial-gradient(at 20% 20%, rgba(0,140,92,0.6) 0, transparent 50%), radial-gradient(at 80% 70%, rgba(201,164,92,0.35) 0, transparent 50%);"></div>
                <div class="relative flex h-full flex-col justify-between">
                  <span class="chip w-fit border-white/20 bg-white/10 text-white">Live Product</span>
                  <div>
                    <div class="font-display text-3xl font-bold text-white">Daily Kost</div>
                    <p class="mt-2 text-sm text-brand-100">Platform kos singgah & transit — sewa per jam sampai harian.</p>
                  </div>
                </div>
              </div>
              <!-- Info -->
              <div class="p-8">
                <p class="leading-relaxed text-muted">
                  Aplikasi web lengkap untuk penyewaan kamar kos jangka pendek: sisi publik untuk tamu
                  memesan kamar tanpa login, dan panel pemilik untuk mengelola seluruh operasional bisnis.
                </p>
                <div class="mt-6 space-y-4">
                  <div v-for="f in projectFeatures" :key="f.title" class="flex gap-3">
                    <span class="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-xl bg-tint text-accent">
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <template v-if="f.icon === 'clock'"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></template>
                        <template v-else-if="f.icon === 'bolt'"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></template>
                        <template v-else-if="f.icon === 'panel'"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></template>
                        <template v-else><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19"/><circle cx="12" cy="12" r="3"/></template>
                      </svg>
                    </span>
                    <div>
                      <div class="font-semibold text-ink">{{ f.title }}</div>
                      <div class="text-sm text-muted">{{ f.desc }}</div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex flex-wrap gap-2">
                  <span v-for="t in projectStack" :key="t" class="chip text-xs">{{ t }}</span>
                </div>
                <div class="mt-7 flex flex-wrap gap-3">
                  <a href="https://kostpontianak.web.id" target="_blank" rel="noopener" class="btn btn-gold">Kunjungi Situs</a>
                  <a href="https://github.com/Kstriabintang" target="_blank" rel="noopener" class="btn btn-outline">Lihat GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Kontak ── -->
        <section id="kontak" class="scroll-mt-24 py-16">
          <div v-reveal class="card-lg relative overflow-hidden px-6 py-14 text-center sm:px-12">
            <div class="pointer-events-none absolute inset-0 opacity-70"
                 style="background-image: radial-gradient(at 50% 0%, rgba(0,112,74,0.15) 0, transparent 60%);"></div>
            <div class="relative">
              <p class="text-sm font-semibold uppercase tracking-widest text-gold-500">Kontak</p>
              <h2 class="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Punya ide untuk dikerjakan?</h2>
              <p class="mx-auto mt-4 max-w-lg text-lg text-muted">
                Saya terbuka untuk proyek, kolaborasi, atau sekadar diskusi seputar produk dan AI.
              </p>
              <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a :href="`mailto:${email}`" class="btn btn-primary">Kirim Email</a>
                <a href="https://www.linkedin.com/in/ksatria-bintang-samudra-265952313" target="_blank" rel="noopener" class="btn btn-outline">LinkedIn</a>
              </div>
              <p class="mt-6 text-sm text-soft">{{ email }}</p>
            </div>
          </div>
        </section>
      </main>

      <!-- ── Footer ── -->
      <footer class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div class="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <div class="flex items-center gap-2.5">
            <span class="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 font-display text-sm font-bold text-white">KB</span>
            <span class="text-sm font-medium text-muted">{{ name }}</span>
          </div>
          <div class="flex items-center gap-4">
            <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener"
               class="text-sm text-muted transition hover:text-accent">{{ s.label }}</a>
          </div>
          <p class="text-sm text-soft">© {{ year }} · Dibuat dengan Vue & Tailwind</p>
        </div>
      </footer>
    </div>
  </div>
</template>
