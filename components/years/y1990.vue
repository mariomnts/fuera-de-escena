<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsDecade title="Años 90" />

    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            “Es una <span class="circle-big">desgracia</span> que dios nos manda
            <br />
            y nos tenemos que conformar”
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col5">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/LAvlt-yMVT0"
                cover="/img/1990_cover.png"
                aspect-ratio="4/3"
                :start="686"
              />

              <div class="note">
                <p>
                  Hasta entonces la
                  <span class="circle-big">OMS</span> consideraba la
                  homosexualidad como una enfermedad mental.
                </p>

                <p>Piensa que solo hace unos 30 años.</p>
              </div>
            </div>

            <div class="col3 rfirst">
              <p>
                En el programa <i>Hablemos de sexo</i> se planteaban qué pasa
                <b>al tener un hijo homosexual</b>. Aunque algunos se mostraban
                proclives a “comprender” y apoyarles, alguno de los
                entrevistados aseguró incluso que
                <b>“probablemente lo pondría en tratamiento médico”</b>.
              </p>

              <p>
                “Es una desgracia que Dios nos manda y nos tenemos que
                conformar”, declaraba otra mujer.
              </p>

              <p>
                <b>“Lo comprendería, pero no lo admitiría”</b>. Esa última
                incluso nos deja un poco confusos...
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

const year = 1990;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}

.note {
  width: 70%;
  margin: 40px auto 0 5%;
}

@include bkYearColumns {
  .note {
    max-width: 500px;
    width: 90%;
    margin: 40px auto;
  }
}
</style>
