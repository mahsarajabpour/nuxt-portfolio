<template>
  <div v-if="decreasedBlogs" class="col-md-12 blog">
    <div class="row">
      <div class="col-md-4" v-for="blog in decreasedBlogs" :key="blog.id">
        <div class="entry">
          <img :src="image"
               alt="blog"
               class="card-img"/>
          <div class="content">
            <h2 class="blog-title">
              <NuxtLink :to="'/blog/'+ blog.id">{{ blog.title }}</NuxtLink>
            </h2>
            <ul>
              <li class="col"><i class="fas fa-user"></i>
                <NuxtLink :to="'/blog/' + blog.id">{{ blog.writer }}</NuxtLink>
              </li>
              <li class="col"><i class="far fa-clock"></i>
                <NuxtLink :to="'/blog/'">{{ date }}</NuxtLink>
              </li>
            </ul>
            <p>{{ blog.content }}</p>
            <NuxtLink :to="'/blog/'" class="my-btn">read more</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="col mb-5" v-if="error"><p class="row justify-content-center">{{ error }}</p></div>
    <div class="col mb-5 loading" v-else>
      <p class="row justify-content-center"><i class="fa fa-spinner fa-spin p-1"/> Loading ...</p>
      <p class="row vpn">please connect to your vpn</p>
    </div>
  </div>
</template>

<script>
import faker from "faker/locale/en";

export default {
  name: "index",
  props: ['error', 'decreasedBlogs', 'blogs'],
  mounted() {

  },
  data() {
    return {
      // mahsa:null,
      image: faker.image.image(),
      date: faker.date.past().getDate() + ' ' +
        faker.date.past().getMonth() + ' ' +
        faker.date.past().getFullYear(),
      randomViews: faker.random.number({'min': 10, 'max': 5000})
    }
  },
  watch: {
    // decreasedBlogs: (newDecBlogs, oldDecBlogs) => {
    //   let showResult
    //   // console.log('mounted',this.mahsa,this.decreasedBlogs)
    //   if (this.blogs.length !== 0 && !this.error) {
    //     if (this.searchResults.length > 0) showResult = this.searchResults
    //     else showResult = this.decreasedBlogs
    //   }
    //   return showResult
    // }
  },
}
</script>

<style scoped>

</style>
