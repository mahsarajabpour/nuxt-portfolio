<template>
  <div class="search-panel">
    <div class="search-bar d-flex justify-content-center">
      <input class="col-md-6 col-sm-8"
             id="search-bar-blogs"
             type="text"
             placeholder="search your blog"      />
    </div>
<!--    {loading === true &&-->
    <div class="col mb-5 loading">
      <p class="row justify-content-center"><i class="fa fa-spinner fa-spin p-1"/> </p>
    </div>
<!--    }-->
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
