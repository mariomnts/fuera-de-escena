<template>
  <div>
    <LayoutHeader class="header">
      <div class="title">
        <h1>
          <span class="w1">Si</span> naciste en
          {{ yearInput == 2000 ? `el 2000` : yearInput }}<br />de tus
          {{ years[0] - yearInput }} a tus
          {{ years[years.length - 1] - yearInput }}
          <span class="w2">años</span>...
        </h1>

        <h2>
          Cómo estuvo presente la
          <span class="circle-big">LGTBIQfobia</span><br />
          durante tu adolescencia
        </h2>
      </div>

      <div class="scroll" @click="scroll">
        <img src="~/assets/decorations/hand_down.svg" alt="" />
        <p>Haz scroll para descubrirlo</p>
      </div>
    </LayoutHeader>

    <div ref="p0"></div>

    <component
      v-for="(year, i) in years"
      :age="year - yearInput"
      :position="i"
      :is="`y${year}`"
    />

    <section class="after-years">
      <article class="share">
        <h3>#FueraDeEscena</h3>
        <h2>Comparte las referencias de tus años</h2>

        <LayoutShareButtons :year="yearInput" />
      </article>

      <article class="end">
        <div>
          <h2>
            Ojos que no ven...<br />
            <Transition appear mode="out-in" name="fade-in">
              <span :key="index">{{ word }}</span></Transition
            ><br class="hide" />
            que no crece
          </h2>

          <p>
            Más allá de los referentes negativos que se citan en esta web, que
            contribuyen a perpetuar estereotipos nocivos basados en tópicos, es
            importante destacar la gran carencia de referentes en los medios
            durante nuestra adolescencia, una etapa crucial en nuestro
            desarrollo como adultos.
          </p>

          <p>
            Esta falta de representación LGTBIQ+ nos relega a un segundo plano,
            generando en nosotros una sensación de exclusión y limitando nuestra
            formación. Lo que nos hace sentir que no encajamos, que estamos
            siempre fuera del foco, fuera de escena.
          </p>
        </div>
      </article>

      <article class="another">
        <div>
          <h3>
            ¿Cómo hubiera sido tu adolescencia si hubieras nacido en otro
            momento? Prueba con otro año
          </h3>

          <LayoutYearSelector class="year-selector" />
        </div>
      </article>
    </section>

    <LayoutFooter :yearInput="yearInput" />
  </div>
</template>

<script setup>
import { YEARS_INPUT, yearsFromInput } from "../constants";

definePageMeta({
  validate: async (route) => {
    // Validate url param is a valid year
    return (
      /^\d{4}$/.test(route.params.year) &&
      route.params.year >= YEARS_INPUT[0] &&
      route.params.year <= YEARS_INPUT[1]
    );
  },
});

const route = useRoute();

const yearInput = parseInt(route.params.year, 10);
const years = computed(() => yearsFromInput(yearInput));

useHead({
  title: `LGTBIQfobia en la adolescencia del ${yearInput} | FUERA DE ESCENA 🏳️‍🌈`,
});

const p0 = ref(null);
const scroll = () => {
  p0.value.scrollIntoView({ behavior: "smooth" });
};

// Words to swap
const WORDS = ["Lesbiana", "Gay", "Trans", "Bisexual", "Intersexual"];

const index = ref(0);
const word = ref(WORDS[index.value]);

const swapWord = () => {
  word.value = WORDS[index.value % WORDS.length];
  index.value++;
};

let interval;

onMounted(() => {
  interval = setInterval(swapWord, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.header {
  height: 83vh;

  & > div {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 5%;
  }

  h1 {
    font-family: "Thunder", serif;
    font-weight: 800;
    font-size: 6.5em;
    text-transform: uppercase;
    margin: 25px 0;
  }

  h2 {
    font-weight: 300;
    font-size: 1.5em;
    margin: 15px 0;
    line-height: 1.4em;
  }

  h1 {
    .w1 {
      position: relative;
      padding-top: 0.5em;

      &::after {
        content: "";
        position: absolute;
        display: block;
        background: url(~/assets/decorations/sparkle.svg) no-repeat center;
        background-size: contain;
        top: 0.5em;
        left: -0.3em;
        width: 0.55em;
        height: 0.55em;
        animation: pulse0 6s 1s infinite;
      }
    }

    .w2 {
      position: relative;
      padding-top: 0.5em;

      &::after {
        content: "";
        position: absolute;
        display: block;
        background: url(~/assets/decorations/sparkle.svg) no-repeat center;
        background-size: contain;
        top: 0.4em;
        right: -0.3em;
        width: 0.55em;
        height: 0.55em;
        animation: pulse1 7s 4s infinite;
      }
    }
  }

  .title {
    margin: auto 0;
  }

  .scroll {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    padding: 30px 0 40px;

    img {
      max-width: 60px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
}

.after-years {
  width: 100%;
  position: relative;
  color: $primary;
  background: url("~/assets/back/framed.svg") no-repeat top center;
  background-size: cover;

  & > article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5%;
    border-top: 2px solid $primary;
    background-color: rgba(255, 255, 255, 0.3);

    &.share {
      padding: 40px 5% 30px;

      h3 {
        font-family: "Thunder", serif;
        font-weight: bold;
        font-size: 2em;
        margin: 0;
        letter-spacing: 1px;
      }

      h2 {
        font-weight: normal;
        font-size: 1.5em;
      }

      .buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        button {
          margin: 10px;
          background: #fff;
          border: 1px solid $primary;
          border-radius: 50%;
          padding: 11px;
          width: 50px;
          height: 50px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          img {
            width: 100%;
          }

          &:hover {
            background: $primary;
            color: #fff;

            img {
              filter: invert(99%) sepia(3%) saturate(494%) hue-rotate(184deg)
                brightness(114%) contrast(100%);
            }
          }

          &:active {
            transform: scale(1.5);
          }
        }
      }
    }

    &.end {
      border-top: 2px solid $primary;
      padding: 85px 5% 110px;
      text-align: left;
      position: relative;

      & > div {
        max-width: 700px;
        margin: 0 auto;

        h2 {
          font-family: "Thunder", serif;
          font-weight: 800;
          font-size: 5em;
          text-transform: uppercase;
          margin: 20px 0 30px;
          line-height: 1.05em;
          text-align: center;

          span {
            display: inline-block;
          }

          br.hide {
            display: none;
          }
        }

        p {
          font-size: 1.3em;
          line-height: 1.25;
          margin: 30px 0;
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -20px;
        background: url("~/assets/decorations/eyes_rainbow.svg") no-repeat
          center bottom;
        background-size: contain;
        width: 175px;
        height: 175px;
      }
    }

    &.another {
      border-top: 2px solid $primary;
      padding: 50px 5% 65px;

      & > div {
        max-width: 600px;
        margin: 0 auto;

        h3 {
          font-family: "Thunder", serif;
          font-weight: bold;
          font-size: 1.6em;
          letter-spacing: 1px;
          margin: 10px 0 20px;
        }

        .year-selector {
          max-width: 300px;
          margin: 0 auto;
        }
      }
    }
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.4s ease-in-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-from {
  transform: translateY(30px);
}

.fade-in-leave-to {
  transform: translateY(-20px);
}

@include bkYear {
  .header {
    h1 {
      font-size: max(9vw, 4em) !important;
      letter-spacing: 2px;
    }

    h2 {
      font-size: max(1.4vw, 1.5em) !important;
    }

    .scroll {
      img {
        max-width: max(38px, 6vw) !important;
      }

      p {
        font-size: 0.8em;
      }
    }
  }

  .end {
    h2 {
      font-size: max(10vw, 2.6em) !important;
      letter-spacing: 1.5px;
    }
  }
}

@media (max-width: 600px) {
  .end {
    h2 {
      font-size: max(11vw, 2.6em) !important;

      br.hide {
        display: inline-block !important;
      }
    }

    p {
      font-size: 1.1em !important;
    }
  }
}

@media (max-height: 1000px) {
  .header {
    height: 85vh;
    min-height: 600px;
    .scroll {
      padding: 10px 0;
    }
  }
}

@media (max-height: 850px) {
  .header {
    height: 100vh;
  }
}

@media (max-height: 700px) {
  .header {
    h1 {
      font-size: 4.5em;
    }

    h2 {
      font-size: 1.3em;
    }
    .scroll {
      img {
        max-width: 50px;
      }

      p {
        font-size: 0.8em;
      }
    }
  }
}
</style>
