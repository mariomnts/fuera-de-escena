<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsDecade title="Años 80" />

    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            La organización que montó <br />
            el primer orgullo, legalizada
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col45 rel">
              <figure>
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1980.png"
                  alt="Primera manifestación  del Orgullo en España"
                />
              </figure>
              <img
                class="float"
                src="~/assets/decorations/eyes_cloud.svg"
                alt=""
              />
            </div>

            <div class="col35">
              <p>
                En 1975, tras la muerte de Franco,
                <b>se fundó el Front d'Alliberament Gai de Catalunya</b> o FAGC,
                <b>una de las primeras organizaciones LGBTI+</b> que luchó
                contra la represión y los derechos del colectivo. En 1977
                organizó la <b>primera manifestación del Orgullo en España</b>,
                en Barcelona.
              </p>

              <p>
                Pero <b>no fue legalizada hasta el año 1980</b>. Hasta entonces,
                e incluso antes de la muerte del dictador, había actuado en la
                clandestinidad.
              </p>

              <p>Ya tocaba.</p>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1980;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}

.rel {
  position: relative;

  .float {
    position: absolute;
    top: 20%;
    left: 0;
    width: 70px;
  }
}

@include bkYearSlider {
  .rel .float {
    left: 0;
    width: 60px;
  }
}
</style>
