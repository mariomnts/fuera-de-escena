<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col5">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/qE0ewTXiPc0"
                :start="158"
                cover="/img/1976_cover.png"
                aspect-ratio="4/3"
              />
            </div>

            <div class="col4 rfirst">
              <h1>“Si no te curo, te mato”</h1>

              <p>
                En la película <i>Cambio de sexo</i>,
                <b
                  >el padre de una chica trans intenta <i>curarle</i> por todos
                  los medios</b
                >
                y desvirgarle con una mujer. Hasta que ella no aguanta más y
                huye de casa. Incluso trata de cortarse el pene.
              </p>

              <p>
                Basada en una historia real, nos habla de la
                <b
                  >falta de apoyos y el peligro del desconocimiento de la
                  época</b
                >.
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
            src="/img/1976.png"
            alt="Fotograma película Cambio de sexo"
          />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1976;
</script>

<style lang="scss" scoped>
.footer {
  height: 150px;

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: min(350px, 40vw);
    pointer-events: none;
  }
}

.year,
.year :deep(header h2) {
  background: $red;
}
</style>
