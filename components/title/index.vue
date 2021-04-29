<template>
  <div class="title">
    <p>{{ titleName }}</p>
    <div v-if="paramsId">
      <pre><NuxtLink to="/">Home</NuxtLink>   /   <NuxtLink :to="'/'+backLink+'/' + paramsId">Blogs</NuxtLink></pre>
    </div>
    <div v-else>
      <pre><NuxtLink to="/">Home</NuxtLink>   /   {{ titleName }}</pre>
    </div>
  </div>

</template>

<script>
export default {
  name: "index",
  props: ['titleName', 'paramsId', 'backLink']
}
</script>

<style scoped>

</style>
