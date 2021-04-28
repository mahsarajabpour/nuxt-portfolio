<template>
  <div class="blog-view">
      <div class="title">
        <p>Blog</p>
        <pre>
          <NuxtLink to="/">Home</NuxtLink>   /   <NuxtLink
          :to="'/blogs/ '+ this.$route.query.paramsId">Blogs
         </NuxtLink>
      </pre>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <article class="blog-card entry">
              <img :src="image"
                   alt="blog"
                   class="card-img"/>
              <div class="article-body row">
                <div class="col">
                  <h2>{{ blog.title }}</h2>
                  <ul class="row">
                    <li>
                      <i class="fas fa-user pr-1"></i>
                      {{ blog.writer }}
                    </li>
                    <li>
                      <i class="far fa-clock pr-1"></i>{{ date }}
                    </li>
                    <li>
                      <a href="#comments">
                        <i class="far fa-comment-dots pr-1"></i>
                        Comments
                      </a>
                    </li>
                  </ul>
                  <div class="article-content">
                    <p>{{ blog.content }}</p>
                    <hr/>
                    <ul class="row key-word"><i class="fas fa-tags pr-3"></i>
                      <li v-for="category in blog.categories" :key="category"> {{ category }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
            <div class="user-comments" id="comments">
              <h4>8 comments</h4>
              <div class="comment" v-for="n in 8" :key="n">
                <img :src="image"
                     alt="blog"
                     class="avatar"/>
                <div class="row">
                  <h5>{{fullName}}</h5>
                  <p><i class="fas fa-reply"></i> Reply</p>
                </div>
                <time class="date">{{date}}</time>
                <p class="message">{{sentences}}</p>
              </div>
            </div>
            <div class="reply entry">
              <!--            {renderReply()}-->
            </div>
          </div>
          <div class="col-lg-4">
            <div class="search-panel entry">
              <h3 class="search-title ">Search</h3>
              <div class="search-bar d-flex justify-content-center">
                <input type="text"/>
                <button class="my-btn"><i class="fas fa-search"></i></button>
              </div>
              <div class="categories">
                <h3>Categories</h3>
                <ul>
                  <li><a href="/">General <span>(15)</span></a></li>
                  <li><a href="/">Lifestyle <span>(14)</span></a></li>
                  <li><a href="/">Travel<span>(8)</span></a></li>
                  <li><a href="/">Design<span>(12)</span></a></li>
                  <li><a href="/">Creative<span>(5)</span></a></li>
                  <li><a href="/">Education<span>(10)</span></a></li>
                </ul>
              </div>
              <div class="recent-posts">
                <h3>Recent Posts</h3>
                <ul>
                  <!--                {renderRecentPosts()}-->
                </ul>
              </div>
              <div class="tags">
                <h3>Tags</h3>
                <ul>
                  <li><a href="/">front-end</a></li>
                  <li><a href="/">It</a></li>
                  <li><a href="/">react.js</a></li>
                  <li><a href="/">mac</a></li>
                  <li><a href="/">vuejs</a></li>
                  <li><a href="/">javaScript</a></li>
                  <li><a href="/">computer</a></li>
                  <li><a href="/">git</a></li>
                  <li><a href="/">back-end</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import faker from "faker/locale/en";

export default {
  name: "Blog",
  data() {
    return {
      image: faker.image.image(),
      date: faker.date.past().getDate() + ' ' +
        faker.date.past().getMonth() + ' ' +
        faker.date.past().getFullYear(),
      sentences:faker.lorem.sentences(),
      fullName:faker.name.firstName() + ' ' + faker.name.lastName(),
      blog: []
    }
  },
  mounted() {
    this.getBlog()
  },
  methods: {
    async getBlog() {
      this.blog = this.$route.query.blog
    }
  }
}
</script>

<style scoped>


.blog-view img {
  max-width: 100%;
  height: auto;
  padding-bottom: 30px;
}

.blog-view .blog-card .article-body {
  padding: 20px;
}

.blog-view .blog-card .article-body h2 {
  font-size: 32px;
  line-height: 38px;
  color: #556270;
  transition: 0.3s;
  font-weight: bold;
  margin: 10px 0 20px 0;
  text-align: left;
}

.blog-view .blog-card .article-body h2:hover {
  color: #2abe8b;
  cursor: pointer;
}

.blog-view .blog-card .article-body ul {
  margin: 10px 0 20px 0;
  padding: 0;
}

.blog-view .blog-card .article-body ul li {
  list-style: none;
  padding-right: 15px;
  color: #a4afba;
  font-size: 14px;
  display: inline-block;
  line-height: 1;
  transition: 0.3s;
}
.blog-view .blog-card .article-body ul li a{
  color: #a4afba;
}

.blog-view .blog-card .article-body ul li:hover {
  cursor: pointer;
}

.article-content p {
  color: #444444;
  line-height: 24px;
  font-size: 15px;
  text-align: left;
}

.article-content .key-word {
  align-items: center;
  font-size: 14px;
  color: #a4afba;
  text-transform: capitalize;
}

.article-content .key-word li:hover {
  color: #2abe8b !important;
}

/*///*/
.user-comments h4 {
  font-weight: bold;
  color: #444444;
  text-align: left;
}

.blog-view .user-comments .comment {
  margin: 30px 0 80px 0;
  position: relative;
}

.blog-view .user-comments .comment .avatar {
  width: 55px;
  float: left;
}

.blog-view .user-comments .comment div {
  margin-left: 5rem;
  margin-bottom: 2px;
  color: #444444;
}

.blog-view .user-comments .comment div h5,
.blog-view .user-comments .comment div p {
  font-weight: bold;
  transition: 0.3s;
  margin: 0 20px 0 0;
}

.blog-view .user-comments .comment div p {
  color: #556270;
}

.blog-view .user-comments .comment div h5:hover,
.blog-view .user-comments .comment div p:hover {
  color: #2abe8b;
  cursor: pointer;
}

.blog-view .user-comments .comment .message {
  margin-left: 5rem;
  margin-bottom: 1rem;
  color: #444444;
  text-align: left;
}

.blog-view .user-comments .comment .date {
  margin-left: 5rem;
  display: block;
  font-size: 14px;
  color: #c1c8d0;
  margin-bottom: 5px;
  text-align: left;
}

.blog-view .reply .container {
  padding: 20px;
}

.blog-view .reply .container p {
  font-size: 14px;
  color: #444444;
}

.blog-view .reply .container .row {
  margin-bottom: 1rem;
  padding: 0 15px;
}

.blog-view .form-control::placeholder,
.blog-view .form-control {
  color: #495057a6;
  text-transform: capitalize;
  font-size: 14px;
}

.blog-view .form-control:focus {
  border-color: #2abe8b;
  box-shadow: 0 0 0 0.2rem rgba(61, 190, 139, 0.17)
}

.blog-view .reply .my-btn {
  background-color: #556270;
}

.blog-view .reply .my-btn:hover {
  background-color: #2abe8b;
}

/*///search*/
.blog-view .search-panel {
  padding: 38px;
}

.blog-view .search-panel h3 {
  font-weight: bold;
  color: #556270;
  font-size: 20px;
  margin-bottom: 20px;
}

.blog-view .search-panel .search-bar,
.blog-view .search-panel .categories,
.blog-view .search-panel .recent-posts,
.blog-view .search-panel .tags {
  margin-bottom: 40px;
}

.search-panel .search-bar .my-btn {
  border-radius: 0 6px 6px 0;
  width: 50px;
  background: #556270;
}

.search-panel .search-bar .my-btn:hover {
  background: #6b7b8d;
}

.search-panel .search-bar input {
  border-radius: 6px 0 0 6px;
  border: 1px solid #0000004f;
  padding: 10px;
  border-right: none;
}

.search-panel .search-bar input:focus {
  outline: none;
}

.blog-view ul {
  padding: 0;
}

.blog-view li {
  list-style: none;
  padding-bottom: 10px;
}

.blog-view .categories ul li a {
  text-decoration: none;
  color: #6b7b8d;
}

.blog-view .categories ul li a:hover {
  color: #2abe8b;
}

.blog-view .categories ul li a:hover span,
.blog-view .categories ul li span {
  color: #c1c8d0;
  font-size: 14px;
  padding-left: 5px;
}

/*////*/

.blog-view .recent-posts li {
  margin-bottom: 15px;
}

.blog-view .recent-posts img {
  width: 80px;
  padding: 0;
}

.blog-view .recent-posts p {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  padding-bottom: 8px;
}

.blog-view .recent-posts p:hover {
  cursor: pointer;
  color: #2abe8b;
}

.blog-view .recent-posts time {
  display: block;
  /*margin-left: 20px;*/
  font-style: italic;
  font-size: 14px;
  color: #c1c8d0;
}

.blog-view .tags ul li {
  display: inline-block;
}

.blog-view .tags ul li a {
  text-decoration: none;
  color: #96a2af;
  font-size: 14px;
  padding: 6px 14px;
  margin: 0 6px 8px 0;
  border: 1px solid #dee2e6;
  display: inline-block;
  border-radius: 4px;
  transition: 0.3s;
}

.blog-view .tags ul li a:hover {
  background-color: #2abe8b;
  color: #ffffff;
}

@media (max-width: 768px) {
  .blog-view .reply .container .row .reply-name {
    padding-bottom: 15px;
  }
}
</style>
