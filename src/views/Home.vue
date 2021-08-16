<template>
  <div class="home" ref="divDom">
    <div class="demo" @click="handleFlex">flex</div>
    <div class="demo">table</div>
    <div class="demo" @click="handleCanvas">canvas</div>
    <div class="demo" @click="handleAnimation">animation</div>
    <div class="demo" @click="handleES6">ES6</div>
    <div class="demo" @click="handleTs">Ts</div>
  </div>
  <router-view> </router-view>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    let divDom = ref();
    const router = useRouter();

    const handleTs = () => {
      router.push("/ts");
    };
    const handleES6 = () => {
      router.push("/es6");
    };
    const handleAnimation = () => {
      console.log("animation");
      router.push("/animation");
    };
    const handleFlex = () => {
      console.log("flex");
      router.push("/flex");
    };
    const handleCanvas = () => {
      router.push("/canvas");
    };
    axios
      .get("/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN")
      .then((res) => {
        console.log("=====", res.data.images[0].url);
        divDom.value.style.backgroundImage = `url(https://cn.bing.com${res.data.images[0].url})`;
      })
      .catch((err) => {
        console.log("-----", err);
      });
    axios
      .get("http://127.0.0.1:8089/index")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("eerr", err);
      });
    return {
      divDom,
      handleFlex,
      handleCanvas,
      handleAnimation,
      handleES6,
      handleTs,
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
