<template>
  <div>
    <h1>reg</h1>
    <self-vmodel v-on:focus="handle"></self-vmodel>
  </div>
</template>

<script>
import SelfVmodel from "../components/SelfVmodel";
import myMixin from "@/mixin/myMixin";
export default {
  mixins: [myMixin],
  components: {
    SelfVmodel,
  },
  data() {
    return {
      lovingVue: "true",
    };
  },
  methods: {
    handle() {
      console.log("999");
    },
  },
  mounted() {
    var str = "Vis9it Runoob!9 r|r9Unhahaha!";
    var n = str.replace(/^vis\d/i, "sss");
    console.log(n);
  },
};
</script>

<style>
</style>