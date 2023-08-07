<template>
  <h1>{{ msg }}</h1>
  <Hello />
  <button @click="increaseCount">
    Increase!
  </button>
  <World />
  <button @click="fetchTodo">
    Update Msg!!
  </button>
</template>

<script>
import Hello from '~/components/Hello'
import World from '~/components/World'

export default {
  components: {
    Hello, World
  },
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount')
    }, 
    fetchTodo() {
      this.$store.dispatch('fetchTodo')
    }
  }
}
</script>

<style>
h1 {
  color:rgb(80, 81, 80);
}
</style>

