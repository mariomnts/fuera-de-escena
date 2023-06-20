<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header header0">
          <h1 class="cloud">
            Qué fácil es <br />
            cambiarse de acera
          </h1>
        </div>

        <div class="body body0">
          <div class="row">
            <div class="col5">
              <div class="rel">
                <figure>
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/1998_0.png"
                    alt="Fotograma de Al salir de clase"
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

            <div class="col3">
              <p>
                Clara fue el <b>personaje lésbico</b> de
                <i>Al salir de clase</i>. Se enamoró de Míriam pero acabó
                acosándola hasta el punto de provocar un fuego por un ataque de
                celos. Caen en el estereotipo de <b>lesbiana retorcida</b>.
              </p>

              <p>
                El público reaccionó mal, insultaban por la calle a la actriz y
                asociaciones de padres se quejaron de esa trama.
              </p>

              <p>
                Así que se olvidó de las chicas y comenzó a tener novios. De
                repente
                <b
                  >aclaró su orientación sexual y dijo que solo le gustaban los
                  chicos</b
                >.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="body body1">
          <div class="row">
            <div class="col5">
              <h1>
                Pan y circo... Pero en TV <br />
                y en el siglo XX
              </h1>
            </div>

            <div class="col3">
              <p>
                Personas como <b>Manolito Pozi</b> y <b>Carmen de Mairena</b> se
                hicieron frecuentes en programas del <i>late night</i>.
              </p>

              <p>
                <b>Trans y travestis</b> son presentados al público como
                elementos de un <b>circo</b>, para que el público tenga un
                primer acercamiento a figuras que hasta entonces no conoce y
                para que, básicamente, <b>se ría de ellos</b>.
              </p>

              <p>
                Personas de carne y hueso, a menudo con historias difíciles,
                <b>son presentadas como mofa</b> para el pitorreo de todos.
              </p>
            </div>
          </div>
        </div>

        <div class="footer footer1">
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:900px 1100px:1000px"
            src="/img/1998_1.png"
          />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1998;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}

.header0 {
  margin-bottom: 20px !important;

  h1 {
    padding: 40px 0 30px !important;
  }
}

.rel {
  position: relative;

  .float0 {
    position: absolute;
    top: -18%;
    right: 8%;
    width: 90px;
  }

  .float1 {
    position: absolute;
    bottom: -18%;
    left: 8%;
    width: 90px;
  }
}

.body1 {
  justify-content: flex-start !important;
  .row {
    align-items: flex-start !important;
  }
}

.footer1 {
  height: 250px;

  img {
    position: absolute;
    bottom: 0;
    left: 5%;
    max-width: min(950px, 70vw);
  }
}

@include bkYearColumns {
  .body0 {
    margin-bottom: 40px !important;
    .rel {
      margin-bottom: 30px;
    }
  }

  .body {
    justify-content: center !important;
  }

  .footer {
    height: auto !important;

    img {
      position: static !important;
      max-width: none !important;
      margin: 0 auto !important;
    }
  }
}

@include bkYearSlider {
  .rel .float0 {
    width: 65px;
    top: -10%;
  }

  .rel .float1 {
    width: 65px;
    bottom: -10%;
  }

  .footer {
    img {
      width: 100vw !important;
      margin-left: -6% !important;
    }
  }
}
</style>
