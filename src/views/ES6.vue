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
    class MyClass {
      constructor() {
        // ...
      }
      get prop() {
        return "getter";
      }
      set prop(value) {
        console.log("setter: " + value);
      }
    }

    let inst = new MyClass();

    inst.prop = 123;
    // setter: 123

    inst.prop;
    console.log(inst);
    // 'getter'
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