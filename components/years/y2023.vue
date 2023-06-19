<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Respeto que exista... pero <br />
            <span class="circle-big">estoy en contra</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                La periodista <b>Paloma Cervilla</b> dice en televisión: “La
                familia es padre, madre e hijos. Y lo digo sin complejos y
                ningún miedo a que me digan nada, lo tengo clarísimo. Y
                <b
                  >que un niño tenga dos padres me parece hacerle un daño
                  tremendo</b
                >”, aseguró.
              </p>

              <p>
                La tertuliana remató su intervención asegurando que “respeta”
                que haya homosexuales que quieran adoptar hijos, “pero
                <b>estoy absolutamente en contra de eso</b>”.
              </p>

              <p>
                Lo respeta pero está en contra. Respeta que otros piensen otra
                cosa pero la verdad verdadera es la suya. Mucho sentido todo...
              </p>
            </div>

            <div class="col55">
              <LayoutYearsVideo
                :src="src"
                cover="/img/2023_cover.png"
                aspect-ratio="16/9"
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

const year = 2023;

import src from "~/assets/video/2023.mp4";
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $violet;
}
</style>
