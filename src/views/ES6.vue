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
    var it = makeIterator(["a", "b"]);

    it.next(); // { value: "a", done: false }
    it.next(); // { value: "b", done: false }
    it.next(); // { value: undefined, done: true }

    function makeIterator(array) {
      var nextIndex = 0;
      return {
        next: function () {
          return nextIndex < array.length
            ? { value: array[nextIndex++], done: false }
            : { value: undefined, done: true };
        },
      };
    }

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