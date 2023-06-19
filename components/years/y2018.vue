<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>No alquilamos a <span class="circle-big">maricones</span></h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col55">
              <LayoutYearsVideo
                :src="src"
                cover="/img/2018_cover.png"
                aspect-ratio="16/9"
              />
            </div>

            <div class="col3">
              <p>
                Vas a ver una casa y te gusta. La quieres alquilar y entregas la
                documentación. <b>Pero al casero algo no le convence</b>.
              </p>

              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/2018.png"
                alt="El casero niego el alquiler a los hombres alegando que en el bloque vive gente mayor que no lo va entender"
              />

              <p><b>Les deniega poder alquilarla por ser gais</b>.</p>

              <p>Y luego que por qué sigue haciendo falta el Orgullo...</p>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2018;

import src from "~/assets/video/2018.mp4";
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

.col3 {
  margin-left: 10%;
}

img {
  width: 130%;
  display: block;
  margin-left: -15%;
  max-width: none !important;
}

@include bkYear {
  .col3 {
    margin-left: 0;
  }

  img {
    width: 100%;
    margin-left: 0;
  }
}
</style>
