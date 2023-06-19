<template>
  <div class="video">
    <div>
      <Transition>
        <div class="cover" @click.stop="play" v-if="!started">
          <div><img src="~/assets/decorations/play.svg" alt="" /></div>
        </div>
      </Transition>

      <iframe
        :src="
          iframeLoaded
            ? src +
              `?enablejsapi=1&modestbranding=1&rel=0${
                start ? `&start=${start}` : ''
              }`
            : ''
        "
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ref="youtubeIframe"
      ></iframe>
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

const youtubeIframe = ref(null);
const started = ref(false);

function play() {
  const iframe = youtubeIframe.value;
  started.value = true;

  if (iframe) {
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  }
}

const img = useImage();

const coverUrl = computed(() => {
  const imgUrl = img(props.cover, { format: "webp" });
  return `url(${imgUrl})`;
});

const iframeLoaded = ref(false);

onMounted(() => {
  iframeLoaded.value = true;
});
</script>

<style lang="scss" scoped>
.video > div {
  aspect-ratio: v-bind(aspectRatio);
}
.cover {
  background: v-bind(coverUrl) center center no-repeat;
  background-size: cover;
}

iframe {
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
