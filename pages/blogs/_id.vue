<template>
  <div class="blogs-view">
    <div class="title">
      <p>Blogs</p>
      <pre>
          <NuxtLink to="/">Home</NuxtLink>   /   Blogs
      </pre>
    </div>

    <div class="container">
      <div class="col-md-12">
        <SearchBar :blogs="blogs"/>
        <!--                         :showResults="getResults"-->
        <!--                         showResults={(results,error)=>getResults(results,error)}-->

        <div class="row blogs-header justify-content-between">
          <h5>
            <NuxtLink
              :to="{path:'/createBlog', query:{paramsId:this.$route.params.id}}">
              <i class="fas fa-edit"></i>click to create new blog
            </NuxtLink>
          </h5>
          <p>page {{ this.$route.params.id }} of {{ blogPageCount }}</p>
        </div>
        <div class="row blogs-content">
          <ShowBlogs :paramsId="parseInt(this.$route.params.id)"
                     :blogs="blogs"
                     :error="error"
                     :decreasedBlogs="decreasedBlogs"
          />
          <!--            searchResults={searchResults}-->
        </div>

        <div class="row blogs-footer">
          <Pagination :pageCount="blogPageCount"
                      :pageId="parseInt(this.$route.params.id)"
                      :hrefLinkName="'blogs'"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/pagination'
import ShowBlogs from '@/pages/blogs/showBlogs'
import SearchBar from '@/pages/blogs/searchBar'
import axios from "axios";

export default {
  name: "blogs-id",
  components: {Pagination, ShowBlogs, SearchBar},
  data() {
    return {
      blogs: [],
      decreasedBlogs: [],
      blogPageCount: null,
      checked: false,
      pageSize: 6,
      searchResults: [],
      error: ''
    }
  },
  mounted() {
    this.getBlogs()
  },
  computed: {},
  updated() {
    this.decreasedBlog()
  },
  methods: {
    async getBlogs() {
      return await axios.get('https://my-shop-react-cdca2-default-rtdb.firebaseio.com/blog.json')
        .then(res => {
          for (let key in res.data) {
            res.data[key].id = key
          }
          this.blogs = Object.keys(res.data).map((key) => res.data[key])
          this.blogPageCount = Math.ceil(this.blogs.length / 6)
        })
        .catch(err => {
          console.log(err)
        })
    },
    decreasedBlog() {
      const nowPSize = this.$route.params.id * this.pageSize;
      const firstVideoNumArray = nowPSize - this.pageSize;
      if (this.blogs.length !== 0) {
        if (this.checked === false) {
          this.decreasedBlogs = this.blogs.slice(firstVideoNumArray, nowPSize)
          this.checked = true
        }
      }
    },
    getResults(results, error) {
      this.searchResults = results
      this.error = error
    },

  },
}
</script>

<style>
.blogs-view .blogs-header {
  padding: 15px 15px 40px 15px;
}

.blogs-view .blogs-header a {
  color: #556270;
  font-weight: bold;
  text-transform: capitalize;
  transition: 0.3s;
}

.blogs-view .blogs-header a:hover {
  color: #2abe8b;
}


.blogs-view a:hover {
  text-decoration: none;
}

.blogs-view .title {
  margin: 78px 0 100px 0;
}

/*/////search*/

.blogs-view .search-panel {
  margin-bottom: 40px;
}

.blogs-view .search-panel .search-bar .my-btn {
  width: 80px;
}


.blogs-view .search-bar #search-bar-blogs {
  border-radius: 6px;
  border: 1px solid #0000004f;
  padding: 10px;
}

.search-panel .search-bar #search-bar-blogs:focus {
  outline: none;
}

/*/////*/
.blogs-footer {
  padding: 15px;
  display: flex;
  justify-content: center;
}


</style>
