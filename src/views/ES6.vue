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
  mounted() {
    // var 的情况
    var foo = 2;

    console.log(foo); // 输出undefined

    // let 的情况
    let bar = 3;

    console.log(bar); // 报错ReferenceError
  },
};
</script>

<style scope>
.test {
  width: 30px;
  height: 30px;
}
</style>