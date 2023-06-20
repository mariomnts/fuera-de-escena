<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Catalogada como <span class="circle-big">perjudicial</span>
            <br />para la infancia en algunos países
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4">
              <p>
                Se estrena la serie <b><i>Heartstopper</i></b
                >, una adaptación de la novela gráfica, que nos muestra la
                relación de amor entre dos chicos con un enfoque positivo.
              </p>

              <p>
                Pero es triste ver cómo esta historia es tratada en algunos
                países como
                <b>Turquía</b> donde la
                <b>catalogan como perjudicial para la infancia</b>.
              </p>

              <p>
                Incluso en el distrito escolar del condado de Clay,
                <b>Florida, EE.UU. se ha prohibido su lectura</b> por su
                contenido LGTBIQ+.
              </p>
            </div>

            <div class="col3">
              <nuxt-img
                class="circle"
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/2022.png"
                alt="Librería de Turquía donde el libro está dentro de un sobre para que nadie pueda ver la portada"
              />

              <p class="small">
                En Turquía el libro se vende dentro de estos sobres que ocultan
                su portada porque lo consideran dañino para los niños por ser su
                personaje principal gay.
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:900px 1000px:1000px 1100px:1100px"
            src="/img/2022_1.png"
          />
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2022;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $violet;
}

.col3 {
  img {
    width: 70%;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
    border: 1px solid $primary;
  }
}

.footer {
  margin-top: -110px;

  img {
    padding-right: 25%;
    margin: 0 auto;
    max-width: 1500px;
  }
}

@media (max-width: 1200px) {
  .footer {
    margin-top: -50px;
  }
}

@include bkYearColumns {
  .col3 img {
    max-width: 240px !important;
  }

  p.small {
    max-width: 300px !important;
    margin: 20px auto !important;
  }

  .footer {
    margin-top: 0;

    img {
      padding: 0;
    }
  }
}

@media (max-width: 550px) {
  .footer {
    img {
      width: 130% !important;
      max-width: none !important;
      margin-left: -30%;
    }
  }
}
</style>
