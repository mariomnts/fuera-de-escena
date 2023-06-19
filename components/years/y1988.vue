<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>Prohibido promover la <br />aceptación de la homosexualidad</h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3 start">
              <p>
                En 1988 llegaba la noticia desde Reino Unido de que Margaret
                Thatcher y su gobierno aprobaban la <b><i>Section 28</i></b
                >.
              </p>

              <p>
                Un poco de contexto: comenzó con el intento de retirar de las
                bibliotecas el libro
                <b><i>Jenny lives with Eric and Martin</i></b> (Jenny vive con
                Eric y Martin) que retrataba la vida de una niña con su padre y
                el novio de este.
                <b
                  >Querían retirarlo por promover la homosexualidad entre
                  niños</b
                >. Durante 1986 hubo manifestaciones de padres exigiendo que se
                retirara.
              </p>

              <p>
                El pánico a que se estuviera adoctrinando a niños sobre
                homosexualidad y la situación social hicieron que este año se
                aprobara esta norma.
              </p>
            </div>

            <div class="col4 center">
              <nuxt-img
                class="img0"
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/1988_0.png"
                alt="Portada del libro Jenny lives with Eric and Martin"
              />

              <figure>
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1988_1.png"
                  alt="Manifestación en contra de la Section 28"
                />
              </figure>
            </div>

            <div class="col3 end">
              <h2 class="small">
                La norma decía: “No se puede promocionar la aceptabilidad de la
                homosexualidad como una supuesta relación familiar en cualquier
                escuela subvencionada”.
              </h2>

              <p>
                Lo que eliminaba cualquier posibilidad de tener referentes
                diversos para muchos menores.
              </p>

              <p>
                Incluso grupos de apoyo para estudiantes LGTBIQ+ en escuelas y
                facultades en Gran Bretaña fueron cerrados por los consejeros
                por miedo a atentar contra la ley.
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

const year = 1988;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $orange;
}

.img0 {
  width: 55%;
  margin: 0 auto;
  display: block;
}

figure {
  margin-top: -15px !important;
}

@include bkYear {
  .body {
    justify-content: flex-start;
    .row {
      flex-direction: column;
    }
  }

  .center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .img0 {
      width: 33%;
    }

    figure {
      width: 48%;
    }
  }
}

@media (max-width: 500px) {
  .center {
    justify-content: space-between;
    .img0 {
      width: 36%;
    }

    figure {
      width: 57%;
    }
  }
}
</style>
