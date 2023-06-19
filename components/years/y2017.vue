<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                La fundación <b><i>Hazte oír</i></b> sacó a la calle un autobús
                que se paseó durante semanas por las calles de España con este
                mensaje en uno de sus laterales:
              </p>

              <h2>
                Los niños tienen pene. <br />
                Las niñas tienen vulva. <br />
                Que no te engañen. <br />
                Si naces hombre, eres hombre. Si eres mujer, seguirás siéndolo.
              </h2>

              <p>La transfobia, ahora sobre ruedas.</p>
            </div>

            <div class="col5 rfirst">
              <h1 class="cloud">
                El autobús tránsfobo <br />
                de Hazte Oír
              </h1>

              <nuxt-img
                src="/img/2017.svg"
                alt="Autobus de Hazte Oír con el mensaje tránsfobo"
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

const year = 2017;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

h1 {
  text-align: center;
  margin-bottom: 80px !important;
  padding: 38px 0 !important;
}

@include bkYearColumns {
  h1 {
    margin-bottom: 0 !important;
  }
}
</style>
