<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>Y si su hijo... ¿fuera homosexual?</h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4">
              <p>
                En el programa de tertulia <i>Y usted qué opina</i> planteaban
                la cuestión de que un hijo fuera homosexual.
              </p>

              <p>
                Los testimonios de personas en la calle hablan de
                <b>vicio, defecto y degeneración</b>.
              </p>

              <h2>
                “Para mí sería horroroso que mi hijo fuera
                <span class="circle-big">esa cosa</span>. No me gustaría pensar
                que tengo yo eso en la familia. Prefiero tener un niño
                deficiente.”
              </h2>

              <p>A ver quién salía del armario después de escuchar eso...</p>
            </div>

            <div class="col4">
              <nuxt-img
                src="/img/1987.svg"
                alt="Fotograma del programa de rtve Y usted qué opina"
              />

              <p class="small">
                Lo puedes ver en los
                <a
                  href="https://www.rtve.es/play/videos/programas-y-concursos-en-el-archivo-de-rtve/usted-opina-tabu-homosexualidad/5295522/"
                  target="_blank"
                  >archivos de RTVE</a
                >. Los testimonios comienzan en el minuto 33:23.
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

const year = 1987;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}
</style>
