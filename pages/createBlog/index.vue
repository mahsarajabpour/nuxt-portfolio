<template>
  <div class="create-blog">
    <div class="title">
      <p>Create Blog</p>
      <pre>
        <NuxtLink to="/">Home</NuxtLink>   /   <NuxtLink v-if="this.$route.query.paramsId" :to="'/blogs/' + this.$route.query.paramsId">Blogs</NuxtLink>
      </pre>
    </div>
    <div class="container center">
      <div class="col-md-8">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "createBlog",
}
</script>

<style scoped>

</style>
