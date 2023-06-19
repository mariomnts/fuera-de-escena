<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col4">
              <figure class="outlined">
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1982.png"
                  alt="Cartel del documental Vestida de azul"
                />

                <nuxt-img class="float" src="/img/1982_1.svg" />
              </figure>
            </div>

            <div class="col4 rfirst">
              <h3>Vestida de azul</h3>

              <p>
                Durante este año se estuvo grabando este documental que contenía
                <b>testimonios reales de seis mujeres trans</b> retratadas
                mediante entrevistas.
              </p>

              <p>Podemos ver cómo viven y cuál es su historia.</p>

              <p>La <b>frase</b> presente <b>en el cartel</b> dice:</p>

              <h1>
                No es un hombre<br />
                No es una mujer<br />
                Es una muñeca...
              </h1>
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1982;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}

figure {
  position: relative;

  img.float {
    position: absolute;
    top: 25%;
    left: -30%;
    width: 75%;
  }
}

@include bkYearColumns {
  .body {
    padding-bottom: 40px;
  }

  h1 {
    text-align: center;
  }

  img.float {
    display: none;
  }
}
</style>
