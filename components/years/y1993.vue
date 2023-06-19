<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col4">
              <h1>El cáncer gay</h1>

              <p>
                La película <b><i>Philadelphia</i></b
                >, protagonizada por Tom Hanks, habla de la la
                <b>discriminación</b> en el trabajo por <b>ser homosexual</b> y
                <b>tener SIDA</b>.
              </p>

              <p>
                Durante el juicio por despido improcedente se ve cómo se
                <b>juzgaba</b> a la persona no solo por sus acciones, sino
                también por <b>su sexualidad</b> y por su enfermedad.
              </p>
            </div>

            <div class="col3">
              <figure class="outlined">
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1993_0.png"
                  alt="Cartel película Philadelphia"
                />
              </figure>
            </div>
          </div>

          <div class="row">
            <div class="col4">
              <nuxt-img
                src="/img/1993_1.svg"
                alt="Diarios mencionando el cáncer gay"
              />
            </div>

            <div class="col35">
              <div class="note">
                <p>
                  Cuando esta enfermedad apareció y no se sabía mucho sobre ella
                  <b>se conocía como GRID</b>, siglas de
                  <b>Gay-Related Immune Deficiency</b>. Se relacionaba
                  directamente con las personas gais y se conocía como el cáncer
                  gay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1993;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}

.row:first-of-type {
  margin-bottom: 20px;
}

@include bkYearColumns {
  .row:first-of-type {
    margin-bottom: 70px;
  }

  .note {
    max-width: 500px;
    width: 90%;
    margin: 40px auto;
  }
}
</style>
