<template>
  <nav>
    <NuxtLink class="home" to="/">FUERA DE ESCENA</NuxtLink>
    <NuxtLink to="/proyecto">El proyecto</NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  background: rgba(255, 255, 255, 0.15);

  a {
    color: $primary;
    text-decoration: underline;
    text-underline-offset: 0.1em;
    padding: 25px 15px;
    background: none !important;

    &.home {
      font-family: "Thunder", serif;
      font-weight: bold;
      font-size: 1.25em;
      letter-spacing: 1px;
      padding-top: 27px;
    }
  }
}

@media (max-width: 320px) {
  a {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
}

@media (max-width: 260px) {
  a:not(:first-of-type) {
    display: none !important;
  }
}
</style>
