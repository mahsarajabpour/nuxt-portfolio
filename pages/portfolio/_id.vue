<template>
  <v-app class="portfolio">
    <Title :titleName="'Portfolio'"/>
    <v-container>
      <div class="col-md-12">
        <ul class="row portfolio-header justify-content-center">
          <li><NuxtLink active-class="active" :to="'/portfolio/1'">All</NuxtLink></li>
          <li><NuxtLink :to="'/portfolio/1'">app</NuxtLink></li>
          <li><NuxtLink :to="'/portfolio/1'">card</NuxtLink></li>
          <li><NuxtLink :to="'/portfolio/1'">web</NuxtLink></li>
        </ul>
        <v-row class="portfolio-content " justify="center">
          <v-dialog
            class="p-0"
            v-model="dialog"
            width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-row class="portfolio-content">
                <div class="col-md-4 sample-work mt-4" v-for="repo in repos" :key="repo.id">
                  <div class="w-auto sample-work-content ">
                    <v-img alt="This is pic of video." :src="image" class="sample-work-img">
                    </v-img>
                    <div class="sample-work-info ">
                      <v-btn
                        class="more-info text-white"
                        v-bind="attrs"
                        v-on="on"
                        plain
                        x-large
                        light
                        color="white"
                        @click="setRepo(repo)">
                        {{ repo.name }}
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-row>
            </template>
            <Modal :repo="repo" @dialog="dialog=$event"/>
          </v-dialog>
        </v-row>
        <v-row class="portfolio-footer" justify="center">
          <pagination :pageCount="pageCount"
                      :pageId="paramsId"
                      :hrefLinkName="'portfolio'"
          />
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import faker from 'faker/locale/en'
import Pagination from "@/components/pagination";
import Title from '@/components/title'
import axios from "axios";
import Modal from '@/components/modal'

export default {
  name: "portfolio-id",
  components: {Pagination, Title, Modal},
  data() {
    return {
      image: faker.image.image(),
      repos: [],
      pageCount: 0,
      check: false,
      dialog: false,
      paramsId: 0,
      repo: false
    }
  },
  mounted() {
    this.asyncData()
    this.getRepos()
    this.addRepoDescription()
  },
  methods: {
    async asyncData() {
      this.paramsId = parseInt(this.$route.params.id)
    },
    async getRepos() {
      axios.get('https://api.github.com/users/mahsaaarajabpour/repos').then(res => {
        this.repos = res.data;
        console.log('repos', res.data)
        if (!this.check && res.data.length > 0) {
          this.pageCount = Math.ceil(res.data.length / 6)
          this.check = true
        }
      }).catch(err => {
        console.log(err)
      })
    },
    async setRepo(value) {
      this.repo = value
    },
    addRepoDescription(){

    }
  },
  watch: {
    repos(value){
      for (let i=0; i<this.repos.length;i++){
        switch (this.repos[i].name){
          case "simple-vue.js-website":
            this.repos[i].myDescription='This project is a simple website based on vue.js and vuex.'
            break

          case "nuxt-project":
            this.repos[i].myDescription='This project is a simple website based on nuxt.js'
            break

          case "nuxt-portfolio":
            this.repos[i].myDescription='This is the current project. ' +
              'I create this, to show all of my projects that is in github.' +
              'This project uses firebase for database and debouncing for search blogs that user created in add-blog page.'
            break

          case "animated-styles":
            this.repos[i].myDescription='This project is based on JavaScript and Html/CSS.' +
              'I tried to create special and interesting styles.'
            break;

          case "attendance-system":
            this.repos[i].myDescription='This is an attendance system base on React.js.' +
              'You can add your start-time / end-time of your work after logging in.' +
              'This is disabled for the holiday.'
            break

          case "my-react-website":
            this.repos[i].myDescription='This project is exactly the same as the current project.\n' +
              '      The only difference is using React.js instead of Vue.js\n' +
              '      This project uses firebase for database and debouncing for search blogs that user created in add-blog page.'
            break
        }
      }
    }
  }
}
</script>

<style scoped>

.title {
  margin: 0 0 88px 0;
  font-size:1em !important;
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
  align-items: center;
  text-align: center;
  transition: .5s ease;
  z-index: -1;
  font-size: x-large;
  font-weight: bold;
  position: absolute;
  top: 45%;
  padding: 0 10px;
}

.sample-work-info .more-info {
  margin: 0;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
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
}
</style>
