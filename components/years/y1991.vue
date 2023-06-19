<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Divine inspiró a <span class="circle-big">la villana</span> de La
            sirenita
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col35">
              <p>
                <b><i>La sirenita</i></b> tardó en llegar a España y no se
                estrenó hasta finales de diciembre de 1990. Así que en 1991,
                además de a la sirena, conocimos a Úrsula,
                <b>la villana de la película</b>.
              </p>

              <p>
                El quid de la cuestión viene ahora:
                <b>Úrsula estaba inspirada en Divine, la famosa drag queen</b>
                icono LGTBIQ+.
              </p>
            </div>

            <div class="col35">
              <p>
                De hecho, existe la teoría de que
                <b>Disney peca de haber aplicado el <i>queer coding</i></b> en
                sus películas.
              </p>

              <div class="note">
                <p>
                  El <b><i>queer coding</i></b> consiste en dar a sus villanos
                  características que se detectan como queer por la audiencia.
                </p>

                <p>
                  Ejemplos: los villanos suelen poseer un amaneramiento
                  diferente al de los héroes,visten túnicas y vestidos largos en
                  muchas ocasiones, muestran delgadez, tienen ojos pintados...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
            src="/img/1991_0.png"
          />
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
            src="/img/1991_1.png"
          />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 1991;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}

.row {
  align-items: flex-start !important;
}

.note {
  margin-top: 45px;
  width: 95%;
}

.footer {
  height: 150px;

  img {
    position: absolute;
    bottom: 0;

    &:first-of-type {
      left: 0;
      max-width: min(535px, 40vw);
    }

    &:last-of-type {
      right: 4%;
      max-width: min(300px, 18vw);
    }
  }
}

@include bkYearColumns {
  .row {
    gap: 0px !important;

    & > div:last-of-type {
      & > p:first-of-type {
        margin-top: 0 !important;
      }
    }
  }

  .footer {
    height: 200px;
  }
}

@include bkYearSlider {
  .footer {
    height: auto !important;
    justify-content: space-between;
    align-items: flex-end;
    display: flex;

    img {
      position: static !important;

      &:first-of-type {
        margin-left: -5%;
        max-width: 43vw !important;
      }

      &:last-of-type {
        max-width: 23vw !important;
      }
    }
  }
}

@media (max-width: 500px) {
  .body {
    margin-bottom: 40px !important;
  }

  .footer {
    display: none;
  }
}
</style>
