<template>
  <div class="">
    <Slider/>
    <div class="container login center">
      <div class="col-lg-6 col-md-6 col-sm-10 p-0 main-form">
        <div class="form-header ">
          <p>Sign In</p>
        </div>
        <div class="center">
          <form class="col-10 login-body" onSubmit={signIn}>
<!--            {(emailVerify === false || emailVerify === false) &&-->
            <p class="alert-danger text-center text-danger"> incorrect data </p>
<!--            }-->

            <div class="form-group input-group">
              <input class="form-control" type="email"
                     placeholder="email" required
              />
            </div>

            <div class="form-group input-group">
              <input class="form-control" type="password"
                     placeholder="password" required
              />
            </div>

            <div class="form-group m-3 center">
              <button type="submit" class="my-btn col-lg-6 col-md-6 col-sm-6">Login
              </button>
            </div>
          </form>
        </div>
        <div class="form-footer d-flex flex-column align-items-center">
          <p>Don't have an account?<a href="/signUp">Sign Up</a></p>
          <NuxtLink class="" to="/sign-up">Forgot password?</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/slider'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

// import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name:"login",
  components:{Slider}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}


/*///*/
.login .form-header{
  border-radius:10px 10px 0 0;
  background-color: #c7f1e240;
  border-bottom: 1px solid #8e8e8e2b;
  padding: 1rem 1rem 1rem 2rem;
}
.login .form-header p{
  padding: 0;
  margin: 0;
}

.login .login-body {
  margin: 10px;
  padding: 40px 20px;
}

.login input {
  background-color: #f6f6f6;
  border-radius: 6px;
  text-align: center;
  outline: none;
  height: 3.25rem;
}

.login .form-footer {
  padding: 30px 0;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  border-top: 1px solid #dce8f1;
  border-radius: 0 0 10px 10px;
}

.login .form-footer a {
  text-decoration: none;
}
/*///*/

/*slider*/




.carousel-indicators .active {
  background-color: #2abe8b;
}

.carousel-indicators li {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50px !important;
  border: none !important;
}

.carousel-inner .carousel-item img {
  filter: brightness(50%);
}

.carousel-inner .carousel-item .active .carousel-caption {
  position: absolute;
}

.carousel-inner .carousel-caption h2 {
  position: relative;
  display: none;
  font-size: 3vw;
  font-weight: bolder;
}

.carousel-inner .carousel-caption p {
  position: relative;
  display: none;
  font-size: 1.5vw;
}

.carousel-inner .carousel-caption .btn-read-more {
  position: relative;
  display: none;
  background-color: #2abe8b;
  color: white;
  font-size: 1vw;
}

.carousel-inner .active .carousel-caption h2 {
  animation-name: h2;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  display: revert;
}

.carousel-inner .active .carousel-caption p {
  animation-name: p;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  display: revert;
}

.carousel-inner .active .carousel-caption .btn-read-more {
  animation-name: btn;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  display: revert;
}

@keyframes h2 {
  0% {
    opacity: 0;
    bottom: 10vw;
  }
  50% {
    opacity: 40%;

  }
  100% {
    bottom: 2vw;
  }
}

@keyframes p {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    top: 2vw;
  }
  100% {
    top: -2vw;
  }
}

@keyframes btn {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
    top: 2vw;
  }
  100% {
    top: -2vw;
  }
}
@media (max-width: 991px) {
  .slide{
    margin-top: 93px;
  }
}
@media (max-width: 192px) {
  .slide{
    margin-top: 133px;
  }
}
</style>
