<template>
  <div>
    <h1 v-html="dataType()"></h1>
    <h1 v-html="variableDeclare()"></h1>
    <div class="box">
      <p>haoshfklshadkfh</p>
    </div>
    <i class="fas fa-cloud"></i>
    <i class="fas fa-heart"></i>
    <i class="fas fa-car"></i>
    <i class="fas fa-file"></i>
    <i class="fas fa-bars"></i>
    <hr />
    <p>霓虹</p>
    <b>你好</b>
    <big>你好</big>
    <i>你好</i>
    <small>你好</small>
    <strong>你好</strong>
    <sub>你好</sub>
    <sup>你好</sup>
    <ins>你好</ins>
    <del>你好</del>
    <code>code</code>
    <kbd>keybord</kbd>
    <abbr title="nihoa">nihoa</abbr>
    <acronym>定义首字母缩写</acronym>
    <hr />
    <p>WWF 的目标是：<q>构建人与自然和谐共存的世界。</q></p>
    <hr />
    <p>以下内容引用自 WWF 的网站：</p>
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
      五十年来，WWF 一直致力于保护自然界的未来。 世界领先的环保组织，WWF 工作于
      100 个国家， 并得到美国一百二十万会员及全球近五百万会员的支持。
    </blockquote>
    <hr />
    <p><abbr title="World Health Organization">WHO</abbr> 成立于 1948 年。</p>
    <hr />
    <address>
      Written by Donald Duck.<br />
      Visit us at:<br />
      Example.com<br />
      Box 564, Disneyland<br />
      USA
    </address>
    <hr />
    <bdo dir="rtl">This text will be written from right to left</bdo>
    <hr />
    <p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
    <hr />
    <a name="label">锚（显示在页面上的文本）</a>
    <a href="http://www.w3school.com.cn/" target="_blank">Visit W3School!</a>
    <hr />
    <p>我将显示 A B C</p>
    <p>我将显示 &#65; &#66; &#67;</p>
    <p>&#128512;</p>
    <p style="font-size: 48px">&#128512; &#128516; &#128525; &#128151;</p>
  </div>
</template>

<script lang='ts'>
export default {
  setup() {
    //9.23数据类型
    function dataType() {
      let isDone: boolean = false;
      let shuzi: number = 0x123;
      let zifu: string = "sss";
      let list: number[] = [23, 23];
      let lists: string[] = ["sad", "asd"];
      let fan: Array<number> = [12];
      let x: [string, number] = ["元组", 22]; //元组
      enum color {
        red = 99,
        green,
        blue,
      }
      let y: color = color.red;
      let notSure: any = [12];
      return shuzi + zifu + list + lists + x + y + " " + notSure;
    }
    function variableDeclare() {
      for (let i = 0; i < 10; i++) {
        setTimeout(function () {
          console.log(i);
        }, 100 * i);
      }
    }
    //9.26接口
    interface SquareConfig {
      color?: string;
      width?: number;
    }

    function createSquare(config: SquareConfig): {
      color: string;
      area: number;
    } {
      let newSquare = { color: "white", area: 100 };
      if (config.color) {
        newSquare.color = config.color;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
    }

    let mySquare = createSquare({ color: "black" });
    console.log(mySquare);

    //9/27类
    class Greeter {
      greeting: string;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
        return "Hello, " + this.greeting;
      }
    }

    let greeter = new Greeter("world");
    console.log(greeter.greet());
    //打卡
    //daka
    //10.14
    return {
      dataType,
      variableDeclare,
    };
  },
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-color: crimson;
  padding: 10px;
}
</style>