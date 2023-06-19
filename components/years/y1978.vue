<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col4">
              <figure class="outlined">
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1978_0.png"
                />
              </figure>
            </div>

            <div class="col4 rfirst">
              <h1>
                El artista Ocaña es
                <span class="circle-big">detenido</span>
              </h1>

              <p>
                El 24 de julio de 1978 el artista Ocaña acude travestido a la
                Verbena de San Jaime de Barcelona vestido de “vieja
                cantillanera” junto a su amigo Nazario, ataviado de flamenca.
              </p>

              <p>
                Ambos son <b>detenidos, agredidos y encarcelados</b> por
                manifestar públicamente así su <b>homosexualidad</b>.
              </p>

              <p>
                Artista y activista, Ocaña fue un icono de resistencia en la
                dictadura franquista.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="body">
          <div class="row">
            <div class="col4">
              <nuxt-img src="/img/1978_1.svg" />
            </div>

            <div class="col5 rfirst">
              <h1>
                La revista
                <span class="circle-big">Party</span>
              </h1>

              <p>
                Tras el franquismo, <b>la revista <i>Party</i></b> fue una de
                las primeras en enfocarse a un público LGTBIQ+.
              </p>

              <p>Un día pudimos leer esto en uno de sus números:</p>

              <h2>
                “A mí me parecería muy positivo que las travestis imitaran a la
                mujer moderna, liberada. Sin embargo
                <b>el travesti erige en modelo la mujer objeto</b>, de mujer
                supermaquillada que no tiene otra misión que agradar al macho”.
              </h2>

              <p>
                Ese discurso sobre las travestis ya se nos hace un tanto pesado,
                se ve que se repite desde los 70.
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

const year = 1978;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $red;
}
</style>
