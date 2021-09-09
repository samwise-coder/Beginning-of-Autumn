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
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.toString = function () {
      return "(" + this.x + ", " + this.y + ")";
    };

    var p = new Point(1, 2);
    console.log(p.toString());
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