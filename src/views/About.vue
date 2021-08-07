<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img :src="biyingPic" alt="" />
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
export default {
  setup() {
    let biyingPic = ref("");
    axios
      .get("/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN")
      .then((res) => {
        console.log("=====", res.data.images[0].url);
        biyingPic.value = `https://cn.bing.com${res.data.images[0].url}`;
      })
      .catch((err) => {
        console.log("-----", err);
      });
    return {
      biyingPic,
    };
  },
};
</script>

