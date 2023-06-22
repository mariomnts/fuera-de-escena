<template>
  <div>
    <LayoutHeader class="header">
      <div class="title">
        <h1>
          <span class="w1">Todas</span> las
          <span class="w2">referencias</span>...
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

    <component v-for="(year, i) in years" :position="i" :is="`y${year}`" />

    <LayoutFooter />
  </div>
</template>

<script setup>
import { YEARS } from "../constants";

useHead({
  title: `Todas las referencias | FUERA DE ESCENA 🏳️‍🌈`,
});

const years = Array.from(
  { length: YEARS[1] - YEARS[0] + 1 },
  (_, i) => YEARS[0] + i
);

const p0 = ref(null);
const scroll = () => {
  p0.value.scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
.header {
  height: 83vh;

  &:deep(section) {
    overflow-y: hidden;
  }

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

      &::after {
        content: "";
        position: absolute;
        display: block;
        background: url(~/assets/decorations/sparkle.svg) no-repeat center;
        background-size: contain;
        top: 0em;
        left: -0.3em;
        width: 0.55em;
        height: 0.55em;
      }
    }

    .w2 {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        display: block;
        background: url(~/assets/decorations/sparkle.svg) no-repeat center;
        background-size: contain;
        top: -0.2em;
        right: -0.3em;
        width: 0.55em;
        height: 0.55em;
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
