<template>
  <VueSlickCarousel class="slider" v-bind="settings">
    <div class="carousel-item">
      <img class="d-block w-100" src="~assets/image/slider/3.jpg" alt="First slide">
      <div class="carousel-caption d-none d-sm-block">
        <h2>Welcome</h2>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button class="btn btn-read-more">Read more</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="~assets/image/slider/6.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-sm-block">
        <h2>Welcome</h2>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button class="btn btn-read-more">Read more</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="~assets/image/slider/7.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-sm-block">
        <h2>Welcome</h2>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button class="btn btn-read-more">Read more</button>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "index",
  components: {VueSlickCarousel},
  data() {
    return {
      settings: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "speed": 2000,
        "arrows": true,
        "autoplay":true,
        "pause-hover":false,
        "autoplaySpeed":4500,
        "interval":10000
      }
    }
  }
}
</script>

<style>

.slick-slider {
  position: relative;
}

.slick-next {
  display: block;
  position: absolute;
  right: 120px;
  z-index: 1;
}

.slick-prev {
  display: block;
  position: absolute;
  left: 120px;
  z-index: 1;
}

.slick-next::before {
  color: white;
}

.slick-disabled::before {
  color: white;

}

.slick-prev::before {
  color: white;
}

.slick-dots {
  display: block;
  position: absolute;
  top: 320px;
}

.slick-dots li.slick-active button::before {
  color: #ffffff;
}

.slick-dots li button::before {
  color: white;
}

/*////*/

 .carousel-item img {
  filter: brightness(50%);
}

.slick-slider .slick-active .carousel-caption {
  position: absolute;
}

 .carousel-caption h2 {
  position: relative;
  display: none;
  font-size: 3vw;
  font-weight: bolder;
}

 .carousel-caption p {
  position: relative;
  display: none;
  font-size: 1.5vw;
}

 .carousel-caption .btn-read-more {
  position: relative;
  display: none;
  background-color: #2abe8b;
  color: white;
  font-size: 1vw;
}

 .slick-active .carousel-caption h2 {
  animation-name: h2;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  display: revert;
}

.slick-active .carousel-caption p {
  animation-name: p;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  display: revert;
}

.slick-active .btn-read-more {
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
  .slider{
    margin-top: 93px;
  }
}
@media (max-width: 192px) {
  .slider{
    margin-top: 133px;
  }
}
</style>
