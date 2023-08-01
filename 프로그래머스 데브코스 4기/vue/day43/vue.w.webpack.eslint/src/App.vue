<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Webpack!',
    }
  },
  methods: {
    log() {
      window.addEventListener()
      document.queryElector()
    }
  }
}
</script>

<style>
h1 {
  color: pink;
}
</style>
