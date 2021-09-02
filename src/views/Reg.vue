<template>
  <div>
    <h1>reg</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    var str = "Vis9it Runoob!9 r|r9Unhahaha!";
    var n = str.replace(/^vis\d/i, "sss");
    console.log(n);
  },
};
</script>

<style>
</style>