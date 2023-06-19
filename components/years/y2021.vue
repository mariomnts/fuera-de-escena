<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header header0">
          <h1>#Xustiza<br />Para<br />Samuel</h1>
        </div>

        <div class="body body0">
          <div class="row">
            <div class="col4">
              <p>
                Un joven, <b>Samuel Luiz</b>, y una amiga estaban haciendo una
                videollamada una noche de fiesta en Galicia fuera de un club
                cuando otros jóvenes, al pasar cerca, pensaron que les estaban
                grabando a ellos.
              </p>

              <h2>- O paras de grabar o te mato, maricón.</h2>
              <h2>- ¿Maricón de qué?</h2>

              <p>
                Justo después Samuel recibió un puñetazo que derivó en paliza.
                Pero el agresor se fue... para volver con otras doce personas al
                grito de <b>“¡maricón de mierda!”</b>.
              </p>

              <p>
                Según la policía al menos cuatro personas le patearon hasta que
                ya no se movía. <b>Lo mataron</b>.
              </p>
            </div>

            <div class="col45">
              <div class="rel">
                <figure>
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2021.png"
                    alt="Manifestación en la que se pide justicia para Samuel Luiz"
                  />
                </figure>

                <img
                  class="float"
                  src="~/assets/decorations/eyes_cloud_left.svg"
                  alt=""
                />
              </div>

              <p>
                Para sorpresa de muchos
                <b>se descartó inicialmente el carácter homófobo del ataque</b>,
                hasta que varios testigos relataron los hechos. Hubo protestas
                por todo el país mostrando la indignación y la impotencia debido
                a la injusticia.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="body">
          <div class="row">
            <div class="col35">
              <h1>
                Cuando comes se te va la <span class="circle-big">pluma</span>
              </h1>

              <p>
                En esta publicidad una marca de chocolatinas aludía al momento
                en el que tienes hambre. Suena inocente.
              </p>

              <p>“No eres tú cuando tienes hambre” era el eslogan.</p>

              <p>
                Pues en este <i>spot</i> vemos a
                <b>Aless Gibaja con toda su pluma</b> antes de comer. Después de
                morder la chocolatina vemos a un hombre
                <b>heteronormativo</b> sintiéndose bien.
              </p>

              <p>
                Cuando lo vimos, muchos nos preguntamos cómo nadie lo había
                detenido antes de que viera la luz.
              </p>
            </div>

            <div class="col5">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/WofavroDjoM"
                cover="/img/2021_cover.png"
                aspect-ratio="1"
              />

              <div class="note">
                <p>¿Qué es la <b>plumofobia</b>?</p>

                <p>
                  El rechazo por parte de miembros del colectivo de otros
                  miembros por sus comportamientos alejados de lo que se espera
                  de los roles de género.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
            src="/img/2021_1.png"
          />
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
            src="/img/2021_2.png"
          />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2021;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $violet;
}

.header0 {
  margin-bottom: -40px !important;

  br {
    display: none;
  }
}

.body0 {
  h2 {
    &:first-of-type {
      padding-bottom: 0;
    }
  }

  figure {
    width: 100%;
    margin-bottom: 30px;
  }
}

.note {
  width: 75%;
  margin: 40px 0 0 5%;
}
.rel {
  position: relative;

  .float {
    position: absolute;
    top: 30px;
    right: -30px;
    width: 80px;
  }
}

.footer {
  height: 100px;

  img {
    position: absolute;
    bottom: 0;
    pointer-events: none;

    &:first-child {
      left: 0;
      max-width: min(380px, 18vw);
    }

    &:last-child {
      right: 0;
      max-width: min(380px, 19vw);
    }
  }
}

@include bkYearColumns {
  .header0 br {
    display: inline-block;
  }

  .header0 h1 {
    font-size: 3.35em !important;
  }

  .rel .float {
    right: 10%;
  }

  .note {
    max-width: 500px;
    width: 90%;
    margin: 40px auto;
  }

  .footer {
    display: none;
  }

  .body {
    margin-bottom: 30px !important;
  }
}

@include bkYearSlider {
  .rel .float {
    right: 0;
    width: 60px;
  }
}
</style>
