<template>
  <h1>
    {{ msg }}
    <Hello />
  </h1>
</template>

<script>
import Hello from "~/components/Hello";

export default {
  components: {
    Hello: Hello,
  },
  data() {
    return {
      msg: "Hello Webpack?..",
    };
  },
};
</script>

<style>
h1 {
  color: pink;
}
</style>
