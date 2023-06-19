<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Los heterosexuales <br />
            también se
            <span class="circle-big">travisten</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                En <i>La clave</i> se trató el tema de los homosexuales durante
                un coloquio hablando con opiniones diferentes y con respeto.
              </p>

              <p>
                Como era costumbre, <b>la homosexualidad</b> era, por desgracia,
                la <b>única parte del colectivo</b> a la que se le daba
                <b>visibilidad</b>.
              </p>

              <p>
                También comentan cómo los hombres femeninos o travestis no son
                representativos al 100% de los homosexuales,
                <b>habiendo muchos que no son femeninos</b> y muchos hombres
                heterosexuales que también han experimentado el travestismo.
              </p>
            </div>

            <div class="col6">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/gpnykXkPplI"
                cover="/img/1983_cover.png"
                :start="90"
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

const year = 1983;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}

.header h1 {
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    display: block;
    background: url(~/assets/decorations/eyes_cloud_left.svg) no-repeat center;
    background-size: contain;
    top: 25%;
    right: -20%;
    width: 70px;
    height: 70px;
    z-index: 5;
  }
}

@include bkYearSlider {
  .header h1::after {
    display: none !important;
  }
}
</style>
