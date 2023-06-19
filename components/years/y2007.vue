<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col35">
              <p>
                En la novena edición del reality <b><i>Gran Hermano</i></b
                >, <b>Amor Romeira</b>
                sufrió transfobia en la casa.
              </p>

              <p>
                Protagonizó <b>varios enfrentamientos</b> con su compañero
                Andalla Mbengue por varios comentarios irrespetuosos que el
                concursante soltó contra el colectivo LGBTI+.
              </p>
            </div>

            <div class="col4 rfirst">
              <h1>
                <span class="circle-big">Transfobia</span> en la casa <br />
                de Gran Hermano
              </h1>
            </div>
          </div>

          <div class="row">
            <div class="col45">
              <div class="rel">
                <figure>
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2007.png"
                    alt="Momento donde un concursante dice 'si tiene más barba que yo'"
                  />
                </figure>

                <img
                  class="float"
                  src="~/assets/decorations/eyes_cloud.svg"
                  alt=""
                />
              </div>
            </div>

            <div class="col35">
              <p>
                De hecho unos años después Desi tuvo que sufrir los mismos
                comentarios en la casa. Incluso por no tener vagina sino pene
                tuvo que escuchar:
              </p>

              <h2>“No es transexual, es transformista”</h2>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2007;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}

.row {
  margin: 20px auto;
}

.rel {
  position: relative;

  .float {
    position: absolute;
    bottom: 15%;
    left: -8%;
    width: 80px;
  }
}

figure {
  img {
    width: 100% !important;
  }
}

@include bkYearSlider {
  .rel .float {
    left: 0;
    width: 60px;
  }
}
</style>
