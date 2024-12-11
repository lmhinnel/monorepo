<template>
  <div class="bg" :style="bg">
    <div class="nyan" :style="nyan">
      <img :src="img" alt="nyan" width="100%" />
    </div>
  </div>
</template>

<script>
import NyanImg from "../assets/nyan.gif";

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
