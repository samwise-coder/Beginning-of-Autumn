<template>
  <div class="item-container">
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
        <li v-html="item.label"></li>
      </section>
      <template v-if="item[childsFieldName].length && item.isOpened">
        <tree-item
          :items="item[childsFieldName]"
          :label-field-name="labelFieldName"
          :childs-field-name="childsFieldName"
        />
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TreeItem",
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

    &::before {
      content: "";
      width: $union-item-padding-left;
      border-top: 1px dashed #000;
      position: absolute;
      left: 0;
    }
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
  }
}
</style>