<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      class="w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Statik arka plan çizgileri (filtre yok) -->
      <path
        d="M-100,300 C200,220 500,380 800,300 S1100,220 1540,290"
        fill="none" stroke="rgba(245,158,11,0.10)" stroke-width="60" stroke-linecap="round"
      />
      <path
        d="M-100,600 C300,520 600,680 900,600 S1200,520 1540,590"
        fill="none" stroke="rgba(234,179,8,0.07)" stroke-width="40" stroke-linecap="round"
      />
      <path
        d="M200,-60 C180,200 220,450 195,680 S175,820 200,940"
        fill="none" stroke="rgba(245,158,11,0.06)" stroke-width="30" stroke-linecap="round"
      />
      <path
        d="M1200,-60 C1180,180 1220,400 1195,650 S1175,820 1200,940"
        fill="none" stroke="rgba(234,179,8,0.05)" stroke-width="25" stroke-linecap="round"
      />

      <!-- Animasyonlu çizgiler (filtre kaldırıldı — GPU yükü azaltıldı) -->
      <path
        class="stroke-anim-1"
        d="M-100,300 C200,220 500,380 800,300 S1100,220 1540,290"
        fill="none"
        stroke="rgba(245,158,11,0.20)"
        stroke-width="55"
        stroke-linecap="round"
        stroke-dasharray="700 400"
      />
      <path
        class="stroke-anim-2"
        d="M-100,300 C200,220 500,380 800,300 S1100,220 1540,290"
        fill="none"
        stroke="rgba(245,158,11,0.45)"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-dasharray="80 40"
      />
      <path
        class="stroke-anim-3"
        d="M-100,600 C300,520 600,680 900,600 S1200,520 1540,590"
        fill="none"
        stroke="rgba(234,179,8,0.16)"
        stroke-width="40"
        stroke-linecap="round"
        stroke-dasharray="600 500"
      />
      <path
        class="stroke-anim-4"
        d="M-100,600 C300,520 600,680 900,600 S1200,520 1540,590"
        fill="none"
        stroke="rgba(234,179,8,0.40)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-dasharray="60 50"
      />
      <path
        class="stroke-anim-5"
        d="M200,-60 C180,200 220,450 195,680 S175,820 200,940"
        fill="none"
        stroke="rgba(245,158,11,0.13)"
        stroke-width="20"
        stroke-linecap="round"
        stroke-dasharray="400 600"
      />
      <path
        class="stroke-anim-6"
        d="M1200,-60 C1180,180 1220,400 1195,650 S1175,820 1200,940"
        fill="none"
        stroke="rgba(234,179,8,0.10)"
        stroke-width="18"
        stroke-linecap="round"
        stroke-dasharray="350 650"
      />
    </svg>
  </div>
</template>

<style scoped>
@keyframes strokeFlow {
  from { stroke-dashoffset: 1200; }
  to   { stroke-dashoffset: 0; }
}
@keyframes strokeFlowReverse {
  from { stroke-dashoffset: -1200; }
  to   { stroke-dashoffset: 0; }
}
@keyframes strokeFlowVert {
  from { stroke-dashoffset: 1000; }
  to   { stroke-dashoffset: 0; }
}

.stroke-anim-1 { animation: strokeFlow        5s  linear infinite; will-change: stroke-dashoffset; }
.stroke-anim-2 { animation: strokeFlow        3.5s linear infinite; animation-delay: -1s; will-change: stroke-dashoffset; }
.stroke-anim-3 { animation: strokeFlowReverse 6s  linear infinite; animation-delay: -2s; will-change: stroke-dashoffset; }
.stroke-anim-4 { animation: strokeFlowReverse 4.5s linear infinite; animation-delay: -1.5s; will-change: stroke-dashoffset; }
.stroke-anim-5 { animation: strokeFlowVert    8s  linear infinite; will-change: stroke-dashoffset; }
.stroke-anim-6 { animation: strokeFlowVert    10s linear infinite; animation-delay: -4s; will-change: stroke-dashoffset; }

/* Hareketi azalt tercihine saygı */
@media (prefers-reduced-motion: reduce) {
  .stroke-anim-1, .stroke-anim-2, .stroke-anim-3,
  .stroke-anim-4, .stroke-anim-5, .stroke-anim-6 {
    animation: none;
  }
}
</style>
