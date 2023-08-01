<!-- App 컴포넌트 파일이다. -->
<template>
  <h1>
    {{ msg }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue~",
    };
  },
};
</script>

<style lang="scss">
$color: pink;
h1 {
  color: $color;
}
</style>
