import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// ── Scroll reveal directive (ringan, IntersectionObserver) ──
const reveal = {
  mounted(el, binding) {
    if (binding.value?.y != null) el.style.setProperty('--reveal-y', `${binding.value.y}px`)
    if (binding.value?.delay != null) el.style.transitionDelay = `${binding.value.delay}ms`
    el.classList.add('reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
  },
}

createApp(App).directive('reveal', reveal).mount('#app')
