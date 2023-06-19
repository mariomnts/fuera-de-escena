<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="body">
          <div class="row">
            <div class="col4">
              <nuxt-img src="/img/2002.svg" alt="Portada de la revista Zero" />
            </div>

            <div class="col35">
              <p>
                Sorprendió a muchos ver en los kioskos una figura desconocida
                siendo portada de la revista <i>Zero</i> portando un
                alzacuellos. Y más sorprendió el titular que lo acompañaba:
              </p>

              <h2>“Doy gracias a Dios por ser gay”</h2>

              <p>
                José Mantero fue
                <b
                  >el primer miembro del clero español en hablar públicamente de
                  su homosexualidad</b
                >. Criticó la doble moral de la iglesia católica y dijo que “Los
                gais no somos máquinas defectuosas”.
              </p>

              <p>
                Pero días después la respuesta del Obispado de la Diócesis de
                Huelva fue contundente: <b>le dejaron sin su parroquia</b>, es
                decir, sin empleo ni sueldo.
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

const year = 2002;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}
</style>
