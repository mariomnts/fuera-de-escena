<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1 class="cloud">Contra el matrimonio <br />igualitario</h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                <b>Se aprueba el matrimonio igualitario en España</b> y somos
                uno de los primeros países en aprobarlo siendo referente en el
                panorama internacional.
              </p>

              <p>
                Pero no fue fácil, la tramitación de esta ley se vio acompañada
                de <b>movilizaciones sociales en contra</b>. La Iglesia católica
                se opuso de lleno a su aprobación, considerándola un ataque a la
                institución del matrimonio.
              </p>

              <p>
                Tras su aprobación, cierto partido incluso presentó un recurso
                contra la ley en el Tribunal Constitucional.
              </p>
            </div>

            <div class="col5">
              <div class="rel">
                <figure>
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2005.png"
                    alt="Manifestación contra el matrimonio igualitario"
                  />
                </figure>

                <img
                  class="float0"
                  src="~/assets/decorations/sparkle.svg"
                  alt=""
                />
                <img
                  class="float1"
                  src="~/assets/decorations/sparkle.svg"
                  alt=""
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

const year = 2005;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}

.header {
  margin-bottom: 20px !important;

  h1 {
    padding: 40px 0 30px !important;
  }
}

.rel {
  position: relative;

  .float0 {
    position: absolute;
    right: -5%;
    bottom: 10%;
    width: 90px;
  }

  .float1 {
    position: absolute;
    left: -6%;
    top: 9%;
    width: 90px;
  }
}

@include bkYearSlider {
  .rel .float0 {
    width: 65px;
    right: -3%;
  }

  .rel .float1 {
    width: 65px;
    left: -3%;
  }
}
</style>
