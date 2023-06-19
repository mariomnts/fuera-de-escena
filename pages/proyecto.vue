<template>
  <div>
    <div class="back">
      <LayoutNavbar />

      <section class="row project">
        <div class="col">
          <div>
            <h1>
              El proyecto
              <img src="~/assets/decorations/sparkle.svg" alt="" />
            </h1>

            <p>
              En marzo de 2023 vimos lo que El Lab de RTVE hizo con su proyecto
              <a
                href="https://lab.rtve.es/8m-machismo-adolescencia/"
                target="_blank"
                ><b>8M, el machismo en tu adolescencia</b></a
              >
              y nos pareció muy interesante. <b>Recuperar referentes</b> nos
              permite entender de dónde venimos y por qué muchas cosas son como
              son ahora.
            </p>

            <p>
              Vimos que era extrapolable a la LGTBIQfobia, así nace
              <b><i>Fuera de Escena</i></b
              >, proyecto web que se propone retratar el rechazo en medios hacia
              el colectivo durante décadas.
            </p>

            <p>
              No solo los <b>referentes negativos</b> nos perjudican, también lo
              hace la <b>poca representación</b> ya que nos excluye.
            </p>

            <p>
              Es importante recordar que las facilidades que disfrutamos a día
              de hoy no siempre las hemos tenido. Aún queda camino por recorrer.
            </p>
          </div>
        </div>

        <div class="col">
          <div class="img">
            <nuxt-img
              format="webp"
              sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
              src="/img/project.png"
            />
          </div>
        </div>
      </section>

      <section class="team">
        <div>
          <img
            class="float"
            src="~/assets/decorations/team.svg"
            alt="El equipo"
          />

          <article>
            <span>Diseño y documentación</span>
            <span>Ignacio Incera</span>
            <div class="buttons">
              <a
                href="https://www.tiktok.com/@ignacioincera"
                target="_blank"
                class="social"
              >
                <img src="~/assets/icons/tiktok.svg" alt="TikTok" />
              </a>

              <a
                href="https://www.instagram.com/ignacioincera"
                target="_blank"
                class="social"
              >
                <img src="~/assets/icons/ig.svg" alt="Instagram" />
              </a>

              <a
                href="https://twitter.com/ignacioincera"
                target="_blank"
                class="social"
              >
                <img src="~/assets/icons/tw.svg" alt="Twitter" />
              </a>
            </div>
          </article>

          <article>
            <span>Desarollo web</span>
            <span>Mario Montes</span>
            <div class="buttons">
              <a
                href="https://www.linkedin.com/in/mariomnts"
                target="_blank"
                class="social"
              >
                <img src="~/assets/icons/ld.svg" alt="Linkedin" />
              </a>

              <a
                href="https://www.instagram.com/mariomnts"
                target="_blank"
                class="social"
              >
                <img src="~/assets/icons/ig.svg" alt="Instagram" />
              </a>

              <a
                href="https://twitter.com/mariomnts"
                target="_blank"
                class="social"
              >
                <img src="~/assets/icons/tw.svg" alt="Twitter" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="row details">
        <div class="col">
          <div class="img">
            <nuxt-img
              format="webp"
              sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
              src="/img/project_1975.png"
            />
          </div>
        </div>

        <div class="col">
          <div>
            <h2>
              ¿Por qué empezamos en
              <span class="circle-big">1975</span> ?
            </h2>

            <p>Es el año de la <b>muerte del dictador Franco</b>.</p>

            <p>
              Hasta entonces, los miembros del colectivo LGTBI+
              <b>no tenían apenas representación</b> en los medios en España. Y
              en la poca que tenían eran presentados como
              <b>delincuentes y miembros marginales</b> de la sociedad. Además,
              en la mayoría de casos, solo se hablaba de hombres homosexuales
              sin mencionar otras realidades.
            </p>

            <p>
              Es a partir de 1975 cuando comienza
              <b>la democracia, y con ella la posibilidad del cambio</b>.
            </p>

            <img class="star" src="~/assets/decorations/star.svg" alt="" />
          </div>
        </div>
      </section>
    </div>

    <div class="back">
      <section class="another">
        <div>
          <h3>Introduce tu año de nacimiento</h3>

          <LayoutYearSelector />
        </div>
      </section>
    </div>

    <LayoutFooter />
  </div>
</template>

<script setup>
useHead({
  title: `El proyecto | FUERA DE ESCENA 🏳️‍🌈`,
});
</script>

<style lang="scss" scoped>
.back {
  width: 100%;
  position: relative;
  color: $primary;
  background: url("~/assets/back/framed.svg") no-repeat top center;
  background-size: cover;

  &:first-of-type {
    padding-top: 75px;
  }
}

.row {
  display: flex;

  .col {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 60px;

    & > div {
      max-width: 440px;
    }

    &:first-of-type {
      justify-content: flex-end;
    }

    &:last-of-type {
      justify-content: flex-start;
    }

    .img {
      img {
        width: 100%;
      }
    }
  }

  h1 {
    font-family: "Thunder", serif;
    font-weight: bold;
    font-size: 3.6em;
    text-transform: uppercase;

    margin: 20px 0;
    letter-spacing: 1px;
    line-height: 1.1;
  }

  h2 {
    font-family: "Thunder", serif;
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px 0;
    line-height: 1;
    font-size: 2.65em;
    letter-spacing: 0.9px;
  }

  p {
    font-size: 1.15em;
    line-height: 1.25;
    margin: 25px 0;
  }
}

section.project {
  background-color: rgba(255, 255, 255, 0.3);
  .img {
    max-width: 430px;
  }

  h1 {
    img {
      width: 1em !important;
      transform: translate(-29px, 3px);
    }
  }
}

section.team {
  background-color: rgba(255, 255, 255, 0.3);
  border-top: 2px solid $primary;
  font-size: 1.1em;

  & > div {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
  }

  img.float {
    position: absolute;
    width: 170px;
    top: -20px;
    left: 5px;
    transform: rotate(-10deg);
  }

  article {
    padding: 30px 0;
    display: flex;
    flex-direction: column;

    span {
      margin: 3px 0;

      &:first-of-type {
        font-size: 0.9em;
      }

      &:last-of-type {
        font-size: 1.3em;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    div {
      margin-top: 5px;

      .social {
        padding: 8px;
        width: 42px;
        height: 42px;
      }
    }
  }
}

section.details {
  background-color: rgba(255, 255, 255, 0.3);
  border-top: 2px solid $primary;

  .col:first-of-type {
    background: $primary;
  }

  .img {
    max-width: 430px;
    padding-right: 20px;
  }

  .star {
    width: 40px;
  }
}

section.another {
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 2px solid $primary;
  padding: 50px 0 65px;

  h3 {
    font-family: "Thunder", serif;
    font-weight: bold;
    font-size: 1.6em;
    letter-spacing: 1px;
    margin: 10px 0 20px;
  }

  & > div {
    max-width: 700px;
    margin: 0 auto;
  }
}

@media (max-width: 950px) {
  .row {
    flex-direction: column;

    .col {
      width: 100%;
      padding: 0;
      justify-content: center !important;

      & > div {
        width: 100%;
        max-width: none;
        padding: 30px 5%;
      }

      .img {
        max-width: 400px;
      }
    }
  }

  section.project {
    .img {
      padding-top: 0;
      padding-bottom: 60px;
    }
  }

  section.team {
    img.float {
      left: 50%;
      transform: translateX(-50%);
    }

    & > div {
      padding: 65px 0 20px;
    }
  }
}

@media (max-width: 600px) {
  section.team {
    & > div {
      flex-direction: column;
    }

    article {
      padding: 15px 0;
    }
  }
}

@media (max-width: 400px) {
  section.team {
    img.float {
      width: 140px;
    }
  }
}

@media (max-width: 350px) {
  h1 img {
    display: none;
  }
}
</style>
