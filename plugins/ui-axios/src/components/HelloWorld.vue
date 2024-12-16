<template>
  <div>
    <a-input-search
      v-model:value="search"
      placeholder="input your name"
      enter-button
      @search="onSearch"
    />
    <a-modal v-model:open="modal.open" title="Announcement" @ok="handleOk">
      <a-typography-title :level="2">{{
        modal.content?.data
      }}</a-typography-title>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import instance from "../common";

const modal = reactive({
  open: false,
  content: "",
});
const search = ref("");
const onSearch = (searchValue) => {
  instance
    .get("/nyan", {
      params: {
        name: searchValue,
      },
    })
    .then((response) => (modal.content = response))
    .catch((_) => (modal.content = "SOS not found"))
    .finally(() => (modal.open = true));
};
const handleOk = (_) => (modal.open = false);
</script>
