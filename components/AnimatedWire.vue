<template>
  <!-- Paint brush stroke animation – matches Y.B. Gipser logo motif -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      class="w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="stroke-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="stroke-glow-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- ── Static base strokes (very dim) ── -->
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

      <!-- ── Animated brush strokes ── -->
      <!-- Stroke 1 – wide golden sweep (main hero stroke) -->
      <path
        class="stroke-anim-1"
        d="M-100,300 C200,220 500,380 800,300 S1100,220 1540,290"
        fill="none"
        stroke="rgba(245,158,11,0.22)"
        stroke-width="55"
        stroke-linecap="round"
        stroke-dasharray="700 400"
        filter="url(#stroke-glow-soft)"
      />
      <!-- Stroke 2 – thin sharp line over it -->
      <path
        class="stroke-anim-2"
        d="M-100,300 C200,220 500,380 800,300 S1100,220 1540,290"
        fill="none"
        stroke="rgba(245,158,11,0.55)"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-dasharray="80 40"
        filter="url(#stroke-glow)"
      />

      <!-- Stroke 3 – second sweep lower -->
      <path
        class="stroke-anim-3"
        d="M-100,600 C300,520 600,680 900,600 S1200,520 1540,590"
        fill="none"
        stroke="rgba(234,179,8,0.18)"
        stroke-width="40"
        stroke-linecap="round"
        stroke-dasharray="600 500"
        filter="url(#stroke-glow-soft)"
      />
      <path
        class="stroke-anim-4"
        d="M-100,600 C300,520 600,680 900,600 S1200,520 1540,590"
        fill="none"
        stroke="rgba(234,179,8,0.45)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-dasharray="60 50"
        filter="url(#stroke-glow)"
      />

      <!-- Stroke 5 – vertical accent left -->
      <path
        class="stroke-anim-5"
        d="M200,-60 C180,200 220,450 195,680 S175,820 200,940"
        fill="none"
        stroke="rgba(245,158,11,0.15)"
        stroke-width="20"
        stroke-linecap="round"
        stroke-dasharray="400 600"
        filter="url(#stroke-glow-soft)"
      />

      <!-- Stroke 6 – vertical accent right -->
      <path
        class="stroke-anim-6"
        d="M1200,-60 C1180,180 1220,400 1195,650 S1175,820 1200,940"
        fill="none"
        stroke="rgba(234,179,8,0.12)"
        stroke-width="18"
        stroke-linecap="round"
        stroke-dasharray="350 650"
        filter="url(#stroke-glow-soft)"
      />

      <!-- Highlight dots (paint drops) -->
      <circle class="drop-1" cx="360"  cy="295" r="5" fill="rgba(245,158,11,0.6)" filter="url(#stroke-glow)" />
      <circle class="drop-2" cx="800"  cy="300" r="4" fill="rgba(250,204,21,0.7)"  filter="url(#stroke-glow)" />
      <circle class="drop-3" cx="1150" cy="288" r="5" fill="rgba(245,158,11,0.55)" filter="url(#stroke-glow)" />
      <circle class="drop-4" cx="580"  cy="598" r="3.5" fill="rgba(234,179,8,0.5)"  filter="url(#stroke-glow)" />
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
@keyframes dropPulse {
  0%, 100% { opacity: 0; r: 0; }
  40%, 60%  { opacity: 1; }
}

.stroke-anim-1 { animation: strokeFlow        5s  linear infinite; }
.stroke-anim-2 { animation: strokeFlow        3.5s linear infinite; animation-delay: -1s; }
.stroke-anim-3 { animation: strokeFlowReverse 6s  linear infinite; animation-delay: -2s; }
.stroke-anim-4 { animation: strokeFlowReverse 4.5s linear infinite; animation-delay: -1.5s; }
.stroke-anim-5 { animation: strokeFlowVert    8s  linear infinite; }
.stroke-anim-6 { animation: strokeFlowVert    10s linear infinite; animation-delay: -4s; }

.drop-1 { animation: dropPulse 3s ease-in-out infinite; }
.drop-2 { animation: dropPulse 3.8s ease-in-out infinite; animation-delay: -1.2s; }
.drop-3 { animation: dropPulse 2.8s ease-in-out infinite; animation-delay: -2s; }
.drop-4 { animation: dropPulse 4s ease-in-out infinite; animation-delay: -0.7s; }
</style>
