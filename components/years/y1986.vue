<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col4">
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/1986.png"
                alt="Extractos de cómics con Anarcoma"
              />
            </div>

            <div class="col4 rfirst">
              <h1>
                Anarcoma, el cómic sobre una
                <span class="circle-big">travesti</span>
              </h1>

              <p>
                <b><i>Anarcoma</i></b> es un personaje de cómic creado por
                Nazario. Apareció por primera vez a principios de los 80 y
                alcanzó su mayor fama en la revista <i>El víbora</i>, revista de
                público heterosexual. Y aunque las historias de Nazario eran
                abiertamente <b>homosexuales</b>, canallas e incluían
                pornografía, a los lectores pareció gustarles.
              </p>

              <p>
                Trata de una <b>travesti que se prostituye</b> en Las Ramblas.
                Su autor nos muestra la Barcelona más oculta de los 70 y 80. El
                público mayoritario no estaba acostumbrado a estas historias.
              </p>

              <p>
                La segunda parte del cómic se sigue publicando en 1986 a pesar
                de mostrar un explícito sexo homosexual, algo tan disruptivo
                para la época.
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

const year = 1986;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}
</style>
