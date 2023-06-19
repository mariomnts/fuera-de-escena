<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Manos a la obra <br />
            y las gracias sin gracia
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col55">
              <p class="pad">
                Acaba la serie <i>Manos a la obra</i> <b>(Manolo y Benito)</b>.
                En un capítulo van a la peluquería donde Manolo es atendido por
                un peluquero gay (lo notamos en su evidente pluma), con quien el
                albañil trata de mantener la máxima distancia posible.
              </p>

              <nuxt-img
                src="/img/2001.svg"
                alt="Fotograma de la serie Manos a la obra"
              />
            </div>

            <div class="col3">
              <p>
                <b>“Relájate y disfruta”</b>, le dice el peluquero, dando a
                entender que los gais se interesan en todos los hombres, y a
                quien Manolo intenta persuadir antes de salir del local casi
                huyendo.
              </p>

              <p>
                Estas escenas cómicas con
                <b
                  >burlas de miembros del colectivo LGBTI+ eran bastante
                  frecuentes</b
                >. Estaban llenas de tópicos infundados, además de mostrar como
                comedia ese rechazo sistemático.
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

const year = 2001;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}

.row {
  align-items: flex-start !important;
}

.pad {
  padding: 0 10px 20px 140px;
}

@include bkYearColumns {
  .pad {
    padding: 0;
  }
}
</style>
