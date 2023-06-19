<template>
  <div class="h100">
    <LayoutHeader class="header">
      <div>
        <h1>
          <span class="w1">FUERA</span><br /><span class="w2">DE </span>
          <span class="w3">ESCENA</span>
        </h1>

        <h2>
          Cómo estuvo presente la
          <span class="circle-big">LGTBIQfobia</span> <br />durante tu
          adolescencia
        </h2>

        <div class="selector">
          <h3>Introduce tu año de nacimiento</h3>

          <LayoutYearSelector />
        </div>
      </div>
    </LayoutHeader>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100%;
  min-height: 500px;

  & > div {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 5%;
  }

  h1 {
    font-family: "Thunder", serif;
    font-weight: 800;
    font-size: 8.12em;
    margin: 10px 0;
  }

  h2 {
    font-weight: 300;
    font-size: 1.5em;
    margin: 10px 0;
    line-height: 1.4em;
  }

  h1 {
    .w1 {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        display: block;
        background: url(~/assets/decorations/sparkle.svg) no-repeat center;
        background-size: contain;
        top: -0.3em;
        right: 0.2em;
        width: 0.55em;
        height: 0.55em;
        animation: pulse0 6s 1s infinite;
      }
    }

    .w2 {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        display: block;
        background: url(~/assets/decorations/sparkle.svg) no-repeat center;
        background-size: contain;
        top: 0.1em;
        left: -0.3em;
        width: 0.55em;
        height: 0.55em;
        animation: pulse1 7s 4s infinite;
      }
    }

    .w3 {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        display: block;
        background: url(~/assets/decorations/eyes_cloud.svg) no-repeat center;
        background-size: contain;
        top: -0.3em;
        right: -0.3em;
        width: 0.55em;
        height: 0.55em;
        animation: pulse2 8s 2s infinite;
      }
    }
  }

  .selector {
    margin-top: 6.5vh;
    display: inline-block;

    h3 {
      font-family: "Thunder", serif;
      font-weight: bold;
      font-size: 1.6em;
      letter-spacing: 1px;
      margin: 10px 0 20px;
    }
  }
}

@media (max-height: 600px) {
  h1 {
    font-size: 6em !important;
  }

  h2 {
    font-size: 1.3em !important;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: max(20vw, 4em) !important;
    letter-spacing: 2px;
  }

  h2 {
    font-size: max(3vw, 1.5em) !important;
  }
}
</style>
