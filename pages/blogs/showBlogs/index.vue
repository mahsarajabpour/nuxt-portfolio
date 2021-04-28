<template>
  <div v-if="decreasedBlogs.length!==0" class="col-md-12 blog">
    <div class="row">
      <div class="col-md-4" v-for="blog in decreasedBlogs" :key="blog.id">
        <div class="entry">
          <img :src="image"
               alt="blog"
               class="card-img"/>
          <div class="content col">
            <h2 class="blog-title text-left">
              <NuxtLink :to="'/blog/'+ blog.id">{{ blog.title }}</NuxtLink>
            </h2>
            <ul class="text-left">
              <li class="col">
                <v-icon small>mdi-account-circle</v-icon>
                <NuxtLink class="blog-writer" :to="'/blog/' + blog.id">{{ blog.writer }}</NuxtLink>
              </li>
              <li class="col">
                <v-icon small>mdi-calendar-month</v-icon>
                <NuxtLink :to="'/blog/'">{{ date }}</NuxtLink>
              </li>
            </ul>
            <p class="text-left">{{ blog.content }}</p>
            <div class="d-flex justify-content-start">
              <NuxtLink
                :to="{path:'/blog/' + blog.id,
                      query:{paramsId:paramsId,blog},

                     }"
                class="my-btn">read more</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="col-md-12">
    <div class="row">
      <div class="col mb-5" v-if="error"><p class="row justify-content-center">{{ error }}</p></div>
      <div class="col mb-5 loading" v-else>
        <p class="row justify-content-center">
          <i class="fa fa-spinner fa-spin p-1"/>
          Loading ...
        </p>
        <p class="row vpn">please connect to your vpn</p>
      </div>
    </div>
  </div>
</template>

<script>
import faker from "faker/locale/en";

export default {
  name: "index",
  props: ['error', 'decreasedBlogs', 'blogs'],

  data() {
    return {
      image: faker.image.image(),
      date: faker.date.past().getDate() + ' ' +
        faker.date.past().getMonth() + ' ' +
        faker.date.past().getFullYear(),
      paramsId:{}
    }
  },
  mounted() {
    this.asyncData();
  },
  // watch: {
  //   decreasedBlogs: (newDecBlogs, oldDecBlogs) => {
  //     console.log('mounted',newDecBlogs)
  //   }
  // },

  methods: {
    async asyncData() {
        this.paramsId =  this.$route.params.id
    }
  },
}
</script>

<style>
.blog .content {
  padding: 25px;
}

.blog .content h2 {
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  padding: 0;
  margin: 0 0 20px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.blog .content .blog-title a {
  color: #556270;
  transition: 0.3s;
}

.blog .content .blog-title a:hover {
  color: #2abe8b;
}

.blog .content ul {
  display: flex;
  padding: 0;
}

.blog .content ul li i {
  padding: 0.25rem 0.25rem 0.25rem 0;
}


.blog .content ul li,
.blog .content ul li a {
  list-style: none;
  padding: 0;
  color: #a4afba;
  font-size: 14px;
  line-height: 1;
}

.blog .entry .content p {
  color: #444444;
  line-height: 24px;
  font-size: 15px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.blog .blog-writer {
  overflow: hidden;
  /*text-overflow: ellipsis;*/
  white-space: nowrap;
}

.loading {
  font-size: 26px;
  color: #556270;
  margin-bottom: 50px;
}

.loading .vpn {
  justify-content: center;
  font-size: 0.9rem;
  text-align: center;
}

.blog .my-btn {
  line-height: 1;
}


@media (max-width: 1024px ) and (min-width: 768px) {
  .blog .content ul {
    flex-direction: column;
  }

  .blog .content ul li {
    margin-top: 10px;
  }
}

@media (max-width: 450px) {
  .blog .content ul {
    flex-direction: column;
  }

  .blog .content ul li {
    margin-top: 10px;
  }
}
</style>
