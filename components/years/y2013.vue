<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header header0">
          <h1>
            El obispo empeñado en <span class="circle-big">curar</span> <br />
            la homosexualidad
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4">
              <p>
                Reig Pla era el <b>obispo de Alcalá de Henares</b> y ya ocupaba
                titulares por intentar curar la homosexualidad.
              </p>

              <p>Este año dijo en una homilía:</p>

              <h2 class="small">
                “Piensan ya desde niño que
                <b>tienen atracción hacia las personas de su mismo sexo</b>. Y a
                veces para comprobarlo se corrompen y se prostituyen. O van a
                clubs de hombres nocturnos.
                <b>Os aseguro que encuentran el infierno</b>”
              </h2>
            </div>

            <div class="col55">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/FjGp6Fi1XOE"
                cover="/img/2013_cover.png"
                :start="158"
                aspect-ratio="16/9"
              />
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="header">
          <h1>
            El 12% cree que no se debe <br />
            integrar a gais en la sociedad
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                Una encuesta revela que el <b>88% de la población</b> considera
                que gais y lesbianas son personas que
                <b>deben estar integradas en la sociedad</b>.
              </p>

              <p>
                Aún así nos dice que también hay un
                <b>12% que creen lo contrario</b>.
              </p>

              <p>
                Si en 1975 una encuesta descubría que el <b>83%</b> considera
                que es necesario <b>hacer desaparecer la homosexualidad</b>,
                podemos ver avance en 38 años.
              </p>
            </div>

            <div class="col35">
              <nuxt-img
                src="/img/2013.svg"
                alt="Pegatinas LGTBIfobas encontradas en Chueca"
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

const year = 2013;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $blue;
}

.header0 {
  margin-bottom: -10px !important;
}
</style>
