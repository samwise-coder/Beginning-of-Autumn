<template>
  <div class="home" ref="divDom">
    <div class="demo">flex</div>
    <div class="demo">table</div>
    <div class="demo">canvas</div>
    <div class="demo">animation</div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
export default {
  setup() {
    let divDom = ref();
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
<style lang='scss' scoped>
$demoWidth: 5vw;
.home {
  width: 100vw;
  height: 100vh;
  background-size: 100vw 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .demo {
    width: $demoWidth;
    height: $demoWidth;
    text-align: center;
    line-height: $demoWidth;
    border-radius: 50%;
    background-color: chocolate;
  }
}
</style>
