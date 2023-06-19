<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0
        ><div class="header">
          <h1>
            La campaña contra la homofobia <br />
            en el fútbol... fracasada
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col45">
              <div class="rel">
                <figure class="outlined">
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2014.png"
                    alt="Tweets de la campaña en redes"
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

            <div class="col3 rfirst">
              <p>
                Las asociaciones LGTBIQ+
                <b>Halegatos y Arcópoli iniciaron una campaña</b> en Twitter con
                motivo del comienzo de La Liga. Utilizando los hashtags
                #LaLigaSinHomofobia, #LaLigaSinBifobia y #LaLigaSinTransfobia,
                <b>los usuarios interactuarían con fútbolistas</b> y
                personalidades del mundo de fútbol para así darles pie a
                expresar públicamente su respeto y compromiso con la igualdad.
              </p>

              <p>
                <b>Pero fue un poco chasco</b>. Tuvo una buena aceptación dentro
                de las redes sociales llegando a situarse como
                <i>trending topic</i> nacional pero tuvo un éxito nulo en las
                esferas futbolísticas.
              </p>

              <p>
                <b
                  >Ninguno de los fútbolistas mencionados mostró su apoyo a la
                  iniciativa</b
                >. Parece ser que sigue siendo un tema muy tabú.
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

const year = 2014;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

figure {
  padding: 0 !important;

  img {
    border-radius: 15px !important;
  }
}

.rel {
  position: relative;

  .float0 {
    position: absolute;
    top: 60px;
    left: -20px;
    width: 70px;
  }

  .float1 {
    position: absolute;
    bottom: 40px;
    right: -30px;
    width: 70px;
  }
}

@include bkYearColumns {
  .body {
    padding-bottom: 40px;
  }
}

@include bkYearSlider {
  .rel .float0 {
    width: 65px;
    left: -3%;
  }

  .rel .float1 {
    width: 65px;
    right: -3%;
  }
}
</style>
