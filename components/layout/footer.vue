<template>
  <main>
    <section class="title">FUERA <br />DE <br />ESCENA</section>
    <section class="content">
      <article class="row">
        <div>
          Web inspirada en la creada por el Lab de RTVE el 8M sobre
          <a
            href="https://lab.rtve.es/8m-machismo-adolescencia/"
            target="_blank"
            >el machismo en la adolescencia</a
          >.
        </div>
        <div>
          Si sufres malestar, acoso o necesitas orientación puedes buscar ayuda
          en el
          <a
            href="https://www.igualdad.gob.es/comunicacion/notasprensa/Paginas/igualdad-en-marcha-servicio-028-arcoiris-lgtbi.aspx"
            target="_blank"
            >email, chat y teléfono 028 del Ministerio de Igualdad</a
          >, o en asociaciones como
          <a
            href="https://felgtbi.org/que-hacemos/consulta/linea-arcoiris/"
            target="_blank"
            >FELGTBI+</a
          >, o
          <a href="https://cogam.es/servicio-informacion-lgtb/ " target="_blank"
            >COGAM</a
          >.
        </div>
        <div>
          <NuxtLink to="/proyecto" class="block">El proyecto</NuxtLink> <br />

          <a
            href="https://github.com/mariomnts/fuera-de-escena"
            target="_blank"
            class="block"
            >Github del proyecto</a
          >
        </div>
      </article>

      <article class="row">
        <div><span class="circle white">2023</span></div>
        <div>Diseño y documentación de Ignacio Incera</div>
        <div>Desarrollo web de Mario Montes</div>
      </article>
    </section>

    <section class="decoration">
      <img src="~/assets/decorations/sparkle.svg" alt="" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  background: $primary;
  color: #fff;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 2px;

    &.block {
      display: inline-block;
      margin-bottom: 15px;
    }
  }

  .title {
    font-family: "Thunder", serif;
    font-weight: 800;
    font-size: 5em;
    line-height: 0.8em;
    padding: 40px 50px;
    border-right: 1px solid #fff;
    align-self: stretch;
    letter-spacing: 1px;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-weight: 300;
    padding: 30px 0;

    .row {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 10px 0;

      & > div {
        width: 25%;
        padding: 0 40px;
      }

      &:first-of-type {
        font-size: 0.95em;
        margin-bottom: 30px;
      }

      &:last-of-type {
        font-size: 0.8em;
      }
    }
  }

  .decoration {
    padding: 40px 50px;
    align-self: stretch;
    border-left: 1px solid #fff;
    display: flex;
    max-width: 180px;

    img {
      width: 100%;
      min-width: 80px;
      margin: 0 auto;
      display: block;
      animation: pulse1 6s 1s infinite;
    }
  }
}

@media (max-width: 1500px) {
  main {
    .decoration {
      padding: 40px 40px;
    }
  }
}

@media (max-width: 1300px) {
  main {
    .content {
      .row {
        & > div {
          width: 33.3%;
          padding: 0 25px;
        }
      }
    }

    .decoration {
      padding: 40px 20px;

      img {
        width: 75%;
      }
    }
  }
}

@media (max-width: 1200px) {
  main {
    .title {
      padding: 40px 20px;
      font-size: 4em;
    }
  }
}

@media (max-width: 1000px) {
  main {
    .decoration {
      display: none;
    }
  }
}

@media (max-width: 700px) {
  main {
    flex-direction: column;

    .title {
      border-right: none;
      border-bottom: 1px solid #fff;
      text-align: center;
      padding: 30px 5%;
      font-size: 10vw;
      letter-spacing: 2px;

      br {
        display: none;
      }
    }

    .content {
      padding: 0;

      .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 0 !important;
        padding: 10px 5%;

        & > div {
          width: 100%;
          padding: 18px 0;
        }

        &:first-of-type {
          border-bottom: 1px solid #fff;
        }

        &:last-of-type {
          padding-bottom: 20px;

          & > div {
            padding: 10px 0;
          }
        }
      }
    }
  }
}
</style>
