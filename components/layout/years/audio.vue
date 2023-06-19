<template>
  <div class="audio">
    <div class="content">
      <p class="title">{{ title }}</p>

      <p class="author">{{ author }}</p>

      <div class="progress" @mousedown="settingTime = true" ref="progressRef">
        <div class="bar"></div>

        <img src="~/assets/decorations/sparkle.svg" draggable="false" alt="" />
      </div>

      <div class="time">
        <span class="current">{{ formatDuration(currentTime) }}</span>
        <span class="total">{{ formatDuration(duration) }}</span>
      </div>

      <div
        class="controls"
        @click="playing = !playing"
        @keyup.enter="playing = !playing"
        tabindex="0"
        role="link"
        alt="Play / pausa"
      >
        <img v-show="playing" src="~/assets/decorations/pause.svg" alt="" />
        <img v-show="!playing" src="~/assets/decorations/play.svg" alt="" />
      </div>

      <audio ref="audioRef" preload="metadata"></audio>
    </div>
  </div>
</template>

<script setup>
import round from "lodash/round";

const props = defineProps({
  src: String,
  title: String,
  author: String,
});

const audioRef = ref();
const { playing, currentTime, duration } = useMediaControls(audioRef, {
  src: props.src,
});

const formatDuration = (seconds) => {
  return new Date(1000 * seconds).toISOString().slice(14, 19);
};

const progress = computed(() => {
  return currentTime.value && duration.value
    ? round(currentTime.value / duration.value, 5)
    : 0;
});

const settingTime = ref(false);
const progressRef = ref();

const { elementX, elementWidth } = useMouseInElement(progressRef);

useEventListener("mouseup", () => (settingTime.value = false));

watch(settingTime, () => {
  if (settingTime.value) {
    const percentage = elementX.value / elementWidth.value;
    currentTime.value = percentage * duration.value;
  }
});
</script>

<style lang="scss" scoped>
.audio {
  text-align: center;
  position: relative;
  z-index: 5;
}

.content {
  margin: 0 auto;
  text-align: center;
  padding: 20px 25px;
  width: 100%;
  border-radius: 15px;
  background: #e1e7ff;
  border: 1px solid $primary;
  box-shadow: 8px 8px 0px 0px $primary;
  display: inline-block;
}

.title {
  font-family: "Thunder", serif;
  font-weight: 400;
  font-size: 1.9em !important;
  text-transform: uppercase;
  margin: 0 0 1px;
  letter-spacing: 1px;
}

.author {
  font-family: "Inter", sans-serif;
  font-size: 1.05em !important;
  margin: 0 0 25px;
  opacity: 0.75;
}

.progress {
  width: 100%;
  margin: 15px 0 0;
  background: rgba($primary, 0.6);
  height: 8px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  .bar {
    background: #fff;
    width: calc(100% * v-bind(progress));
    height: 100%;
    border-radius: 8px;
    border: 1px solid $primary;
    transition: all 0.2s ease-in-out;
  }

  img {
    position: absolute;
    top: -15px;
    left: calc(100% * v-bind(progress) - 5%);
    width: 43px;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.time {
  font-family: "Inter", sans-serif;
  font-size: 0.9em;
  margin: 12px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.controls {
  margin: 0 0 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  img {
    width: 45px;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
