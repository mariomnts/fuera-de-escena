<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsDecade title="Años 20 del siglo XXI" />

    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Imagínate qué trauma tener <br />
            un hermano <span class="circle-big">maricón</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3 start">
              <p>
                Tras estrenar la serie <b><i>Veneno</i></b
                >, se volvió a hablar de Cristina. En el programa
                <b><i>Viva la vida</i> intervino su hermana</b>
                que dijo:
              </p>

              <h2 class="small">
                “Al fin y al cabo hemos sufrido mucho, no solo Cristina. Yo
                tengo 48 años y necesito ir, a día de hoy, a psicólogos para
                superar los traumas que yo he vivido”
              </h2>
            </div>

            <div class="col3 center">
              <figure class="outlined">
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/2020.png"
                  alt="Poster de la serie Veneno"
                />
              </figure>
            </div>

            <div class="col3 end">
              <h2 class="small">
                “Sufro desde que soy adolescente. Imagínate viviendo en un
                pueblo con un hermano que era maricón... y no te digo ya cuando
                después vino lo de <i>La Veneno</i>...”
              </h2>

              <p>Pues imagínate lo que tuvo que soportar ella toda su vida.</p>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2020;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $violet;
}

.start {
  align-self: flex-start;
}

.center {
  padding: 25px 0;
}

.end {
  align-self: flex-end;
}

@include bkYear {
  .body {
    justify-content: flex-start;
    .row {
      flex-direction: column;
    }
  }

  figure {
    max-width: min(100%, 350px) !important;
  }
}
</style>
