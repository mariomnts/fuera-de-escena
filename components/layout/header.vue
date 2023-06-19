<template>
  <main>
    <img src="~/assets/back/abstract.svg" alt="" />

    <LayoutNavbar />

    <section>
      <slot></slot>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding-top: 75px;
  position: relative;
  overflow: hidden;
  color: $primary;

  img {
    --scale-factor: 1.85;

    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    z-index: -100;
    animation: rotate 15s ease-in-out alternate infinite;
  }

  @keyframes rotate {
    0% {
      transform: scale(var(--scale-factor)) rotate(-40deg);
    }
    100% {
      transform: scale(var(--scale-factor)) rotate(40deg);
    }
  }
}

section {
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 5%;
  overflow: auto;
}

@media (max-aspect-ratio: 0.9) {
  img {
    --scale-factor: 2.6 !important;
  }
}

@media (max-aspect-ratio: 0.7) {
  img {
    --scale-factor: 3.1 !important;
  }
}

@media (max-aspect-ratio: 0.5) {
  img {
    --scale-factor: 3.8 !important;
  }
}

@media (max-aspect-ratio: 0.4) {
  img {
    --scale-factor: 5 !important;
  }
}

@media (max-aspect-ratio: 0.3) {
  img {
    --scale-factor: 6 !important;
  }
}

@media (min-aspect-ratio: 1.5) {
  img {
    --scale-factor: 2.3 !important;
  }
}

@media (min-aspect-ratio: 1.5) {
  img {
    --scale-factor: 2.4 !important;
  }
}

@media (min-aspect-ratio: 2) {
  img {
    --scale-factor: 2.9 !important;
  }
}

@media (min-aspect-ratio: 2.5) {
  img {
    --scale-factor: 3.4 !important;
  }
}

@media (min-aspect-ratio: 3) {
  img {
    --scale-factor: 3.8 !important;
  }
}

@media (min-aspect-ratio: 4) {
  img {
    --scale-factor: 4.5 !important;
  }
}

@media (min-aspect-ratio: 5) {
  img {
    --scale-factor: 5.5 !important;
  }
}

@media (min-aspect-ratio: 6) {
  img {
    --scale-factor: 6.5 !important;
  }
}
</style>
