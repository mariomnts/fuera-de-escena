<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            Homosexuales bien. <br />
            <span class="circle-big">Trans</span> no tanto...
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col6">
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/2006.png"
                alt="Personajes de la serie Aquí no hay quien viva"
              />
            </div>

            <div class="col3">
              <p>
                Aunque la serie <i>Aquí no hay quien viva</i> es de las primeras
                en tratar a personajes homosexuales (<b>Bea y Mauri</b>) con
                respeto, <b>Raquel, la chica trans</b>, no corre la misma
                suerte. Todos hablan de ella en masculino y diciendo cosas como:
                <b>“en realidad es un tío”</b> o los típicos chistes rancios
                sobre si meará de pie o sentada. Incluso Emilio rompe con ella
                solo por su identidad.
              </p>

              <p>
                En la última temporada <b>Bea</b> dice que
                <b>no quiere que su hijo sea gay para que no sufra</b> y que no
                quiere que su padre se lo pegue. Ahí se ven los prejuicios que
                también hay dentro del colectivo. Aún siendo homosexual prefiere
                que su hijo sea heterosexual.
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

const year = 2006;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}

.header {
  margin-bottom: -30px !important;
}
</style>
