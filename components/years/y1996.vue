<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>La primera vez de La Veneno</h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col5">
              <div class="rel">
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1996.png"
                  alt="Cristina Ortiz, La Veneno"
                />

                <nuxt-img class="float" src="/img/1996_1.svg" />
              </div>

              <p class="small">
                Puedes ver
                <a
                  href="https://www.youtube.com/watch?v=1ew0KyjfPwM"
                  target="_blank"
                  >un resumen aquí</a
                >.
              </p>
            </div>

            <div class="col4 rfirst">
              <p>
                Aunque ya había salido en televisión de forma fugaz en el 94, se
                conoce la del 96 como
                <b>la primera vez que La Veneno aparece en pantalla</b> y cuenta
                su historia mientras se prostituye. Después habla de cómo
                <b>su madre no la acepta</b>.
              </p>

              <p>
                Fue en <i>Esta noche cruzamos el Mississippi</i> de Pepe
                Navarro.
              </p>

              <p>
                La historia engancha tanto que se reencuentran en plató. Incluso
                estando allí,
                <b>su madre sigue refiriéndose a Cristina en masculino</b>.
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

const year = 1996;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}

p.small {
  margin-top: 0 !important;
}

.rel {
  position: relative;

  .float {
    position: absolute;
    top: 0;
    left: 0;
    width: 36%;
  }
}

@include bkYearColumns {
  img:first-of-type {
    max-width: min(100%, 400px) !important;
    margin: 0 auto;
    display: block;
  }

  img.float {
    width: 28% !important;
    top: 4% !important;
    left: 18% !important;
  }
}

@media (max-width: 550px) {
  .rel .float {
    display: none;
  }
}
</style>
