<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0
        ><div class="header">
          <h1>Eso <span class="circle-big">no es para ti</span></h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3 imgs">
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/2004_0.png"
                alt="Contenido clasificado para chicas y contenido para chicos"
              />
              <p>VS</p>
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/2004_1.png"
                alt="Contenido clasificado para chicas y contenido para chicos"
              />
            </div>

            <div class="col35">
              <p>
                En TV, música, revistas... se presentaban
                <b>medios para chicas y otros diferentes para chicos</b>.
              </p>

              <p>
                <b>Algunos muy populares</b> entre adolescentes esta época
                fueron las revistas <b>Bravo, Super Pop</b> o series como
                <b>Rebelde</b>, que se pensaban dirigidos únicamente a las
                chicas.
              </p>

              <p>
                Si consumías estos materiales porque te gustaba su contenido
                siendo chico había que escuchar:
              </p>

              <h2>“Pero si eso es de chicas...”</h2>

              <p>
                Lo mismo pasaba si eras chica y consumías contenido pensado
                exclusivamente para hombres. Si te pillaban viendo deporte,
                carreras, fútbol... <b>te llamaban marimacho como poco</b>.
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

const year = 2004;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}

.imgs {
  img {
    width: 100%;
    display: block;
  }

  p {
    font-family: "Thunder", serif;
    font-weight: bold;
    font-size: 3.5em;
    text-transform: uppercase;
    margin: 5px 0;
    letter-spacing: 1px;
    text-align: center;
  }
}
</style>
