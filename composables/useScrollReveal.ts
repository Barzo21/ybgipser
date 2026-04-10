export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  const initReveal = () => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Unobserve after reveal so animation only plays once
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer!.observe(el))
  }

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { initReveal }
}
