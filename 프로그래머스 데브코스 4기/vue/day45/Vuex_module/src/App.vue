<template>
  <h1>{{ msg }}</h1>
  <h2>{{ storeMsg }} / {{ storeMessage }}</h2>
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
  computed: {
    storeMsg() {
      return this.$store.state.msg
    }, 
    storeMessage() {
      return this.$store.state.message.message
    }
  }
}
</script>

<style>
h1 {
  color:rgb(80, 81, 80);
}

h2 {
  color:blueviolet
}
</style>

