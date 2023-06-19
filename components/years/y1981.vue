<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Que lo sea [homosexual], <br />
            pero que no se le note
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col55 rel">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/eFmOWjC6Meg"
                cover="/img/1981_cover.png"
                aspect-ratio="4/3"
              />

              <nuxt-img class="float" src="/img/1981_1.svg" />
            </div>

            <div class="col3">
              <p>
                Interesantísimo <b>documental</b> sobre
                <b>cómo se veía en España la homosexualidad</b> en esta época.
              </p>

              <p>
                Hay una primera parte en la que preguntan en la calle qué
                piensan sobre el tema. Un individuo explica la homosexualidad
                así:
                <b
                  >“al estar parados y no hacer nada, les da por hacer cualquier
                  cosa”</b
                >. Muchos critican que se celebre el Orgullo porque opinan que
                perjudica y da mal ejemplo.
              </p>

              <p>
                También <b>hablan varios homosexuales</b> y
                <b>cuentan sus duros testimonios</b>.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="body">
          <div class="row row1">
            <div class="col35">
              <h1>Pero, ¡Si <span class="circle-big">es un tío</span>!</h1>

              <p>
                <b>Bibiana Fernández</b>, que por aquel entonces se hacía llamar
                Bibi Andersen, y <b>Paco Martínez Soria</b> coincidieron en el
                programa <i>Mano a mano</i>.
              </p>

              <p>
                Allí Paco cuenta la anécdota de que cuando les presentaron él
                señaló qué guapa era ella y un amigo suyo le dijo:
                <b>“¡Pero si es un tío!”</b>.
              </p>

              <p>
                Bibiana poco después se defiende.
                <a
                  href="https://www.youtube.com/watch?v=vo0o7bWfMs8&t=123s"
                  target="_blank"
                  >Puedes verlo aquí</a
                >.
              </p>
            </div>

            <div class="col5">
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/1981.png"
                alt="Bibiana Fernández y Paco Martínez Soria"
              />
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1981;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}

.rel {
  position: relative;

  .float {
    position: absolute;
    width: 200px;
    top: -70px;
    left: -25px;
    pointer-events: none;
    z-index: 5;
  }
}

@include bkYearColumns {
  .row1 {
    flex: 1;
  }
}

@include bkYearSlider {
  .rel .float {
    display: none !important;
  }
}
</style>
