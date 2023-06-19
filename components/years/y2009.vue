<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Síndrome de la <span class="circle-big">lesbiana muerta</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                Pepa y Silvia eran la <b>pareja lésbica</b> de la serie
                <b><i>Los hombres de Paco</i></b
                >. Si tenemos en cuenta que había representación del colectivo y
                además de mujeres, todo va bien. Pero una de ellas muere
                asesinada el mismo día de su boda.
              </p>

              <p>
                Algo bastante retorcido y que responde al
                <b>síndrome de la lesbiana muerta</b>. O sea: acabar
                violentamente con el personaje lésbico y dejarla sin posibilidad
                de final feliz. Algo que curiosamente pasa mucho en ficción,
                como en Poussey en <i>Orange is the new black</i>, Lexa en
                <i>The 100</i> o Martha Dobie en <i>La calumnia</i>.
              </p>
            </div>

            <div class="col35">
              <nuxt-img
                src="/img/2009.svg"
                alt="Fotograma de la serie Los hombres de Paco de la boda de Pepa y Silvia"
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

const year = 2009;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}

.row {
  justify-content: center !important;
  gap: 70px !important;
}

@include bkYearColumns {
  .body .row {
    gap: 10px !important;
  }

  .body {
    margin-bottom: 40px !important;
  }

  img {
    max-width: min(100%, 275px) !important;
  }
}
</style>
