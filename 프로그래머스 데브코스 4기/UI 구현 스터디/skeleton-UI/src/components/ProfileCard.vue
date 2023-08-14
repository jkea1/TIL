<script>
  import { ref } from 'vue';

  const loadUserDate = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          name: 'Ea Jung', 
          pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QBKEE_Tr9Nle10RQAhK7csIJMbJCZ_zBeXrDdQ_eBNAFNFIfZFhq_QDDGXSgJBeXXSo&usqp=CAU',
          bio: 'I would introduce myself in seven words. Passionate coder, responsible father, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely. Do you want me to talk about my coding skills and experience now, or will we discuss it later in the interview?'
        })
    }, 2000)
    })
  }

  export default {
    async setup () {
      const userData = ref(await loadUserData())

      return {
        userData
      }
    }
  }
</script>

<template>
  <div class = "profile-card">
    <div class = "profile-image">
      <img :src="userData.pic">
    </div>
    <div class = "profile-info">
      <span>Written By</span>
      <h3>{{ userData.name }}</h3>
      <p>{{ userData.bio }}</p>
    </div>
  </div>
</template>



<style scoped lang="scss">

</style>
