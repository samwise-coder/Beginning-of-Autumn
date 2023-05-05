<template>
  <div class="tree-container">
    <input
      v-if="searchable"
      type="text"
      class="searchBox"
      v-model.trim="searchText"
    />
    <tree-item
      v-for="(item, index) in items"
      :key="index"
      :items="item"
      :label-field-name="labelFieldName"
      :childs-field-name="childsFieldName"
    ></tree-item>
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
    searchable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    switcher() {
      return {
        switch: true,
      };
    },
    collapser() {
      return {
        collapse: true,
        expand: false,
      };
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  watch: {
    searchText: {
      handler(val) {
        if (val) {
          this.hightLight(true, this.items, new RegExp(val, "gi"));
        } else {
          this.hightLight(false, this.items, null);
        }
      },
    },
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
          this.isOpened = it["isOpened"] || true;
          this.isShow = it["isShow"] || true;
        }
      }
      let node = Object.assign(
        new Node(item, this.labelFieldName, this.childsFieldName),
        item
      );
      return node;
    },
    hightLight(isHightLight, arr, reg) {
      arr.forEach((ele) => {
        ele[this.labelFieldName] = ele[this.labelFieldName].replace(
          /<span style=color:yellow>|<\/span>/g,
          ""
        );
        if (isHightLight) {
          ele[this.labelFieldName] = ele[this.labelFieldName].replace(
            reg,
            "<span style=color:yellow>$&</span>"
          );
          if (reg.test(ele[this.labelFieldName])) {
            ele.isShow = true;
            console.log("finded", ele);
          }
        } else {
          ele.isShow = false;
        }
        if (ele[this.childsFieldName] && ele[this.childsFieldName].length) {
          this.hightLight(isHightLight, ele[this.childsFieldName], reg);
        }
      });
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
  .searchBox {
    width: 60%;
    margin: 10px;
  }
}
</style>
