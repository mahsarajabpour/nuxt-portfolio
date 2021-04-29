<template>
  <v-app class="portfolio">
    <Title :titleName="'Portfolio'"/>

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-container>
            <div class="col-md-12 align-items-center">
              <ul class="row portfolio-header justify-content-center">
                <li><a class="active" href="/">All</a></li>
                <li><a :href="'/portfolio/'">app</a></li>
                <li><a :href="'/portfolio/'">card</a></li>
                <li><a :href="'/portfolio/'">web</a></li>
              </ul>
              <v-row class="portfolio-content">
                <div class="col-md-4 sample-work mt-4" v-for="repo in repos" :key="repo.id">
                  <div class="w-auto sample-work-content ">
                    <v-img alt="This is pic of video." :src="image" class="sample-work-img">
                    </v-img>
                    <div class="sample-work-info ">
                      <p>{{ repo.name }}</p>
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        Open Dialog
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-row>
              <v-row justify="center" class="portfolio-footer">
                <pagination :pageCount="pageCount"
                            :pageId="paramsId"
                            :hrefLinkName="'portfolio'"
                />
              </v-row>
            </div>
          </v-container>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Use Google's location service?</span>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante
            impen. Feugiat metus sit nec in aliquet amet, porttitor pre
            +
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Disagree
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>


<script>
import faker from 'faker/locale/en'
import Pagination from "@/components/pagination";
import Title from '@/components/title'
import axios from "axios";

export default {

  name: "portfolio-id",
  components: {Pagination, Title},
  data() {
    return {
      image: faker.image.image(),
      repos: [],
      pageCount: 0,
      check: false,
      dialog: false,
      paramsId: 0
    }
  },
  mounted() {
    this.asyncData()
    this.getRepo()
  },
  methods: {
    async asyncData() {
      this.paramsId = parseInt(this.$route.params.id)
    },
    getRepo() {
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
  }
}
</script>

<style scoped>

.title {
  margin: 0 0 88px 0;
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

.sample-work-info p {
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
  /*display: flex;*/
  /*justify-content: center;*/
}
</style>
