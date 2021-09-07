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
    var myIterable = {};
    myIterable[Symbol.iterator] = function* () {
      yield 1;
      yield 2;
      yield 3;
    };

    console.log([...myIterable]);

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