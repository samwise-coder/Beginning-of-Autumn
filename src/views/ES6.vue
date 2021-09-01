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
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 500);
    // ctx.lineTo(200, 130);
    // ctx.lineTo(200, 100);
    // ctx.fillStyle = "red";
    // ctx.fill();
    // 或者
    // ctx.closePath();

    ctx.stroke();
  },
};
</script>

<style scope>
.test {
  width: 30px;
  height: 30px;
}
</style>