<template>
  <div class="create-blog">
    <Title :titleName="'Create Blog'" :paramsId="this.$route.query.paramsId" :backLink="'blogs'"/>
    <div class="container center">
      <div class="col-md-8">
        <div class="row main-form  d-flex justify-content-center">
          <form class="col-md-10 create-blog-body" onSubmit="postBlog">
            <div class="pb-3">
              <input type="text"
                     class="form-control"
                     placeholder="title"/>
            </div>
            <div class="pb-3">
              <textarea class="form-control" cols="30" rows="7"
                        placeholder="please enter your content">
              </textarea>
            </div>
            <div class="pb-3">
              <label class="m-0 pt-2 pb-2">select categories :</label>
              <div class="form-check p-0">
                <label>
                  <input type="checkbox"
                         name="front-end"
                  />
                  <span class="label-text">front-end</span>
                </label>
                <label>
                  <input type="checkbox"
                         name="back-end"
                  /> <span
                  class="label-text">back-end</span>
                </label>
                <label>
                  <input type="checkbox"
                         name="react.js"
                  /> <span
                  class="label-text">react.js</span>
                </label>
                <label>
                  <input type="checkbox"
                         name="seo"
                  /> <span
                  class="label-text">seo</span>
                </label>
                <label>
                  <input type="checkbox"
                         name="vue.js"
                  /> <span
                  class="label-text">vue.js</span>
                </label>

              </div>
            </div>
            <hr/>
            <div class="main-form p-4">
              <h4 class="mb-5">Preview</h4>
              <!--              {props.submit &&-->
              <div class="">
                <label class="m-0  pb-2">writer :</label><span class="pr-3"></span>
                <p class="d-inline-block"></p>
              </div>
              <!--              }-->
              <div class="">
                <label class="m-0  pb-2">title :</label><span class="pr-3"></span>
                <p class="d-inline-block"></p>
              </div>
              <div class="">
                <label class="m-0  pb-2">content :</label><span class="pr-3"></span>
                <p class="d-inline-block"></p>
              </div>
              <div class="">
                <label class="m-0 pb-2">categories :</label><span class="pr-3"></span>
                <p class="d-inline-block"></p>
              </div>
            </div>
            <!--            {!props.submit &&-->
            <div>
              <div class="row justify-content-center">
                <button type="submit" class="my-btn pr-5 pl-5 font-weight-bold disabled-Btn">post
                </button>
              </div>
              <div class="row justify-content-center mt-1">
                <p class="alert-danger p-1">for posting a blog , you should login first!</p>
              </div>
            </div>
            <!--            }-->
            <!--            {props.submit &&-->
            <div class="row justify-content-center">
              <button type="submit" class="my-btn pr-5 pl-5 font-weight-bold">post</button>
            </div>
            <!--            }-->

          </form>
        </div>
        <!--        <div v-else class="row main-form center alert-success">-->
        <!--          <div class="col-md-8 create-blog-body  ">-->
        <!--            <p class="row">your blog was successfully send!</p>-->
        <!--            <div class="row center">-->
        <!--              <NuxtLink class="my-btn pr-3 pl-3" to="/blogs/1">back</NuxtLink>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->

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

.create-blog .main-form .create-blog-body {
  padding: 50px;
}

.create-blog .form-control::placeholder,
.create-blog .form-control {
  color: #495057a6;
  text-transform: capitalize;
  font-size: 14px;
}

.create-blog .form-control textarea {
  overflow: auto;
}

.create-blog .form-control:focus {
  border-color: #2abe8b;
  box-shadow: 0 0 0 0.2rem rgba(61, 190, 139, 0.17)
}

/*/////*/
/*Check box*/

.create-blog label {
  position: relative;
  cursor: pointer;
  color: #495057a6;
  font-size: 16px;
  margin-right: 7px;
}

.create-blog input[type="checkbox"] {
  position: absolute;
  right: 9000px;
}

.create-blog input[type="checkbox"] + .label-text:before {
  content: "\f111";
  font-family: 'Font Awesome 5 Free';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  width: 1em;
  display: inline-block;
  margin-right: 2px;
}

.create-blog input[type="checkbox"]:checked + .label-text:before {
  content: "\f058";
  font-family: 'Font Awesome 5 Free';

  color: #2abe8b;
  animation: effect 250ms ease-in;
}

@keyframes effect {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(0.25);
  }
  75% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

/*///*/

.create-blog .alert-success p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #444444;
  justify-content: center;
}

.create-blog .alert-success .my-btn:hover {
  text-decoration: none;
}

.create-blog .main-form .main-form {
  background-color: #a5f3d814;
  margin: 50px 0;
}

.create-blog .main-form .main-form h4 {
  color: #495057a6;
  font-weight: bold;
}

.create-blog .main-form .main-form label {
  cursor: auto;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
}

.create-blog .main-form .main-form p {
  color: #495057a6;
}
</style>
