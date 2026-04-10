<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      class="w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Soft glow filter -->
        <filter id="wire-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <!-- Strong glow for sparks -->
        <filter id="spark-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <!-- Gradient for fade-out ends -->
        <linearGradient id="grad-h" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(59,130,246,0)" />
          <stop offset="15%" stop-color="rgba(59,130,246,1)" />
          <stop offset="85%" stop-color="rgba(59,130,246,1)" />
          <stop offset="100%" stop-color="rgba(59,130,246,0)" />
        </linearGradient>
      </defs>

      <!-- ── Static base wires (dim) ─────────────────── -->
      <path
        d="M-80,220 C200,160 400,280 720,200 S1040,140 1520,210"
        fill="none"
        stroke="rgba(59,130,246,0.12)"
        stroke-width="1.5"
      />
      <path
        d="M-80,450 C300,390 550,500 860,420 S1180,380 1520,445"
        fill="none"
        stroke="rgba(6,182,212,0.08)"
        stroke-width="1"
      />
      <path
        d="M-80,680 C350,620 650,740 980,660 S1280,620 1520,675"
        fill="none"
        stroke="rgba(99,102,241,0.1)"
        stroke-width="1.5"
      />
      <!-- Vertical -->
      <path
        d="M280,-40 C260,160 300,380 275,560 S255,740 280,940"
        fill="none"
        stroke="rgba(59,130,246,0.08)"
        stroke-width="1"
      />
      <path
        d="M1160,-40 C1140,200 1180,420 1155,600 S1135,780 1160,940"
        fill="none"
        stroke="rgba(6,182,212,0.07)"
        stroke-width="1"
      />

      <!-- ── Animated flowing wires ──────────────────── -->
      <!-- Wire 1 – blue, left-to-right -->
      <path
        class="wire-1"
        d="M-80,220 C200,160 400,280 720,200 S1040,140 1520,210"
        fill="none"
        stroke="#60a5fa"
        stroke-width="2"
        stroke-dasharray="30 18"
        filter="url(#wire-glow)"
        opacity="0.9"
      />
      <!-- Wire 2 – cyan, right-to-left -->
      <path
        class="wire-2"
        d="M-80,450 C300,390 550,500 860,420 S1180,380 1520,445"
        fill="none"
        stroke="#22d3ee"
        stroke-width="1.5"
        stroke-dasharray="22 14"
        filter="url(#wire-glow)"
        opacity="0.8"
      />
      <!-- Wire 3 – indigo, left-to-right slow -->
      <path
        class="wire-3"
        d="M-80,680 C350,620 650,740 980,660 S1280,620 1520,675"
        fill="none"
        stroke="#818cf8"
        stroke-width="2"
        stroke-dasharray="28 20"
        filter="url(#wire-glow)"
        opacity="0.7"
      />
      <!-- Wire 4 – vertical blue -->
      <path
        class="wire-4"
        d="M280,-40 C260,160 300,380 275,560 S255,740 280,940"
        fill="none"
        stroke="#3b82f6"
        stroke-width="1.5"
        stroke-dasharray="18 22"
        filter="url(#wire-glow)"
        opacity="0.5"
      />
      <!-- Wire 5 – vertical cyan -->
      <path
        class="wire-5"
        d="M1160,-40 C1140,200 1180,420 1155,600 S1135,780 1160,940"
        fill="none"
        stroke="#06b6d4"
        stroke-width="1.5"
        stroke-dasharray="15 25"
        filter="url(#wire-glow)"
        opacity="0.45"
      />

      <!-- ── Spark dots ───────────────────────────────── -->
      <circle class="spark-a" cx="280" cy="200"  r="3.5" fill="#93c5fd" filter="url(#spark-glow)" />
      <circle class="spark-b" cx="720" cy="200"  r="3"   fill="#22d3ee" filter="url(#spark-glow)" />
      <circle class="spark-c" cx="1160" cy="210" r="3.5" fill="#a5b4fc" filter="url(#spark-glow)" />
      <circle class="spark-d" cx="550" cy="450"  r="2.5" fill="#67e8f9" filter="url(#spark-glow)" />
      <circle class="spark-e" cx="980" cy="660"  r="3"   fill="#818cf8" filter="url(#spark-glow)" />
    </svg>
  </div>
</template>

<style scoped>
/* ── Wire flow animations ── */
@keyframes flowRight {
  from { stroke-dashoffset: 300; }
  to   { stroke-dashoffset: 0; }
}
@keyframes flowLeft {
  from { stroke-dashoffset: -300; }
  to   { stroke-dashoffset: 0; }
}
@keyframes flowDown {
  from { stroke-dashoffset: 500; }
  to   { stroke-dashoffset: 0; }
}

/* ── Spark blink ── */
@keyframes sparkBlink {
  0%, 100% { opacity: 0; transform: scale(0.2); }
  45%, 55%  { opacity: 1; transform: scale(1); }
}

.wire-1 { animation: flowRight 3.2s linear infinite; }
.wire-2 { animation: flowLeft  4.5s linear infinite; animation-delay: -1.5s; }
.wire-3 { animation: flowRight 6s   linear infinite; animation-delay: -2s; }
.wire-4 { animation: flowDown  7s   linear infinite; }
.wire-5 { animation: flowDown  9s   linear infinite; animation-delay: -3s; }

.spark-a { animation: sparkBlink 2.4s ease-in-out infinite; }
.spark-b { animation: sparkBlink 3.0s ease-in-out infinite; animation-delay: -0.8s; }
.spark-c { animation: sparkBlink 2.8s ease-in-out infinite; animation-delay: -1.4s; }
.spark-d { animation: sparkBlink 3.5s ease-in-out infinite; animation-delay: -0.5s; }
.spark-e { animation: sparkBlink 2.6s ease-in-out infinite; animation-delay: -2.1s; }
</style>
