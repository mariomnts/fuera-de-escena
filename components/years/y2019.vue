<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Si te adoptan homosexuales <br />
            saldrás <span class="circle-big">homosexual</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col35">
              <p>
                <b>Pilar Gutiérrez</b> en una entrevista con Elsa Ruiz emitida
                en <i>Todo es mentira</i> reconoció que estaba en contra de los
                <b><i>lobbies</i> homosexuales</b>.
              </p>

              <p>Afirmó que las personas homosexuales</p>

              <h2 class="small">
                “Suelen ser personas adoptadas por gente de dicho colectivo que
                les hacen homosexuales. Hay niños que se rebelan contra eso y
                dan su testimonio de cómo han sido abusados”
              </h2>

              <p>
                Pilar también afirmó que
                <b>la transexualidad se puede curar</b>.
              </p>
            </div>

            <div class="col6">
              <LayoutYearsVideo
                :src="src"
                cover="/img/2019_cover.png"
                aspect-ratio="16/9"
              />

              <p class="small">
                Puedes ver la entrevista completa
                <a
                  href="https://www.cuatro.com/todoesmentira/elsa-ruiz-pilar-gutierrez-entrevista_18_2706375116.html"
                  target="_blank"
                  >en este link</a
                >.
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

const year = 2019;

import src from "~/assets/video/2019.mp4";
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}
</style>
