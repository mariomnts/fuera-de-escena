<template>
  <article class="buttons">
    <button
      @click="shareNative"
      v-if="canShareNative"
      class="social share-native"
    >
      <img src="~/assets/icons/share.svg" alt="Compartir" />
    </button>

    <button @click="shareIG" v-if="canShareNative" class="social share-native">
      <img src="~/assets/icons/ig.svg" alt="Compartir en Instagram" />
    </button>

    <button
      @click="shareClipboard"
      class="social share-link clipboard"
      :class="{ 'show-always': !canShareNative, triggered: triggeredClipboard }"
      aria-label="Copiar link"
    >
      <img src="~/assets/icons/clipboard.svg" alt="Copiar link" />

      <span>¡Copiado!</span>
    </button>

    <button
      @click="shareWindow('tw')"
      class="social share-link"
      :class="{ 'show-always': !canShareNative }"
      aria-label="Twittear"
    >
      <img src="~/assets/icons/tw.svg" alt="Twittear" />
    </button>

    <button
      @click="shareWindow('ld')"
      class="social share-link"
      :class="{ 'show-always': !canShareNative }"
      aria-label="Compartir en Linkedin"
    >
      <img src="~/assets/icons/ld.svg" alt="Compartir en Linkedin" />
    </button>

    <button
      @click="shareWindow('fb')"
      class="social share-link"
      :class="{ 'show-always': !canShareNative }"
      aria-label="Compartir en Facebook"
    >
      <img src="~/assets/icons/fb.svg" alt="Compartir en Facebook" />
    </button>
  </article>
</template>

<script setup>
import { event } from "vue-gtag-next";

const props = defineProps({
  year: Number,
});

const decade = props.year && String(props.year).charAt(2);

const canShareNative = ref(false);
const canShareLinks = ref(false);

const url = `https://fueradeescena.es`;
const text = `Así estuvo presente la LGTBIQfobia durante mi adolescencia, ¿y durante la tuya? #FueraDeEscena 🏳️‍🌈 \n\n ${url}`;
const title = "LGTBIQfobia en la adolescencia - FUERA DE ESCENA 🏳️‍🌈";

const shareImgDefault = "fueradeescena-story.png";
const shareImgs = {
  5: "fueradeescena-story-50.png",
  6: "fueradeescena-story-60.png",
  7: "fueradeescena-story-70.png",
  8: "fueradeescena-story-80.png",
  9: "fueradeescena-story-90.png",
  0: "fueradeescena-story-2000.png",
};

let files;

onMounted(async () => {
  try {
    const file = await fetch(`/share/${shareImgs[decade] || shareImgDefault}`);
    const blob = await file.blob();
    files = [
      new File([blob], `fueradeescena.png`, {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ];
  } catch (err) {
    console.error(err);
  }

  canShareNative.value =
    navigator?.canShare &&
    (navigator.canShare({ text, title, files }) ||
      navigator.canShare({ text, title }));

  if (!canShareNative.value) {
    canShareLinks.value = true;
  }
});

async function shareNative() {
  try {
    if (navigator?.canShare && navigator.canShare({ text, title, files })) {
      await navigator.share({ files, url });
    } else {
      await navigator.share({ text, title });
    }
  } catch (err) {
    console.error(err);
  }

  event("share", { method: "native", year: props.year, decade });
}

async function shareIG() {
  try {
    if (navigator?.canShare && navigator.canShare({ files })) {
      await navigator.share({ files });
    }
  } catch (err) {
    console.error(err);
  }

  event("share", { method: "native-ig", year: props.year, decade });
}

const triggeredClipboard = ref(false);
const { copy } = useClipboard({ legacy: true });

function shareClipboard() {
  copy(text);
  triggeredClipboard.value = true;

  setTimeout(() => {
    triggeredClipboard.value = false;
  }, 2000);

  event("share", { method: "clipboard", year: props.year, decade });
}

const openPopup = (url) => {
  const w = window;
  const e = document.documentElement;
  const g = document.getElementsByTagName("body")[0];
  const windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  const windowHeight = w.innerHeight || e.clientHeight || g.clientHeight;

  const width = 575;
  const height = 400;
  const left = (windowWidth - width) / 2;
  const top = (windowHeight - height) / 2;
  const opts = `status=1,width=${width},height=${height},top=${top},left=${left}`;

  window.open(url, "Compartir", opts);
};

function shareWindow(via) {
  const link = {
    tw: "https://twitter.com/intent/tweet?text=As%C3%AD%20estuvo%20presente%20la%20LGTBIQfobia%20durante%20mi%20adolescencia,%20%C2%BFy%20durante%20la%20tuya?%20%23FueraDeEscena%20%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88%20%0A%0A&url=https://fueradeescena.es",
    ld: "https://www.linkedin.com/sharing/share-offsite/?url=https://fueradeescena.es",
    fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffueradeescena.es",
  }[via];

  openPopup(link || link.tw);

  event("share", { method: via, year: props.year, decade });
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;

  button.clipboard {
    position: relative;

    span {
      position: absolute;
      bottom: -53%;
      left: 50%;
      transform: translateX(-50%);
      color: $primary;
      font-weight: bold;
      font-size: 1.2em;
      opacity: 0;
      transition: all 0.6s ease-in-out;
    }

    &.triggered span {
      opacity: 1;
    }
  }
}

.share-link {
  @media (max-width: 650px) {
    display: none;

    &.show-always {
      display: block;
    }
  }
}
</style>
