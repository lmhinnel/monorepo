<script setup>
import Nyan from "ui-nyan";
import { HelloWorld } from "ui-nyan";
import { HelloChat } from "ui-axios";
import { ref } from "vue";

const open = ref(false);
const text = ref("https://lmhinnel.github.io/gameee/");

const showModal = () => (open.value = true);
const handleOk = () => (open.value = false);
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <Nyan
    img="https://media.tenor.com/4otr5S3l1agAAAAj/dancing-duckdancing.gif"
  />

  <HelloWorld msg="Vite + Vue" />

  <HelloChat />

  <a-button type="primary" @click="showModal">Open Secret Modal</a-button>
  <a-modal v-model:open="open" title="Secret Modal" @ok="handleOk">
    <a-space direction="vertical" align="center">
      <a-qrcode :value="text" color="skyblue" />
      <a-input v-model:value="text" placeholder="-" />
    </a-space>
  </a-modal>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
