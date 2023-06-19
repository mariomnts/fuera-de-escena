<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            El amor entre hombres es
            <span class="circle-big">porno</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4">
              <p>
                Muchos cuando pensamos en <b>Leonardo Dantés</b> recordamos su
                famoso baile del pañuelo. En 1979 sacó la canción
                <i>Enamorado de Javier</i>, en la que habla de cómo Miguel está
                enamorado de Javier.
              </p>

              <p>
                Sobre esta inofensiva canción, un conocido presentador de radio,
                televisión y escritor, lo calificó de
                <b>“pornografía por hablar sobre amor entre hombres”</b>.
              </p>

              <p>
                La primera canción de amor de temática explícitamente homosexual
                no se iba a quedar sin criticar, ole.
              </p>
            </div>

            <div class="col6">
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/1979.png"
                alt="Portada canción Enamorado de Javier"
              />

              <LayoutYearsAudio
                :src="audio"
                title="Enamorado de Javier"
                author="Leonardo Dantés"
              />
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1979;

import audio from "~/assets/audio/EnamoradoDeJavier.mp3";
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $red;
}

img {
  margin: 0 auto -20px;
  transform: translateX(30%) rotate(15deg);
  display: block;
  position: relative;
  z-index: 2;
  width: 200px;
  animation: none !important;
}
</style>
