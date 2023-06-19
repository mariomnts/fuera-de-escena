<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>El Rock hudson <span class="circle-big">real</span></h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4 rel">
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/1985.png"
                alt="Revista publicada tras su muerte"
              />
              <img
                class="float"
                src="~/assets/decorations/eyes_rainbow.svg"
                alt=""
              />
            </div>

            <div class="col3">
              <p>
                Cuando <b>Rock Hudson</b>, estrella de cine,
                <b>muere de SIDA</b>, Hollywood choca de lleno con la realidad.
                Y con Hollywood, el mundo entero. Era el primer famoso que
                contraía esa enfermedad y moría de ella.
              </p>

              <p>
                Aunque siempre había habido rumores, se comenzó a hablar más
                abiertamente de la relación de Rock Hudson
                <b>con otros hombres</b>, lo que el mundo del cine había
                intentado ocultar toda su vida. Años después se habló de
                <b><i>“El Rock de verdad”</i></b
                >. Qué pena no haber podido serlo en vida.
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

const year = 1985;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}

.header {
  margin-bottom: -50px !important;
}

.rel {
  position: relative;

  img.float {
    position: absolute;
    width: 180px;
    bottom: -5%;
    left: -15%;
  }
}

@include bkYearColumns {
  .rel .float {
    left: 0 !important;
    bottom: 5% !important;
    width: 150px !important;
  }
}

@include bkYearSlider {
  .rel .float {
    bottom: 2% !important;
    width: 110px !important;
  }
}
</style>
