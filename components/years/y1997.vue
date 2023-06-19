<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>Juan Mesa VS <span class="circle-big">el contagio</span></h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col4">
              <p>
                <b>Juan Mesa</b>, legionario que coincidió con dos personas
                trans (una de ellas <b>La Veneno</b>) en
                <i>Esta noche cruzamos el Mississippi</i>, nada más ser
                presentado en plató soltó:
              </p>

              <h2>“Un poco más lejos por favor, se me puede pegar algo”</h2>

              <p>
                Podemos ver que ellas, por desgracia, incluso estaban
                <b>acostumbradas a ese rechazo tan mordaz y evidente</b>. Ser
                trans no es contagioso, la transfobia sí.
              </p>
            </div>

            <div class="col6">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/7LWCt3Oo94U"
                cover="/img/1997_cover.png"
                :start="20"
                aspect-ratio="16/9"
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

const year = 1997;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $yellow;
}
</style>
