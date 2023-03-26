<template>
  <div class="wrapper">
    <p>
      This example requires you to enter commands in your browser's JavaScript
      console (see
      <a
        href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools"
        >What are browser developer tools</a
      >
      for more information).
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      var person = {
        name: ["Bob", "Smith"],
        age: 32,
        gender: "male",
        interests: ["music", "skiing"],
        bio: function () {
          alert(
            this.name[0] +
              " " +
              this.name[1] +
              " is " +
              this.age +
              " years old. He likes " +
              this.interests[0] +
              " and " +
              this.interests[1] +
              "."
          );
        },
        greeting: function () {
          alert("Hi! I'm " + this.name[0] + ".");
        },
      };
      person.name[0];
      person.age;
      person.interests[1];
      person.bio();
      person.greeting();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
