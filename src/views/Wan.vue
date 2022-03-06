<template>
  <div class="container">
    <div class="num-container">
      <li ref="num" class="item-num">0123456789</li>
    </div>
    <li>0123456789</li>
    <button class="numbuttom" @click="handle()"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 1,
    };
  },
  methods: {
    handle() {
      let e = -10 * this.i++;
      this.$refs.num.style = `transform: translateY(${e}%)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .numbuttom {
    width: 40px;
    height: 20px;
  }
  .num-container {
    // position: relative;
    height: 20px;
    overflow: hidden;
    .item-num {
      background-color: cadetblue;
      writing-mode: tb-rl;
      text-orientation: upright;
      transform: translateY(-70%);
      transition: transform 2s ease-in-out;
    }
  }
}
</style>