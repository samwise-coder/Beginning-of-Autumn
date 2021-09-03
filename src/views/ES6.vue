<template>
  <div class="contaiber">
    <h1>ES6</h1>
    <img class="test" src="@/assets/image/hanberger.svg" alt="" />
    <img class="test" src="@/assets/image/hanberger.svg" alt="" />
    <img class="test" src="@/assets/image/hanberger.svg" alt="" />
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
export default {
  //1.不存在变量提升
  //2.暂时性死区
  //3.不允许重复声明
  mounted() {
    console.log("hello".repeat(2));
  },
};
</script>

<style scope>
.test {
  width: 30px;
  height: 30px;
}
</style>