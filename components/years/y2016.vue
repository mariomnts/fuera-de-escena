<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col35">
              <div class="rel">
                <figure class="outlined">
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2016.png"
                    alt="Portada del libro Llámame Paula de Concepción Rodríguez"
                  />
                </figure>

                <img
                  class="float"
                  src="~/assets/decorations/sparkle.svg"
                  alt=""
                />
              </div>
            </div>

            <div class="col45 rfirst">
              <h1>
                No hay literatura <span class="circle-big">trans</span> <br />
                para adolescentes
              </h1>

              <p>
                Concepción Rodríguez, leyó en una noticia que
                <b>un colegio</b> concertado de Málaga
                <b>no permitía que una niña trans usara los baños</b> y
                <b>vistiera el uniforme</b> que correspondían a su género.
              </p>

              <p>
                Maestra de profesión, empezó a buscar libros que explicaran la
                transexualidad a adolescentes. Pero no encontró nada.
              </p>

              <p>
                Así que
                <b>ella misma escribió la primera novela trans</b> juvenil
                publicada en España donde la protagonista es una niña
                transexual: <b><i>Llámame Paula</i></b
                >.
              </p>

              <p>Es fuerte que hasta entonces no hubiera nada.</p>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2016;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

.rel {
  position: relative;

  .float {
    position: absolute;
    bottom: 15%;
    left: -25px;
    width: 65px;
  }
}

@include bkYearColumns {
  .body {
    padding-bottom: 40px;
  }
}

@include bkYearSlider {
  .rel .float {
    bottom: 10%;
    left: -3%;
    width: 60px;
  }
}
</style>
