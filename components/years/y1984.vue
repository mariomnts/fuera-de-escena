<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            El <span class="circle-big">rechazo</span> dentro<br />
            del propio colectivo
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col5">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/3xjEk5Sbfpc"
                cover="/img/1984_cover.png"
                aspect-ratio="4/3"
              />
            </div>

            <div class="col35 rfirst">
              <p>
                <b><i>La muerte de Mikel</i></b> es una película española que
                nos muestra el sufrimiento de su protagonista por
                <b>no aceptarse a sí mismo</b> y las consecuencias que eso
                conlleva.
              </p>

              <p>
                Está casado con una mujer, pero
                <b
                  >los intentos de represión de su homosexualidad hacen que la
                  situación sea insostenible</b
                >
                y acaban por separarse.
              </p>

              <p>
                En esta conversación de la peli vemos su rechazo hacia otros de
                su propio colectivo:
              </p>

              <p>
                - <b>¿No te das cuenta de lo que eres?</b> <br />
                - <b>No. Dimelo tú.</b><br />
                -<b> Pues un travesti de mierda, así de claro.</b>
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
            src="/img/1984.png"
          />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1984;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}

.footer {
  height: 100px;

  img {
    position: absolute;
    bottom: 0;
    left: 3%;
    max-width: min(450px, 43vw);
    pointer-events: none;
  }
}

@media (max-width: 700px) {
  .footer img {
    left: 1%;
  }
}

@media (max-width: 500px) {
  .body {
    margin-bottom: 40px !important;
  }

  .footer {
    display: none;
  }
}
</style>
