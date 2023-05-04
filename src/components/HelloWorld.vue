<template>
  <div>
    <x-tree :items="testData" searchable />
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
      ],
    };
  },
};
</script>

<style>
</style>