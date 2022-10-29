<template>
  <div>
    <canvas id="canvas"></canvas>
    <canvas id="canvas2"></canvas>
    <canvas id="canvas3" width="400" height="400"></canvas>
    <canvas id="canvas4" width="800" height="800"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clock() {
      let ctx = document.getElementById("canvas4").getContext("2d");
      ctx.save();
      ctx.clearRect(0, 0, 400, 400);
      ctx.translate(200, 200);
      ctx.beginPath();
      ctx.arc(0, 0, 100, 0, Math.PI * 2, true);
      ctx.stroke();
      this.count++;
      if (this.count > 360) {
        this.count = 0;
      }
      ctx.rotate(((Math.PI * 2) / 360) * this.count);
      for (let i = 0; i < 60; i++) {
        ctx.save();
        ctx.rotate(((Math.PI * 2) / 60) * i);
        if (i % 5 === 0) {
          ctx.beginPath();
          ctx.lineWidth = 4;
          ctx.moveTo(100, 0);
          ctx.lineTo(120, 0);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.moveTo(100, 0);
          ctx.lineTo(115, 0);
          ctx.stroke();
        }
        ctx.restore();
      }
      ctx.restore();
      window.requestAnimationFrame(this.clock);
    },
    faa() {
      var ctx = document.getElementById("canvas3").getContext("2d");
      let canvasDom = document.getElementById("canvas3");
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 100, 100, 50, 50);
        let dataUrl = canvasDom.toDataURL("image/jpeg", 0.7);
        console.log(dataUrl);
      };
      img.src = require("@/assets/logo.png");
      // img.src =
      //   "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
    },
    // 参考资料：https://zhuanlan.zhihu.com/p/28257724
    foo() {
      document.addEventListener("touchmove", function (e) {
        e.preventDefault();
      });

      var c = document.getElementById("canvas2"),
        x = c.getContext("2d"),
        pr = window.devicePixelRatio || 1,
        w = window.innerWidth,
        h = window.innerHeight,
        f = 90,
        q,
        r = 0,
        u = Math.PI * 2,
        v = Math.cos,
        z = Math.random;

      c.width = w * pr;
      c.height = h * pr;
      x.scale(pr, pr);
      x.globalAlpha = 0.6;

      function i() {
        x.clearRect(0, 0, w, h);
        q = [
          { x: 0, y: h * 0.7 + f },
          { x: 0, y: h * 0.7 - f },
        ];
        while (q[1].x < w + f) d(q[0], q[1]);
      }

      function d(i, j) {
        x.beginPath();
        x.moveTo(i.x, i.y);
        x.lineTo(j.x, j.y);
        var k = j.x + (z() * 2 - 0.25) * f,
          n = y(j.y);
        x.lineTo(k, n);
        x.closePath();
        r -= u / -50;
        x.fillStyle =
          "#" +
          (
            ((v(r) * 127 + 128) << 16) |
            ((v(r + u / 3) * 127 + 128) << 8) |
            (v(r + (u / 3) * 2) * 127 + 128)
          ).toString(16);
        x.fill();
        q[0] = q[1];
        q[1] = { x: k, y: n };
      }

      function y(p) {
        var t = p + (z() * 2 - 1.1) * f;
        return t > h || t < 0 ? y(p) : t;
      }

      document.onclick = i;
      document.ontouchstart = i;
      i();
    },
  },
  mounted() {
    // 参考资料：https://github.com/sunshine940326/canvas-nest
    window.requestAnimationFrame(this.clock);

    this.foo();
    this.faa();
    class Circle {
      //创建对象
      //以一个圆为对象
      //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
      //this.r是创建圆的半径，参数越大半径越大
      //this._mx,this._my是移动的距离，参数越大移动
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.random() * 10;
        this._mx = Math.random();
        this._my = Math.random();
      }

      //canvas 画圆和画直线
      //画圆就是正常的用canvas画一个圆
      //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
      drawCircle(ctx) {
        ctx.beginPath();
        //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillStyle = "rgba(204, 204, 204, 0.3)";
        ctx.fill();
      }

      drawLine(ctx, _circle) {
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          ctx.beginPath();
          //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
          ctx.moveTo(this.x, this.y); //起始点
          ctx.lineTo(_circle.x, _circle.y); //终点
          ctx.closePath();
          ctx.strokeStyle = "rgba(204, 204, 204, 0.3)";
          ctx.stroke();
        }
      }

      // 圆圈移动
      // 圆圈移动的距离必须在屏幕范围内
      move(w, h) {
        this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;
        this._my = this.y < h && this.y > 0 ? this._my : -this._my;
        this.x += this._mx / 2;
        this.y += this._my / 2;
      }
    }

    //鼠标点画圆闪烁变动
    class currentCirle extends Circle {
      constructor(x, y) {
        super(x, y);
      }

      drawCircle(ctx) {
        ctx.beginPath();
        //注释内容为鼠标焦点的地方圆圈半径变化
        //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
        this.r = 8;
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
        ctx.fillStyle = "rgba(255, 77, 54, 0.6)";
        ctx.fill();
      }
    }

    //更新页面用requestAnimationFrame替代setTimeout
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    let circles = [];
    let current_circle = new currentCirle(0, 0);

    let draw = function () {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < circles.length; i++) {
        circles[i].move(w, h);
        circles[i].drawCircle(ctx);
        var j;
        for (j = i + 1; j < circles.length; j++) {
          circles[i].drawLine(ctx, circles[j]);
        }
      }
      if (current_circle.x) {
        current_circle.drawCircle(ctx);
        for (var k = 1; k < circles.length; k++) {
          current_circle.drawLine(ctx, circles[k]);
        }
      }
      requestAnimationFrame(draw);
    };

    let init = function (num) {
      for (var i = 0; i < num; i++) {
        circles.push(new Circle(Math.random() * w, Math.random() * h));
      }
      draw();
    };

    window.addEventListener("load", init(60));

    window.onmousemove = function (e) {
      e = e || window.event;
      current_circle.x = e.clientX;
      current_circle.y = e.clientY;
    };

    window.onmouseout = function () {
      current_circle.x = null;
      current_circle.y = null;
    };
  },
};
</script >

<style scoped>
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  background: #fff;
}

#canvas #canvas2 {
  display: block;
  width: 100%;
  height: 100%;
}
</style>