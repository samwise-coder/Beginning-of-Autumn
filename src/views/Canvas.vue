<template>
  <div>
    <h1>Canvas</h1>
    <canvas id="myCanvas" width="400" height="250">
      您的浏览器不支持 Canvas
    </canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var posX = 20;
    var posY = 100;
    setInterval(function () {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      posX += 1;
      posY += 0.25;
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(posX, posY, 10, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }, 30);
  },
};
</script>

<style>
#myCanvas {
  background-color: floralwhite;
}
</style>