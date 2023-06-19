<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col4">
              <h2>
                “Yo les juro que intenté mirarla a los ojos pero con Bibi ocurre
                como con las sirenas: todo va bien hasta que descubres que
                tienen <span class="circle-big">cola</span>”
              </h2>

              <p>
                Esto lo dijo <b>Alfredo Amestoy</b>, presentador de
                <i>300 millones</i>, un programa de televisión,
                <b>hablando de Bibiana Fernández</b> sin ninguna muestra de
                tacto. Este programa se emitía desde España vía satélite a más
                de quince países.
              </p>

              <p>El chiste es tremendo. <b>La transfobia también</b>.</p>
            </div>

            <div class="col6">
              <LayoutYearsYtvideo
                src="https://www.youtube.com/embed/MilXw1SucGk"
                cover="/img/1977_cover.png"
                :start="52"
                aspect-ratio="4/3"
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

const year = 1977;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $red;
}
</style>
