<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            “Aquí, <span class="circle-big">Marica</span> el último”<br />
            <span class="small"
              >Pablo Motos escucha esto pero... no hace nada</span
            >
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col5">
              <LayoutYearsVideo
                :src="src0"
                cover="/img/2023_cover_0.png"
                aspect-ratio="16/9"
              />
            </div>

            <div class="col35 rfirst">
              <p>
                <b>Pablo Motos</b> preguntó en el ya polémico
                <i>El hormiguero</i> al <b>motorista Jorge Martín</b> qué tal
                era llevarse bien con sus compañeros de profesión y a la vez
                competir con ellos. A lo que este respondía “En pista voy a
                tope. Y, o te quitas, o te quito, como decía Marc Márquez. Yo
                quiero ser respetuoso, porque nos estamos jugando la vida, y
                puede ser muy peligroso, <b>pero, aquí, marica el último</b>”.
              </p>

              <p>
                El terrible gusto del comentario
                <b>fue omitido por el presentador</b>. Por suerte el público,
                indignado, no lo dejó pasar en redes.
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <nuxt-img
            format="webp"
            sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
            src="/img/2023_0.png"
          />
        </div>
      </template>

      <template #1>
        <div class="header">
          <h1>
            Respeto que exista... pero <br />
            <span class="circle-big">estoy en contra</span>
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                La periodista <b>Paloma Cervilla</b> dice en televisión: “La
                familia es padre, madre e hijos. Y lo digo sin complejos y
                ningún miedo a que me digan nada, lo tengo clarísimo. Y
                <b
                  >que un niño tenga dos padres me parece hacerle un daño
                  tremendo</b
                >”, aseguró.
              </p>

              <p>
                La tertuliana remató su intervención asegurando que “respeta”
                que haya homosexuales que quieran adoptar hijos, “pero
                <b>estoy absolutamente en contra de eso</b>”.
              </p>

              <p>
                Lo respeta pero está en contra. Respeta que otros piensen otra
                cosa pero la verdad verdadera es la suya. Mucho sentido todo...
              </p>
            </div>

            <div class="col55">
              <LayoutYearsVideo
                :src="src1"
                cover="/img/2023_cover_1.png"
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

const year = 2023;

import src0 from "~/assets/video/2023_0.mp4";
import src1 from "~/assets/video/2023_1.mp4";
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $violet;
}

.small {
  font-size: 0.75em;
}

.footer {
  height: 100px;

  img {
    position: absolute;
    bottom: 0;
    left: 3%;
    max-width: min(550px, 43vw);
    pointer-events: none;
  }
}

@media (max-width: 700px) {
  .footer img {
    left: 1%;
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
