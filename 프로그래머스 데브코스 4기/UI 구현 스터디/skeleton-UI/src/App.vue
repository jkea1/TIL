<script setup>
  import ProfileCard from '@/components/ProfileCard.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <ProfileCard />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style>

</style>
