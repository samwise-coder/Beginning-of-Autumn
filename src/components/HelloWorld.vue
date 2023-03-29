<template>
  <div class="wrapper">
    <div class="haha" @click="handleClick"></div>
    <div ref="xixi" v-if="isShow" class="xixi"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {},
  methods: {
    handleClick() {
      console.log("handleClick");
      this.isShow = !this.isShow;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.haha {
  width: 100px;
  height: 100px;
  background-color: brown;
  transition: width 2s, height 2s, background-color 2s;
}
.haha:hover {
  width: 200px;
  height: 200px;
  background-color: cadetblue;
}
.xixi {
  width: 100px;
  height: 100px;
  background-color: darkcyan;
  animation: motion1 2s;
}
@keyframes motion {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: 0px;
  }
}
@keyframes motion1 {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 1000px;
  }
}
</style>
