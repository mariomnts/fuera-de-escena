<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsDecade title="Cambio de siglo" />

    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col4">
              <div class="note">
                <p>
                  Cambio de siglo: hasta entonces no había habido besos
                  homosexuales en series de ficción de TV.
                </p>

                <p>
                  Se venía de una dictadura y transición durante las que se
                  criminalizaba a las personas LGTBIQ+. Aunque leyes y medios
                  cambiaran, la LGTBIQfobia seguía presente en el pueblo y había
                  mucha ignorancia sobre el tema.
                </p>
              </div>

              <figure>
                <nuxt-img
                  format="webp"
                  sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                  src="/img/2000.png"
                  alt="Fotograma de Al salir de clase con el beso entre Santi y Ruben"
                />
              </figure>
            </div>

            <div class="col3 rfirst">
              <h1>El primer <span class="circle-big">beso gay</span> en TV</h1>

              <p>
                El primer beso gay de una serie española fue en
                <i>Al salir de clase</i> entre Santi y Rubén (Alejo Sauras y
                Bernabé Fernández).
              </p>

              <p>
                Interpretar este papel casi le cuesta <b>una paliza</b> al actor
                Alejo Saura. El 20 de noviembre estaba en un bar y
                <b>le esperaban unas 20 o 25 personas fuera para pegarle</b>.
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

const year = 2000;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}

figure {
  width: 100% !important;
}

.note {
  margin: 0 0 40px auto;
  width: 83%;
}

@include bkYearColumns {
  .note {
    max-width: 500px;
    width: 90%;
    margin: 0 auto 40px;
  }
}
</style>
