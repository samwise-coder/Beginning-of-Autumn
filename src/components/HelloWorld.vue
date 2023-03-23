<template>
  <div class="hello">
    <em>第一</em><em>第二</em><em>第三</em>
    <p>第四</p>
    <p>第五</p>
    <p>第六</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
