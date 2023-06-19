<template>
  <header>
    <img src="~/assets/decorations/star.svg" alt="" />

    <div>
      <h2 class="circle-big">{{ title }}</h2>
    </div>

    <img src="~/assets/decorations/star.svg" alt="" />
  </header>
</template>

<script setup>
defineProps({ title: String });
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #0025cb;
  padding: 28px 1%;

  h2 {
    font-family: "Thunder", serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.55em;
    color: $primary;
    margin: 0;
    display: inline-block;
  }

  img {
    max-width: 40px;
    animation: pulse2 6s 1s infinite;

    &:first-of-type {
      animation: pulse2 5s 1s infinite;
    }

    &:last-of-type {
      animation: pulse2 5s 2s infinite;
    }
  }
}

@include bkYear {
  header {
    h2 {
      font-size: 2.2em;
    }
  }
}
</style>
