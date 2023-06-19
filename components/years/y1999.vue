<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>Amor... <span class="circle-big">¿homosexual?</span></h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                El programa de parejas
                <b><i>Lo que necesitas es amor</i></b> tardó 6 temporadas en
                llevar una <b>pareja homosexual</b> a plató. Cuando uno de sus
                invitados explicó que <b>su pareja era un hombre</b> que se
                llamaba Miguel mientras se mordía el labio claramente nervioso,
                <b>el plató se quedó en un duro silencio</b> y la cámara nos
                dejó ver las caras de extrañeza del público.
              </p>

              <p>
                Se ve que eso no lo concebían como amor aunque ya lo indicaba el
                nombre del programa.
              </p>
            </div>

            <div class="col5">
              <nuxt-img
                src="/img/1999.svg"
                alt="Fotograma donde el invitado cuenta que es gay visiblimente nervioso"
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

const year = 1999;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}
</style>
