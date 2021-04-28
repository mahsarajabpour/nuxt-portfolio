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
              <div class="container ">
                <div class="col-md-12">
                  <h4 class="text-left pl-3">Leave a Reply</h4>
                  <p class="text-left pl-3">Your email address will not be published. Required fields are marked *</p>
                  <div class="row m-0">
                    <div class="col-md-6 form-group pl-0 reply-name">
                      <input class="form-control" type="text"
                             placeholder="your name"
                             required
                      />
                    </div>
                    <div class="col-md-6 form-group pl-0">
                      <input class="form-control"
                             type="email" placeholder="your Email"
                             required
                      />
                    </div>
                  </div>
                  <div class="row m-0">
                    <div class="col form-group pl-0">
                      <input class="form-control" type="text"
                             placeholder="your website"
                             required
                      />
                    </div>
                  </div>
                  <div class="row m-0">
                    <div class="col form-group pl-0 ">
                        <textarea class="form-control"
                                  placeholder="your comment"
                                  rows="5"
                                  required
                        ></textarea>
                    </div>
                  </div>
                  <div class="row m-0 send-message">
                    <button type="submit" class="my-btn">Post Comment</button>
                  </div>
                </div>

              </div>
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


 img {
  max-width: 100%;
  height: auto;
  padding-bottom: 30px;
}

 .blog-card .article-body {
  padding: 20px;
}

 .blog-card .article-body h2 {
  font-size: 32px;
  line-height: 38px;
  color: #556270;
  transition: 0.3s;
  font-weight: bold;
  margin: 10px 0 20px 0;
  text-align: left;
}

 .blog-card .article-body h2:hover {
  color: #2abe8b;
  cursor: pointer;
}

 .blog-card .article-body ul {
  margin: 10px 0 20px 0;
  padding: 0;
}

 .blog-card .article-body ul li {
  list-style: none;
  padding-right: 15px;
  color: #a4afba;
  font-size: 14px;
  display: inline-block;
  line-height: 1;
  transition: 0.3s;
}
 .blog-card .article-body ul li a{
  color: #a4afba;
}

 .blog-card .article-body ul li:hover {
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

 .user-comments .comment {
  margin: 30px 0 80px 0;
  position: relative;
}

 .user-comments .comment .avatar {
  width: 55px;
  float: left;
}

 .user-comments .comment div {
  margin-left: 5rem;
  margin-bottom: 2px;
  color: #444444;
}

 .user-comments .comment div h5,
 .user-comments .comment div p {
  font-weight: bold;
  transition: 0.3s;
  margin: 0 20px 0 0;
}

 .user-comments .comment div p {
  color: #556270;
}

 .user-comments .comment div h5:hover,
 .user-comments .comment div p:hover {
  color: #2abe8b;
  cursor: pointer;
}

 .user-comments .comment .message {
  margin-left: 5rem;
  margin-bottom: 1rem;
  color: #444444;
  text-align: left;
}

 .user-comments .comment .date {
  margin-left: 5rem;
  display: block;
  font-size: 14px;
  color: #c1c8d0;
  margin-bottom: 5px;
  text-align: left;
}

 .reply .container {
  padding: 20px;
}

 .reply .container p {
  font-size: 14px;
  color: #444444;
}

 .reply .container .row {
  margin-bottom: 1rem;
  padding: 0 15px;
}

 .form-control::placeholder,
 .form-control {
  color: #495057a6;
  text-transform: capitalize;
  font-size: 14px;
}

 .form-control:focus {
  border-color: #2abe8b;
  box-shadow: 0 0 0 0.2rem rgba(61, 190, 139, 0.17)
}

 .reply .my-btn {
  background-color: #556270;
}

 .reply .my-btn:hover {
  background-color: #2abe8b;
}

/*///search*/
 .search-panel {
  padding: 38px;
}

 .search-panel h3 {
  font-weight: bold;
  color: #556270;
  font-size: 20px;
  margin-bottom: 20px;
}

 .search-panel .search-bar,
 .search-panel .categories,
 .search-panel .recent-posts,
 .search-panel .tags {
  margin-bottom: 40px;
}

 .search-bar .my-btn {
  border-radius: 0 6px 6px 0;
  width: 50px;
  background: #556270;
}

 .search-bar .my-btn:hover {
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

 .categories ul li a {
  text-decoration: none;
  color: #6b7b8d;
}

 .categories ul li a:hover {
  color: #2abe8b;
}

 .categories ul li a:hover span,
 .categories ul li span {
  color: #c1c8d0;
  font-size: 14px;
  padding-left: 5px;
}

/*////*/

 .recent-posts li {
  margin-bottom: 15px;
}

 .recent-posts img {
  width: 80px;
  padding: 0;
}

 .recent-posts p {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  padding-bottom: 8px;
}

 .recent-posts p:hover {
  cursor: pointer;
  color: #2abe8b;
}

 .recent-posts time {
  display: block;
  font-style: italic;
  font-size: 14px;
  color: #c1c8d0;
}

 .tags ul li {
  display: inline-block;
}

 .tags ul li a {
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

 .tags ul li a:hover {
  background-color: #2abe8b;
  color: #ffffff;
}

@media (max-width: 768px) {
   .reply .container .row .reply-name {
    padding-bottom: 15px;
  }
}
</style>
