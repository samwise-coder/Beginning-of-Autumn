<template>
  <div>
    <x-tree :items="testData" searchable>
      <template v-slot:icon="slotProps">
        <img :src="getIcon(slotProps)" />
      </template>
    </x-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testData: [
        {
          label: "叶子节点一",
          value: "",
          custom: "haha",
          childs: [
            {
              label: "子节点一",
            },
            {
              label: "子节点二",
              childs: [
                {
                  label: "孙节点一",
                },
                {
                  label: "孙节点er",
                },
              ],
            },
            {
              label: "子节点三",
            },
          ],
        },
        {
          label: "兄弟节点一",
        },
        {
          label: "兄弟节点二",
        },
      ],
    };
  },
  methods: {
    getIcon(paras) {
      //@/assets/expand.svg
      console.log(paras.item.label);
      if (paras.item.label === "子节点二") {
        return require("@/assets/expand.svg");
      } else {
        return require("@/assets/file.svg");
      }
    },
  },
};
</script>

<style>
</style>