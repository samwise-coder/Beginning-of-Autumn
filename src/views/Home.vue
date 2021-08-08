<template>
  <div class="home" ref="divDom"></div>
</template>
<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    let divDom = ref();
    onMounted(() => {
      divDom.value.style.width = `${document.body.clientWidth}px`;
      divDom.value.style.height = `${document.body.clientHeight}px`;
    });
    axios
      .get("/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN")
      .then((res) => {
        console.log("=====", res.data.images[0].url);
        divDom.value.style.backgroundImage = `url(https://cn.bing.com${res.data.images[0].url})`;
      })
      .catch((err) => {
        console.log("-----", err);
      });
    return {
      divDom,
    };
  },
};
</script>
<style scoped>
.home {
}
</style>
