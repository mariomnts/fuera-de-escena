<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>FOQ abre un poco el camino</h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col55">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/db7-f9woJTg"
                cover="/img/2008_cover.png"
                aspect-ratio="4/3"
              />
            </div>

            <div class="col3">
              <p>
                <b><i>Física o Química</i></b> muestra en una de sus tramas el
                acoso a adolescentes por su sexualidad.
              </p>

              <p>
                Volvemos a ver el <b>enfoque negativo</b> de adolescente
                acosado, adolescente que no quiere salir del armario. Aún así,
                la reacción de una de sus profesoras hablando de la homofobia es
                maravillosa.
              </p>

              <p>
                Por suerte <b>también vemos la relación de Fer y David</b> que
                aunque con obstáculos,
                <b
                  >está llena de amor y consigue el respeto de sus compañeros</b
                >
                en un momento en el que empezaba a haber más aceptación por
                parte de la audiencia.
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

const year = 2008;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}
</style>
