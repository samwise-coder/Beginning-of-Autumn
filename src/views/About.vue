<template>
  <div class="about" ref="divDom">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    let biyingPic = ref("");
    let divDom = ref();
    onMounted(() => {
      console.log(divDom.value.style);
    });
    axios
      .get("/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN")
      .then((res) => {
        console.log("=====", res.data.images[0].url);
        biyingPic.value = `https://cn.bing.com${res.data.images[0].url}`;
        divDom.value.style.backgroundImage = `url(${biyingPic.value})`;
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
</style>
