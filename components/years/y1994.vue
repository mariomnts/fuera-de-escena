<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Stop <span class="circle-big">maricones</span> <br />
            en el vestuario
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col35">
              <p>
                El que fue alcalde de Marbella y empresario, <b>Jesús Gil</b>,
                era por aquel entonces presidente del Atlético de Madrid.
              </p>

              <p>En una entrevista ese año dijo:</p>

              <h2>
                “Iba a fichar a un jugador importante y me he enterado de que es
                maricón”
              </h2>

              <p>
                Y además añadió “a ese no lo meto yo en el vestuario. Me he
                quedado helado. Sólo faltaba que dijeran: ese tiene a uno de
                esos ahí”.
              </p>

              <p>Lo normal era presumir de homofobia y no de orgullo.</p>
            </div>

            <div class="col5">
              <nuxt-img
                src="/img/1994.svg"
                alt="Jesús Gil en el jacuzzi hablando por teléfono"
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

const year = 1994;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}
</style>
