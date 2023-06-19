<template>
  <div ref="target" :class="{ active }" class="item">
    <slot></slot>
  </div>
</template>

<script setup>
const target = ref(null);
const active = ref(false);

const targetIsVisible = useElementVisibility(target);

watch(targetIsVisible, (isVisible) => {
  if (isVisible) {
    active.value = true;
  }
});
</script>

<style lang="scss" scoped></style>
