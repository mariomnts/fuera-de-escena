<template>
  <header :class="{ overtake: position > 0 }">
    <h2>{{ year }}</h2>
    <p v-show="age && [0, 3].includes(position)" :class="`p${position}`">
      {{ sentence }} {{ age }} años...
    </p>
  </header>
</template>

<script setup>
const props = defineProps({
  year: Number,
  age: Number,
  position: Number,
});

const sentence = computed(() =>
  props.position === 0 ? "Cuando tenías" : "Con"
);
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  padding: 0 5%;
  max-width: 1900px;
  margin: 25px auto 0;
  z-index: 10;
  position: relative;

  h2 {
    font-family: "Thunder", serif;
    font-weight: bold;
    font-size: 4em;
    color: $primary;
    padding: 20px 30px 10px;
    border: 2px solid #0025cb;
    border-radius: 20px;
    display: inline-block;
    margin: 0;
  }

  p {
    font-family: "Thunder", serif;
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    font-size: 1.4em;
    color: $primary;
    padding-top: 5px;
    padding: 15px 0 0 15px;
    letter-spacing: 1px;

    &.p0 {
      padding: 5px 0 0 15px;
    }
  }

  &.overtake {
    margin-top: -20px !important;
  }
}

@include bkYear {
  header {
    h2 {
      font-size: 3.5em;
    }
  }
}
</style>
