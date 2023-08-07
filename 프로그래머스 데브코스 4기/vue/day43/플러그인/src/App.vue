<template>
  <h1>{{ msg }}</h1>
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
      msg: 'Hello Vue!'
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const res = await this.$myName('https://jsonplaceholder.typicode.com/todos/1')
      console.log(res, 'Done!')
    }
  }
}
</script>

<style>
h1 {
  color:rgb(117, 130, 126);
}
</style>

