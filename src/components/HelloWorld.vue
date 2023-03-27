<template>
  <div class="wrapper">
    <p>
      This example requires you to enter commands in your browser's JavaScript
      console (see
      <a
        href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools"
        >What are browser developer tools</a
      >
      for more information).
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      var self = this;
      var a = (this.bbb = 10);
      console.log("a", a, "b", self);
      // var oo = {
      //   kk: "nihao",
      //   ll: "haha",
      //   ss: 123,
      // };
      var ww = [12, 34, 67];
      console.log("------", ww.join("bb"));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
