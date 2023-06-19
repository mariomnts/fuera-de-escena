<template>
  <section class="slider">
    <div class="container" ref="container">
      <div v-for="(_, item) in $slots" class="sliderItem" :key="item">
        <div class="control left" @click="slider(-1)" v-if="item != 0">
          <img src="~/assets/decorations/hand_left.svg" alt="" />
          <span>Ver más</span>
        </div>

        <LayoutYearsItem>
          <slot :name="item"></slot>
        </LayoutYearsItem>

        <div class="control right" @click="slider(1)" v-if="item != items - 1">
          <img src="~/assets/decorations/hand_right.svg" alt="" />
          <span>Ver más</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const container = ref(null);

const slots = useSlots();
const items = ref(Object.keys(slots).length);
const current = ref(0);

function slider(n) {
  if (container?.value?.style?.transform !== undefined) {
    current.value = current.value + n;

    container.value.style.transform = `translateX(-${
      (current.value % items.value) * 105
    }%)`;

    if (window.innerWidth < 800) {
      window.scrollTo({
        top: container.value.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  overflow: hidden;
}

.container {
  transition: transform 0.45s ease-in-out;
  display: flex;
  width: 100%;
}

.sliderItem {
  flex: 0 0 100%;
  margin-right: 5%;
  position: relative;
  overflow: hidden;
}

.control {
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;

  img {
    width: 100%;
    max-width: 50px;
    transition: transform 0.2s ease-in-out;
  }

  span {
    font-size: 0.7em;
    margin-top: 15px;
    text-transform: uppercase;
  }

  &.right {
    right: 0;
    padding-right: 30px;
  }

  &.left {
    left: 0;
    padding-left: 30px;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

@include bkYearColumns {
  .control {
    &.right {
      padding-right: 17px;
    }

    &.left {
      padding-left: 17px;
    }
  }
}

@include bkYearSlider {
  .sliderItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .control {
    position: relative;
    height: auto;
    flex-direction: row;
    padding: 25px 5% 40px;
    order: 1;
    border-top: 0.5px solid $primary;

    img {
      margin-right: 20px;
    }

    span {
      margin: 0;
    }
  }
}
</style>
