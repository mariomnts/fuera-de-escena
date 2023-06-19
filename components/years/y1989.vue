<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            “No es más que un <span class="circle-big">mariconazo</span>...”
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4">
              <p>
                Muchos conocen la famosa frase de Ruiz Mateos de “Que te pego,
                leche...” dedicada a Boyer. Pero no tantos recuerdan que poco
                antes habla del ministro así:
              </p>

              <h2>
                “Para eso hace falta que sea macho, que sea viril, que sea
                medianamente hombre. No es más que un mariconazo...”
              </h2>

              <p>
                Se queda a gusto asociando falta de valentía con sexualidad.
              </p>
            </div>

            <div class="col6">
              <div class="rel">
                <LayoutYearsYtvideo
                  src="https://www.youtube.com/embed/xahVVWZzkqg"
                  cover="/img/1989_cover.png"
                  aspect-ratio="16/9"
                  :start="23"
                  class="video"
                />

                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  class="float1"
                  src="/img/1989_0.svg"
                />
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  class="float2"
                  src="/img/1989_1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1989;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}

.header {
  margin-bottom: 10px !important;
}

.body {
  margin-bottom: 95px !important;
}

.rel {
  position: relative;

  .video {
    position: relative;
    z-index: 2;
  }

  img.float1 {
    position: absolute;
    bottom: -12%;
    right: -12%;
    width: 150px;
    z-index: 5;
    pointer-events: none;
  }

  img.float2 {
    position: absolute;
    top: -10%;
    right: -10%;
    height: 110%;
    z-index: 0;
  }
}

@include bkYearSlider {
  img.float1 {
    right: 0% !important;
  }

  img.float2 {
    right: 0% !important;
  }
}

@media (max-width: 620px) {
  img.float1 {
    width: 110px !important;
  }
  img.float2 {
    display: none !important;
  }
}
</style>
