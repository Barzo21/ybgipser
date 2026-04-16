<template>
  <div class="relative w-full overflow-hidden rounded-2xl select-none touch-none" :style="{ aspectRatio: '16/9' }" ref="containerRef">
    <!-- BEFORE image (bottom layer) -->
    <img
      :src="before"
      alt="Vorher"
      class="absolute inset-0 w-full h-full object-cover"
      draggable="false"
    />

    <!-- AFTER image (top layer, clipped) -->
    <div
      class="absolute inset-0 overflow-hidden clip-layer"
      :style="{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }"
    >
      <img
        :src="after"
        alt="Nachher"
        class="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />
    </div>

    <!-- Divider line -->
    <div
      class="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-10 pointer-events-none"
      :style="{ left: `${sliderPos}%` }"
    />

    <!-- Handle -->
    <div
      class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 cursor-ew-resize"
      :style="{ left: `${sliderPos}%` }"
      @mousedown.prevent="startDrag"
      @touchstart.prevent="startTouch"
    >
      <div class="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-amber-400 transition-transform duration-150 hover:scale-110 active:scale-95">
        <svg class="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
        </svg>
      </div>
    </div>

    <!-- Labels -->
    <div class="absolute bottom-4 left-4 z-10 pointer-events-none">
      <span class="px-3 py-1.5 rounded-lg bg-stone-900/80 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
        Vorher
      </span>
    </div>
    <div class="absolute bottom-4 right-4 z-10 pointer-events-none">
      <span class="px-3 py-1.5 rounded-lg bg-amber-500/90 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
        Nachher
      </span>
    </div>

    <!-- Drag hint -->
    <Transition name="hint-fade">
      <div v-if="showHint" class="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm animate-pulse">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
          Ziehen zum Vergleichen
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ before: string; after: string }>()

const containerRef = ref<HTMLElement | null>(null)
const sliderPos = ref(50)
const showHint = ref(true)

function getPos(clientX: number): number {
  if (!containerRef.value) return 50
  const rect = containerRef.value.getBoundingClientRect()
  return Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
}

function onMove(clientX: number) {
  sliderPos.value = getPos(clientX)
}

function startDrag() {
  showHint.value = false
  const move = (e: MouseEvent) => onMove(e.clientX)
  const up = () => {
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', up)
  }
  window.addEventListener('mousemove', move)
  window.addEventListener('mouseup', up)
}

function startTouch(e: TouchEvent) {
  showHint.value = false
  onMove(e.touches[0].clientX)
  const move = (ev: TouchEvent) => onMove(ev.touches[0].clientX)
  const end = () => {
    window.removeEventListener('touchmove', move)
    window.removeEventListener('touchend', end)
  }
  window.addEventListener('touchmove', move, { passive: true })
  window.addEventListener('touchend', end)
}
</script>

<style scoped>
.clip-layer {
  will-change: clip-path;
}

.hint-fade-leave-active { transition: opacity 0.5s ease; }
.hint-fade-leave-to { opacity: 0; }
</style>
