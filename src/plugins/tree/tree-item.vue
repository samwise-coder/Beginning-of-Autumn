<template>
  <li :class="itemContainer">
    <section
      class="row"
      draggable
      @dragstart="handelDragStart"
      @dragover.prevent="handleDragOver"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <div
        v-if="items[childsFieldName].length"
        class="switch"
        @click="items.isOpened = !items.isOpened"
      >
        {{ items.isOpened ? "-" : "+" }}
      </div>
      <input type="checkbox" />
      <slot name="icon" v-bind:item="items">
        <img src="@/assets/file.svg" />
      </slot>
      <li v-html="items.label"></li>
    </section>
    <template v-if="items[childsFieldName].length && items.isOpened">
      <ul
        v-for="(item, index) in items[childsFieldName]"
        :key="index"
        class="group"
      >
        <tree-item
          :items="item"
          :label-field-name="labelFieldName"
          :childs-field-name="childsFieldName"
        >
          <template v-slot:icon="slotProps">
            <slot name="icon" v-bind:item="slotProps.item">
              <img src="@/assets/file.svg" />
            </slot>
          </template>
        </tree-item>
      </ul>
    </template>
  </li>
</template>

<script>
export default {
  name: "TreeItem",
  props: {
    items: {
      type: Object,
      default: () => {},
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
  computed: {
    itemContainer() {
      return {
        "item-container": true,
      };
    },
  },
  methods: {
    handleDragEnter(e) {
      e.target.style.backgroundColor = "blue";
    },
    handleDragLeave(e) {
      e.target.style.backgroundColor = "";
    },
    handleDragOver(e) {
      console.log("drogover", e);
    },
    handleDrop(e) {
      console.log("drop", e);
      e.target.style.backgroundColor = "";
    },
    handelDragStart(e) {
      console.log("dragStart", e);
    },
  },
};
</script>

<style lang='scss' scoped>
$union-item-padding-left: 20px;

.tree-container {
  background-color: rgba(26, 172, 172, 0.448);
  width: 500px;
}
.group {
  padding-left: $union-item-padding-left;
  border-left: 1px dashed #000;
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
  .drawer {
    transition: height 3s ease-in-out;
    overflow: hidden;
  }
  .collapse {
    height: 0px;
  }
  .expand {
    height: 300px;
  }
}
</style>