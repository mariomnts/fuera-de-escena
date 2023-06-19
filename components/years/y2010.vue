<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsDecade title="Años 10  del siglo XXI" />

    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            El orgullo de la <span class="circle-big">gente normal</span> <br />
            y corriente
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col55 rel">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/wfeBPOICFNM"
                cover="/img/2010_cover.png"
                aspect-ratio="16/9"
              />

              <nuxt-img class="float" src="/img/2010.svg" />
            </div>

            <div class="col3">
              <p>
                La cadena de televisión <b><i>Intereconomía</i></b> emitió un
                anuncio en el que hablaba de los homosexuales como gente que
                <b>no es normal y corriente</b>.
              </p>

              <p>
                El Ministerio de Industria les <b>sancionó</b> con una multa de
                100.000 €. Por suerte algo habíamos avanzado y se empieza a ver
                que algunas acciones ya no quedan impunes.
              </p>

              <p>
                Puedes ver la noticia y otras perlas del canal
                <a
                  href="https://www.youtube.com/watch?v=qb0heGd7LyA"
                  target="_blank"
                  >aquí</a
                >.
              </p>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2010;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

.header {
  margin-bottom: -10px !important;
}

.rel {
  position: relative;

  .float {
    position: absolute;
    top: -12%;
    left: -10%;
    width: 180px;
    pointer-events: none;
    z-index: 5;
  }
}

@include bkYearSlider {
  .rel .float {
    display: none !important;
  }
}
</style>
