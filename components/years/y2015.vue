<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col4">
              <p>
                El día de Navidad amanecimos con la noticia de que
                <b>Alan, un adolescente trans</b> de 17 años, se
                <b>suicidaba tras años de sufrir acoso escolar</b>.
              </p>

              <p>
                Su madre quiso dar voz a su historia para denunciar que no era
                un suicidio sino un asesinato social.
              </p>

              <h2 class="small">
                “Le hicieron la vida imposible. Hemos sabido que le daban
                porrazos contra la pared, le tiraron por las escaleras, le
                decían que tenía barriga de mujer y no músculos de hombre, le
                levantaban la camiseta, le empujaban contra el cristal...”
              </h2>
            </div>

            <div class="col5 rfirst">
              <h1>
                No fue sucicio. <br />
                Fue <span class="circle-big">asesinato social</span>
              </h1>

              <div class="rel">
                <figure>
                  <nuxt-img
                    format="webp"
                    sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                    src="/img/2015.png"
                  />
                </figure>

                <img class="float" src="~/assets/decorations/star.svg" alt="" />
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

const year = 2015;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

h1 {
  width: 80%;
  margin: 0 auto !important;
}

.rel {
  position: relative;

  .float {
    position: absolute;
    bottom: -20px;
    right: 0;
    width: 50px;
  }
}

@include bkYearSlider {
  .rel .float {
    display: none;
  }
}
</style>
