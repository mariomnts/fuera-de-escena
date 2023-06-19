<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            La homosexualidad <span class="circle-big">no es natural</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col5">
              <div class="rel">
                <figure>
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2012.png"
                    alt="Entrevista a Coto Matamoros en Sálvame"
                  />
                </figure>

                <nuxt-img class="float0" src="/img/2012_1.svg" />
                <img
                  class="float1"
                  src="~/assets/decorations/sparkle.svg"
                  alt=""
                />
              </div>
            </div>

            <div class="col3">
              <p>
                <b>Coto Matamoros</b> dice en el programa de televisión
                <i>Sálvame</i>: “<b
                  >Soy homófobo contra ese sentimiento que han creado los
                  homosexuales.</b
                >
                Soy homófobo contra el gueto de Chueca”.
              </p>

              <p>
                Sin ningún reparo continúa su retahíla: “Soy homófobo contra un
                país que abraza
                <b>la homosexualidad como algo natural, que no lo es</b>”.
              </p>

              <p>
                Y ya para rematar: “<b
                  >el día que los hijos nazcan por el ano, a lo mejor dejo de
                  ser homófobo</b
                >”.
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

const year = 2012;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

.rel {
  position: relative;

  .float0 {
    position: absolute;
    top: -15%;
    left: 20%;
    width: 150px;
  }

  .float1 {
    position: absolute;
    bottom: -10%;
    right: 20%;
    width: 80px;
  }
}

@include bkYearColumns {
  figure {
    margin: 20px auto !important;
  }
}

@include bkYearSlider {
  .rel .float0 {
    width: 110px;
    left: 10%;
  }

  .rel .float1 {
    width: 60px;
    right: 10%;
  }
}
</style>
