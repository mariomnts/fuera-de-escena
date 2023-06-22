<template>
  <div
    class="custom-select"
    :tabindex="0"
    @focus="open = true"
    @click="open = true"
    @mouseover="open = true"
    ref="customSelect"
  >
    <div class="selected" :class="{ open: open }">
      {{ selected }}
    </div>

    <div class="items" :class="{ selectHide: !open }">
      <div class="wrapper">
        <nuxt-link
          v-for="(option, i) of yearsInputOptions"
          :key="i"
          :to="`/${option}`"
          @click="
            open = false;
            selected = option;
          "
        >
          {{ option }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { YEARS_INPUT } from "../../constants";
import { onClickOutside } from "@vueuse/core";

const yearsInputOptions = Array.from(
  { length: YEARS_INPUT[1] - YEARS_INPUT[0] + 1 },
  (_, i) => YEARS_INPUT[0] + i
);

const open = ref(false);
const customSelect = ref(null);

const selected = ref(YEARS_INPUT[0]);

onClickOutside(customSelect, () => (open.value = false));
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: center;
  outline: none;
  height: 2em;
  line-height: 2em;
  font-size: 1.35em;
}

.selected {
  background-color: #fff;
  border-radius: 33px;
  border: 1px solid $primary;
  color: $primary;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    top: 0.2em;
    right: 2em;
    width: 1.4em;
    height: 1.4em;
    background: url("~/assets/decorations/hand.svg") no-repeat center;
    background-size: contain;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    background-color: $primary;
    color: #fff;

    &:after {
      background-image: url("~/assets/decorations/hand_white.svg");
    }
  }

  &.open {
    &:after {
      transform: rotate(-90deg);
      top: 0.25em;
    }
  }
}

.items {
  padding-bottom: 40px;
  left: 0;
  right: 0;
  top: 0.9em;
  z-index: 1;
  position: absolute;
  .wrapper {
    color: $primary;
    border-radius: 0px 0px 20px 20px;
    border: 1px solid $primary;
    background-color: #fff;
    padding-top: 1em;
    max-height: 185px;
    overflow-y: auto;

    a {
      display: block;
      cursor: pointer;
      user-select: none;
      border-top: 1px solid $primary;
      text-decoration: none;
      color: $primary !important;

      &:hover {
        background-color: rgba($primary, 0.6);
        color: #fff !important;
      }
    }
  }
}

.selectHide {
  display: none;
}

@media (max-width: 225px) {
  .selected::after {
    display: none;
  }
}
</style>
