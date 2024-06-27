<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header header0">
          <h1>
            El papa dice que en el vaticano <br />
            hay demasiado ambiente <span class="circle-big">maricón</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                El papa Francisco pide a los obispos que no dejen entrar a
                homosexuales en los seminarios porque considera que hay
                “demasiado ambiente maricón”.
              </p>

              <p>
                En una reunión a puerta cerrada y sin periodistas, Francisco
                habría dicho:
              </p>

              <h2>
                “Creo que hay demasiado ambiente marica en ciertos seminarios”.
              </h2>

              <p>
                También pidió que estos candidatos rechazados fueran acompañados
                con “respeto y delicadeza”. A su juicio es mejor que los
                homosexuales no entren en el seminario. Pero que, si entran, es
                mejor que no se conviertan en sacerdotes.
              </p>
            </div>

            <div class="col5">
              <div class="note">
                <p>
                  Es verdad que en 2017 saltó
                  <a
                    href="https://www.lasexta.com/noticias/internacional/policia-interrumpe-orgia-gay-drogas-piso-vaticano_20170629595537d00cf26ceeda3d186b.html"
                    target="_blank"
                    >la noticia</a
                  >
                  de que
                  <b>en El Vaticano celebraban orgías gais con drogas</b>.
                </p>

                <p>
                  No nos metemos con lo que en los pasillos de la Iglesia se
                  hace pero de ahí a que el Papa diga eso...
                </p>
              </div>

              <div class="rel">
                <figure>
                  <nuxt-img
                    class="img0"
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2024_0.png"
                  />
                </figure>

                <img
                  class="float float0"
                  src="~/assets/decorations/sparkle.svg"
                  alt=""
                />

                <img
                  class="float float1"
                  src="~/assets/decorations/eyes_cloud_left.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="header">
          <h1><span class="circle-big">Sonia Ferrer</span> VS Amor Romeira</h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                Cuando <b>Amor Romeira</b> era pequeña admiraba a
                <b>Sonia Ferrer</b> al verla en televisión. Pero tras sus
                encontronazos con la presentadora en el programa
                <i>En boca de todos</i>, reconoció que ya no quería ser como
                ella.
              </p>

              <p>
                Frases de Sonia, al hablar de los procesos que viven algunas
                personas trans, como <b>“mutilación del cuerpo”</b> (en lugar de
                llamarlo cirugía de reasignación) dejaron a muchas personas
                atónitas.
              </p>
            </div>

            <div class="col55 rfirst">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/vAMX0LURKCo"
                :start="122"
                cover="/img/2024_cover_1.png"
                aspect-ratio="16/9"
              />
            </div>
          </div>

          <div class="row">
            <div class="col3 col-rhide">
              <img src="~/assets/decorations/eyes_rainbow.svg" alt="" />
            </div>

            <div class="col5 rfirst">
              <p>
                Además a la presentadora le gusta mucho demonizar los
                <b>bloqueadores de pubertad</b> en niños y niñas trans. Como si
                estos no se usaran también por parte de adolescentes cisgénero
                con pubertad exprés y en otros casos.
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

const year = 2024;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $violet;
}

.header0 h1 {
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    display: block;
    background: url(~/assets/decorations/sparkle.svg) no-repeat center;
    background-size: contain;
    top: -5%;
    right: 28%;
    width: 50px;
    height: 50px;
    z-index: 5;
  }
}

.img0 {
  padding: 30px 40px 0 0;
}

.note {
  width: 65%;
  margin: 10px 10% -6% auto;
  z-index: 5;
}

.rel {
  position: relative;

  .float {
    position: absolute;
  }

  .float0 {
    bottom: 20%;
    left: -13px;
    width: 75px;
  }

  .float1 {
    bottom: -15px;
    right: 0;
    width: 78px;
  }
}

@media (max-width: 470px) {
  .note {
    width: 95%;
    margin: 10px auto -3%;
  }
}
</style>
