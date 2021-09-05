<template>
  <div class="contaiber">
    <h1>ES6</h1>
    <img class="test" src="@/assets/image/hanberger.svg" alt="" />
    <img class="test" src="@/assets/image/hanberger.svg" alt="" />
    <img class="test" src="@/assets/image/hanberger.svg" alt="" />
    <canvas id="myCanvas"> </canvas>
  </div>
</template>

<script>
export default {
  setup() {
    var target = function () {
      return "I am the target";
    };
    var handler = {
      apply: function () {
        return "I am the proxy";
      },
    };

    var p = new Proxy(target, handler);

    console.log(p());

    return {};
  },
};
</script>

<style scope>
.test {
  width: 30px;
  height: 30px;
}
</style>