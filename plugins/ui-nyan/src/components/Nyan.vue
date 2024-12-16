<template>
  <div class="bg" :style="bg">
    <div class="nyan" :style="nyan" @click="showModal">
      <img :src="img" alt="nyan" width="100%" />
    </div>
  </div>
  <a-modal v-model:visible="visible" title="Who's that pokémon" @ok="handleOk">
    <iframe
      width="100%"
      height="300px"
      src="https://www.youtube.com/embed/EE-xtCF3T94?si=pY02eBzzHq17GpNt"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </a-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import NyanImg from "../assets/nyan.gif";

const visible = ref(false);
const showModal = () => (visible.value = true);
const handleOk = (e) => (visible.value = false);

export default {
  name: "nyan",
  props: {
    bg: {
      type: String,
      default: "",
    },
    nyan: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: NyanImg,
    },
  },
  data() {
    return {
      visible,
      showModal,
      handleOk,
    };
  },
};
</script>

<style scoped>
.bg {
  width: 100%;
}
.nyan {
  width: 2rem;
  height: 2rem;
  position: relative;
  animation: nyanEffect 10s infinite ease-in-out;
  cursor: pointer;
}
@keyframes nyanEffect {
  0% {
    transform: scaleX(1);
    left: 0px;
  }
  0.01% {
    transform: scaleX(1);
    left: 0px;
  }
  49.99% {
    transform: scaleX(1);
    left: calc(100% - 2rem);
  }
  50% {
    transform: scaleX(-1);
    left: calc(100% - 2rem);
  }
  50.01% {
    transform: scaleX(-1);
    left: calc(100% - 2rem);
  }
  99.99% {
    transform: scaleX(-1);
    left: 0px;
  }
  100% {
    transform: scaleX(1);
    left: 0px;
  }
}
</style>
