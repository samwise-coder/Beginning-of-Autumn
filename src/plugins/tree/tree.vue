<template>
  <div class="tree-container">
    <ul v-for="(item, index) in items" :key="index" class="group">
      <section class="row">
        <div
          v-if="item[childsFieldName].length"
          class="switch"
          @click="item.isOpened = !item.isOpened"
        >
          {{ item.isOpened ? "-" : "+" }}
        </div>
        <input type="checkbox" />
        <img src="@/assets/file.svg" />
        <li>{{ item.label }}</li>
      </section>
      <template v-if="item[childsFieldName].length && item.isOpened">
        <tree-item
          :items="item[childsFieldName]"
          :label-field-name="labelFieldName"
          :childs-field-name="childsFieldName"
        ></tree-item>
      </template>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import TreeItem from "./tree-item.vue";
export default {
  name: "x-tree",
  components: {
    TreeItem,
  },
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
  },
  methods: {
    initialize(arr) {
      arr.forEach((ele, index) => {
        arr[index] = Vue.observable(this.initializeItem(ele));
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
          this.isShow = it["isShow"] || true;
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
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
}
</style>
<style lang="scss" scoped>
$union-item-padding-left: 20px;

.tree-container {
  background-color: rgba(26, 172, 172, 0.448);
  width: 500px;
}

.group {
  padding-left: $union-item-padding-left;
  .row {
    display: flex;
    align-items: center;
    height: 48px;
    position: relative;
    padding-left: $union-item-padding-left;
    .switch {
      width: 16px;
      height: 16px;
      border: 1px solid #333;
      background-color: #fff;
      z-index: 10;
      border-radius: 4px;
      position: absolute;
      left: calc($union-item-padding-left/-2);
      text-align: center;
      &:hover {
        cursor: pointer;
      }
    }
    &::before {
      content: "";
      width: $union-item-padding-left;
      border-top: 1px dashed #000;
      position: absolute;
      left: 0;
    }
  }
}
</style>
