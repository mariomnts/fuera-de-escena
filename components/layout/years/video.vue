<template>
  <div class="video">
    <div>
      <Transition>
        <div class="cover" @click.stop="play" v-if="!started">
          <div><img src="~/assets/decorations/play.svg" alt="" /></div>
        </div>
      </Transition>

      <video
        controls
        disablePictureInPicture
        controlsList="nodownload noremoteplayback noplaybackrate"
        ref="videoRef"
        playsinline
        preload="metadata"
      ></video>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  start: Number,
  aspectRatio: {
    type: String,
    default: "16/9",
  },
  cover: String,
});

const videoRef = ref();
const { playing } = useMediaControls(videoRef, {
  src: props.src,
});
const started = ref(false);

function play() {
  started.value = true;
  playing.value = true;
}

const img = useImage();

const coverUrl = computed(() => {
  const imgUrl = img(props.cover, { format: "webp" });
  return `url(${imgUrl})`;
});
</script>

<style lang="scss" scoped>
.cover {
  background: v-bind(coverUrl) center center no-repeat;
  background-size: cover;
}

video {
  width: 100%;
  aspect-ratio: v-bind(aspectRatio);
  transition: opacity 0.25s ease-in-out;
  position: relative;
  z-index: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
