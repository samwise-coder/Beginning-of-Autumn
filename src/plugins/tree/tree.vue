<template>
  <div>
    <ul></ul>
  </div>
</template>

<script>
export default {
  name: "x-tree",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    labelFieldName: {
      type: String,
      default: "label",
    },
    childsFieldName: {
      type: String,
      default: "childs",
    },
  },
  data() {
    return {};
  },
  created() {
    this.initialize(this.items);
    console.log("初始化之后：", this.items);
  },
  methods: {
    initialize(arr) {
      arr.forEach((ele, index) => {
        arr[index] = this.initializeItem(ele);
        if (ele[this.childsFieldName] && ele[this.childsFieldName].length) {
          this.initialize(ele[this.childsFieldName]);
        }
      });
    },
    initializeItem(item) {
      class Node {
        constructor(it, customLabelFieldName, customChildsFieldName) {
          this.label = it[customLabelFieldName] || "";
          this.childs = it[customChildsFieldName] || [];
          this.value = it["value"] || "";
          this.isActived = it["isActived"] || false;
          this.isOpened = it["isOpened"] || false;
        }
      }
      let node = Object.assign(
        new Node(item, this.labelFieldName, this.childsFieldName),
        item
      );
      return node;
    },
  },
};
</script>

<style>
</style>