<template>
  <div class="portfolio">
    <div class="title">
      <p>portfolio</p>
      <pre><NuxtLink to="/">Home</NuxtLink>   /   Portfolio</pre>
    </div>
    <div class="container">
      <div class="col-md-12">
        <ul class="row portfolio-header">
          <li><a class="active" href="/">All</a></li>
          <li><a :href="'/portfolio/'">app</a></li>
          <li><a :href="'/portfolio/'">card</a></li>
          <li><a :href="'/portfolio/'">web</a></li>
        </ul>
        <div class="row portfolio-content">
          <div class="col-md-4 sample-work mt-4" v-for="(i,n) in 9">
            <div class="w-auto sample-work-content ">
              <img :src="image"
                   class="sample-work-img"
                   alt="This is pic of video."/>
              <div class="sample-work-info ">
                <p>{{ date }}</p>
                <p>{{ randomViews }} views</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row portfolio-footer justify-content-center">
          <pagination :pageCount="3"/>
          <!--        <Pagination pageCount={pageCount}-->
          <!--                    pageId={props.match.params.id}-->
          <!--                    hrefLinkName="portfolio"-->
          <!--        />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faker from 'faker/locale/en'
import Pagination from "@/components/pagination";

export default {
  name: "portfolio-id",
  components: {Pagination},
  data() {
    return {
      image: faker.image.image(),
      date: faker.date.past().getDate() + ' ' +
        faker.date.past().getMonth() + ' ' +
        faker.date.past().getFullYear(),
      randomViews: faker.random.number({'min': 10, 'max': 5000})
    }
  }
}
</script>

<style scoped>
.portfolio-header {
  justify-content: center;
}

.portfolio-header li a {
  margin: 0 .3rem;
  padding: .4rem 1rem;
  border-radius: 2px;
  text-decoration: none;
  color: #444444;
  font-weight: 600;
  font-size: .9rem;
  text-transform: uppercase;
}

.portfolio-header li a:hover,
.portfolio-header li .active {
  background-color: #2abe8b;
  color: white;
  cursor: pointer;
}

.portfolio-header li:hover a {
  color: white;
}

/*////*/

.portfolio-content {
  margin: 1.5rem 0 4rem 0;
}

.sample-work-content {
  overflow: hidden;
  position: relative;
  border-radius: 5px;
}

.sample-work .sample-work-img {
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
}

.sample-work-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  transition: .5s ease;
  z-index: -1;
  position: absolute;
  top: 89%;
  padding: 0 10px;
}

.sample-work-info p {
  margin: 0;
  color: #ffffff;
  font-weight: bold;
}

.sample-work:hover .sample-work-img {
  filter: brightness(40%);
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5);
  cursor: pointer;
}

.sample-work:hover .sample-work-info {
  z-index: 1;
}


/*/////////*/
.portfolio-footer {
  padding: 15px;
  /*display: flex;*/
  /*justify-content: center;*/
}
</style>
