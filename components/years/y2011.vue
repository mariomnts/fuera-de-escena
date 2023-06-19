<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            La extrema derecha gana <br />
            al Orgullo en Belgrado
          </h1>
        </div>
        <div class="body">
          <div class="row">
            <div class="col35">
              <p>
                El año anterior se celebró el <b>primer Orgullo de Belgrado</b>.
                Pero <b>acabó en violencia extrema por los LGTBIQfobos</b> que
                reventaron la marcha. Así que este año las autoridades serbias
                prefirieron impedirlo.
              </p>

              <p>
                El Consejo de Seguridad Nacional informó que
                <b
                  >la marcha del Orgullo no se celebraría debido a las amenazas
                  de grupos de extrema derecha</b
                >
                de realizar actos de violencia y provocar incendios por toda la
                ciudad si el evento se celebraba.
              </p>

              <p>
                <b
                  >Un día para celebrar la libertad se convirtió en un día
                  triste</b
                >.
              </p>
            </div>

            <div class="col45">
              <div class="rel">
                <figure>
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2011_1.png"
                    alt="Manifestación en contra del orgullo"
                  />
                </figure>

                <img
                  class="float"
                  src="~/assets/decorations/eyes_cloud_left.svg"
                  alt=""
                />
              </div>

              <p class="small">
                Decenas de personas se presentaron en el Orgullo de 2010 con
                intención de boicotearlo
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="header header1">
          <h1>Nací para sobrevivir</h1>
        </div>

        <div class="body">
          <div class="row row0">
            <div class="col3">
              <p>
                <b>Lady Gaga</b> saca la canción <i>Born this way</i> que dice:
              </p>
              <p>
                <i
                  >No matter gay, straight, or bi', lesbian, transgender
                  life.</i
                >
                <br />
                <i>I'm on the right track, baby. I was born to survive.</i>
              </p>

              <h2>
                No importa que seas gay, hetero o bi, lesbiana o trans.<br />
                Estoy en el camino correcto, cariño. Yo nací para sobrevivir.
              </h2>
            </div>

            <div class="col3">
              <p>
                A la vez que nos muestra apoyo y nos regala un himno a las
                minorías, ese sobrevivir habla de cómo la lucha sigue vigente y
                siendo necesaria.
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
            src="/img/2011.png"
            alt="Lady Gaga"
          />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2011;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

.row0 {
  align-items: flex-start !important;
}

.footer {
  height: 50px;

  img {
    position: absolute;
    bottom: 0;
    right: 25%;
    max-width: min(615px, 48vw);
  }
}

.small {
  width: 85%;
  margin: 0 auto;
}

.rel {
  position: relative;

  .float {
    position: absolute;
    bottom: 40px;
    right: -20px;
    width: 70px;
  }
}

.header1 h1 {
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    display: block;
    background: url(~/assets/decorations/sparkle.svg) no-repeat center;
    background-size: contain;
    top: 18%;
    right: -10%;
    width: 50px;
    height: 50px;
    z-index: 5;
  }
}

@include bkYearColumns {
  .body {
    margin-bottom: 30px !important;
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
  .header h1::after {
    display: none !important;
  }

  .rel .float {
    right: 0;
    width: 60px;
  }
}

@media (min-width: 3000px) {
  .footer img {
    right: 30%;
  }
}

@media (max-width: 1900px) {
  .footer img {
    right: 18%;
  }
}

@media (max-width: 1400px) {
  .footer img {
    right: 10%;
  }
}
</style>
