<template>
  <div>
    <h1 v-html="dataType()"></h1>
    <h1 v-html="variableDeclare()"></h1>
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
    return {
      dataType,
      variableDeclare,
    };
  },
};
</script>

<style>
</style>