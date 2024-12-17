<template>
  <div>
    <a-float-button
      tooltip="Open Super smart chat AI"
      :style="{
        right: '3rem',
      }"
      @click="toggleOpen"
    >
      <template #icon>💬</template>
    </a-float-button>

    <a-modal v-model:open="open" title="Super smart chat AI" @ok="toggleOpen">
      <a-list
        class="demo-loadmore-list"
        item-layout="horizontal"
        :data-source="list"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-skeleton :title="false" :loading="!!item.loading" active>
              <div>{{ item }}</div>
            </a-skeleton>
          </a-list-item>
        </template>
      </a-list>
      <template #footer>
        <a-input-search
          v-model:value="msg"
          placeholder="ur message"
          enter-button="💬"
          @search="sendMsg"
        />
      </template>
    </a-modal>
  </div>
</template>
<script setup>
import { ref } from "vue";
import instance from "../common";

const open = ref(false);
const msg = ref("");
const loading = ref(false);
const data = ref([]);
const list = ref([]);

const sendMsg = (_msg) => {
  loading.value = true;
  const sz = _msg.length < 50 ? 1 : (_msg.length % 2) + 1;
  list.value = data.value.concat(
    [...new Array(sz)].map(() => ({
      loading: true,
    }))
  );
  instance.get("/chat?size=" + sz).then((res) => {
    console.log(res);
    const newData = data.value.concat(res.data);
    loading.value = false;
    data.value = newData;
    list.value = newData;
  });
};

const toggleOpen = () => (open.value = !open.value);
</script>

<style scoped>
.demo-loadmore-list {
  height: 300px;
  overflow-y: overlay;
}
</style>
