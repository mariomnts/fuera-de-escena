<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>El cuarto oscuro del franquismo</h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4">
              <p>
                <b>Cierra el Cine Carretas</b> que fue refugio de relaciones
                homosexuales durante el franquismo. Fue el cine que vendió más
                localidades del país en más de una ocasión. Pero sus asistentes
                no iban a ver las películas <b>sino a buscar sexo ocasional.</b>
              </p>

              <p>
                Cuando los medios se hicieron eco de su cierre citaron vicio,
                público marginal, hombres de doble vida...
              </p>

              <h2>
                “El público marginal que lo frecuentaba en los últimos tiempos
                era, según los propios empleados, un importante porcentaje de
                homosexuales”
              </h2>

              <p>A lo mejor te suena porque Sabina le dedicó una canción.</p>
            </div>

            <div class="col5">
              <figure>
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1995_0.png"
                  alt="Fotograma de una película de Eloy de la Iglesia"
                />

                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1995_1.png"
                  alt="Fotograma de una película de Eloy de la Iglesia"
                />
              </figure>

              <p class="small">
                Fotograma de una película de Eloy de la Iglesia donde a la
                derecha se puede ver el cine.
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <img src="~/assets/decorations/eyes_rainbow.svg" alt="" />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1995;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}

figure {
  img:nth-child(2) {
    display: none;
  }

  &:hover {
    img:nth-child(1) {
      display: none;
    }

    img:nth-child(2) {
      display: inline-block;
    }
  }
}

.small {
  width: 90%;
  margin: 0 auto;
}

.footer {
  height: 90px;

  img {
    position: absolute;
    width: 180px !important;
    bottom: 60px;
    left: 5%;
  }
}

@include bkYearColumns {
  .body {
    margin-bottom: 40px !important;
  }

  .footer {
    height: auto !important;

    img {
      position: static !important;
      width: 30% !important;
      margin: 0 auto 30px !important;
    }
  }
}
</style>
