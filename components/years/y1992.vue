<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header header0">
          <h1>
            Las mujeres bisexuales <br />
            y lesbianas, <span class="circle-big">retorcidas</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4">
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/1992_0.png"
                alt="Fotograma de la película Instinto básico"
              />
            </div>

            <div class="col3">
              <p>
                Puede que no hayas visto la película
                <b><i>Instinto básico</i></b> pero seguro que te suena su cruce
                de piernas.
              </p>

              <p>
                Lo que quizá no sepas es que en el momento de su estreno la
                película estuvo rodeada de polémica. La protagonista es
                <b>bisexual</b>, y para un personaje LGTBIQ+ protagonista que
                hay en el cine, resultó ser frío y despiadado...
              </p>

              <p>
                Muchas veces se caía en el tópico de
                <b
                  >representar a las mujeres lesbianas y bisexuales como
                  retorcidas</b
                >. Grupos de activistas intentaron boicotearla.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="header header1">
          <h1>Farmacia de guardia, abriendo camino</h1>
        </div>

        <div class="body body1">
          <div class="row">
            <div class="col5 rel">
              <figure>
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1992_1.png"
                  alt="Fotograma de la serie Farmacia de guardia"
                />
              </figure>

              <nuxt-img class="float" src="/img/1992_2.svg" />
            </div>

            <div class="col4">
              <p>
                En este año se emitió el episodio de
                <b><i>Farmacia de guardia</i></b> de Televisión Española, donde
                Fernando Telletxea interpreta a Clara,
                <b>uno de los primeros personajes trans</b> en una serie de la
                televisión pública.
              </p>

              <p>
                Hasta entonces la <b>visibilidad trans</b> solo se había
                producido en cine y en películas de bajo presupuesto. Esta vez
                se trataba de una serie muy querida por el público y con mucha
                audiencia.
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

const year = 1992;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}

.header0 {
  margin-bottom: -50px !important;

  h1 {
    transform: translateX(-10%);
  }
}

.header1 {
  margin-bottom: 0;
}

.body1 {
  flex: 0 !important;
}

.rel {
  position: relative;

  img.float {
    position: absolute;
    width: 140px;
    bottom: -10%;
    right: 15%;
  }
}

@include bkYearColumns {
  .header0 {
    h1 {
      transform: none !important;
      margin-bottom: 30px;
    }
  }
}

@include bkYearSlider {
  .rel .float {
    width: 100px !important;
  }
}
</style>
