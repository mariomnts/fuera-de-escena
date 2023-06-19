<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col45">
              <figure>
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/1975_0.png"
                  alt="Manifestación"
                />
              </figure>

              <figure>
                <nuxt-img
                  src="/img/1975_1.png"
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  alt="Libro Lo nuestro sí que es mundial"
                />
              </figure>
            </div>

            <div class="col4 rfirst">
              <p>
                Ramón Martínez cuenta en su libro
                <i>Lo nuestro sí que es mundial</i>
                que el resultado en una encuesta de este año fue:
              </p>

              <h2>
                <span class="circle-big">El 83%</span> de la población considera
                que es necesario hacer desaparecer la homosexualidad.
              </h2>

              <p>
                Las <b>demás opciones del colectivo</b> ni se contemplan, solo
                se cita la homosexualidad. La herencia de la dictadura
                franquista fue dura.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #1>
        <div class="body body1">
          <div class="row">
            <div class="col4">
              <p>
                Cuando encontraron al director de cine
                <b>Pier Paolo Pasolini salvajemente asesinado en Roma</b>, en
                los medios se trató su homosexualidad como motivo y condena del
                cineasta.
              </p>

              <p>
                Parecía que <b>daban a entender que se lo merecía</b>. Siempre
                existió la sospecha de que este había sido un asesinato
                político. Se había convertido en un personaje muy incómodo para
                el poder y su cine tenía una <b>gran carga homosexual</b>.
              </p>
            </div>

            <div class="col4 top rfirst">
              <h1>
                Pasolini, <span class="circle-big">juzgado</span> tras ser
                asesinado
              </h1>
            </div>
          </div>
        </div>

        <div class="footer">
          <nuxt-img src="/img/1975_3.svg" alt="Pier Paolo Pasolini" />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1975;
</script>

<style lang="scss" scoped>
.footer {
  height: 30px;

  img {
    position: absolute;
    bottom: 0;
    right: 10%;
    max-width: min(470px, 40vw);
  }
}

.top {
  align-self: flex-start;

  h1 {
    padding-bottom: 200px;
  }
}

.year,
.year :deep(header h2) {
  background: $red;
}

@include bkYearColumns {
  .top {
    h1 {
      padding-bottom: 0;
    }
  }

  .body1 {
    margin-bottom: 40px !important;
  }

  .footer {
    height: auto !important;

    img {
      position: static !important;
      max-width: 400px !important;
      margin: 0 auto !important;
    }
  }
}
</style>
