<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      class="w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Statik arka plan çizgileri -->
      <path d="M-100,300 C200,220 500,380 800,300 S1100,220 1540,290"
        fill="none" stroke="rgba(245,158,11,0.10)" stroke-width="60" stroke-linecap="round" />
      <path d="M-100,600 C300,520 600,680 900,600 S1200,520 1540,590"
        fill="none" stroke="rgba(234,179,8,0.07)" stroke-width="40" stroke-linecap="round" />
      <path d="M200,-60 C180,200 220,450 195,680 S175,820 200,940"
        fill="none" stroke="rgba(245,158,11,0.06)" stroke-width="30" stroke-linecap="round" />
      <path d="M1200,-60 C1180,180 1220,400 1195,650 S1175,820 1200,940"
        fill="none" stroke="rgba(234,179,8,0.05)" stroke-width="25" stroke-linecap="round" />

      <!-- Üst sweep: geniş glow (nefes alır) -->
      <path class="glow-top"
        d="M-100,300 C200,220 500,380 800,300 S1100,220 1540,290"
        fill="none" stroke="rgba(245,158,11,0.26)" stroke-width="70"
        stroke-linecap="round" stroke-dasharray="700 400" />
      <!-- Üst sweep: ince keskin çizgi (daha hızlı) -->
      <path class="line-top"
        d="M-100,300 C200,220 500,380 800,300 S1100,220 1540,290"
        fill="none" stroke="rgba(245,158,11,0.60)" stroke-width="2.5"
        stroke-linecap="round" stroke-dasharray="80 40" />

      <!-- Alt sweep: geniş glow -->
      <path class="glow-bot"
        d="M-100,600 C300,520 600,680 900,600 S1200,520 1540,590"
        fill="none" stroke="rgba(234,179,8,0.20)" stroke-width="55"
        stroke-linecap="round" stroke-dasharray="600 500" />
      <!-- Alt sweep: ince çizgi -->
      <path class="line-bot"
        d="M-100,600 C300,520 600,680 900,600 S1200,520 1540,590"
        fill="none" stroke="rgba(234,179,8,0.48)" stroke-width="2"
        stroke-linecap="round" stroke-dasharray="60 50" />

      <!-- Dikey sol -->
      <path class="line-vert-l"
        d="M200,-60 C180,200 220,450 195,680 S175,820 200,940"
        fill="none" stroke="rgba(245,158,11,0.13)" stroke-width="20"
        stroke-linecap="round" stroke-dasharray="400 600" />

      <!-- Dikey sağ -->
      <path class="line-vert-r"
        d="M1200,-60 C1180,180 1220,400 1195,650 S1175,820 1200,940"
        fill="none" stroke="rgba(234,179,8,0.10)" stroke-width="18"
        stroke-linecap="round" stroke-dasharray="350 650" />

      <!-- Parlayan noktalar (opacity animasyonu, filter yok) -->
      <circle class="drop-1" cx="360"  cy="295" r="6"   fill="rgba(245,158,11,0.75)" />
      <circle class="drop-2" cx="800"  cy="300" r="5"   fill="rgba(250,204,21,0.85)" />
      <circle class="drop-3" cx="1150" cy="288" r="6"   fill="rgba(245,158,11,0.70)" />
      <circle class="drop-4" cx="580"  cy="598" r="4.5" fill="rgba(234,179,8,0.65)"  />
    </svg>
  </div>
</template>

<style scoped>
@keyframes flowFwd {
  from { stroke-dashoffset: 1200; }
  to   { stroke-dashoffset: 0; }
}
@keyframes flowRev {
  from { stroke-dashoffset: -1200; }
  to   { stroke-dashoffset: 0; }
}
@keyframes flowVert {
  from { stroke-dashoffset: 1000; }
  to   { stroke-dashoffset: 0; }
}
@keyframes glowBreath {
  0%, 100% { opacity: 0.55; }
  50%       { opacity: 1; }
}
@keyframes dropPulse {
  0%, 100% { opacity: 0; }
  40%, 60%  { opacity: 1; }
}

/* Üst sweep */
.glow-top {
  animation: flowFwd 5s linear infinite,
             glowBreath 3s ease-in-out infinite;
  will-change: stroke-dashoffset, opacity;
}
.line-top {
  animation: flowFwd 3.5s linear infinite;
  animation-delay: -1s;
  will-change: stroke-dashoffset;
}

/* Alt sweep */
.glow-bot {
  animation: flowRev 6s linear infinite,
             glowBreath 4s ease-in-out infinite;
  animation-delay: -2s, -1s;
  will-change: stroke-dashoffset, opacity;
}
.line-bot {
  animation: flowRev 4.5s linear infinite;
  animation-delay: -1.5s;
  will-change: stroke-dashoffset;
}

/* Dikey çizgiler */
.line-vert-l {
  animation: flowVert 8s linear infinite;
  will-change: stroke-dashoffset;
}
.line-vert-r {
  animation: flowVert 10s linear infinite;
  animation-delay: -4s;
  will-change: stroke-dashoffset;
}

/* Noktalar */
.drop-1 { animation: dropPulse 3s   ease-in-out infinite; will-change: opacity; }
.drop-2 { animation: dropPulse 3.8s ease-in-out infinite -1.2s; will-change: opacity; }
.drop-3 { animation: dropPulse 2.8s ease-in-out infinite -2s;   will-change: opacity; }
.drop-4 { animation: dropPulse 4s   ease-in-out infinite -0.7s; will-change: opacity; }

@media (prefers-reduced-motion: reduce) {
  .glow-top, .line-top, .glow-bot, .line-bot,
  .line-vert-l, .line-vert-r,
  .drop-1, .drop-2, .drop-3, .drop-4 {
    animation: none;
  }
}
</style>
