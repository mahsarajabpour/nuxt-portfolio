<template>
  <div class="sign-up">
    <Title :titleName="'Signup'"/>
    <div class="container">
      <div class="row justify-content-center">
        <div v-if="!submitted" class="col-lg-6 col-md-6 col-sm-10 main-form ">
          <p v-if="existsUser" class="alert-danger text-center text-danger">email error</p>
          <form class="m-3" @submit.prevent="signUp">

            <!--        firstname-->
            <div class="form-group input-group">
              <div class="fix-input-icon">
                <span class="input-icon"> <v-icon small color="green ">mdi-account</v-icon> </span>
              </div>
              <input class="form-control"
                     placeholder="first name"
                     v-model="user.firstName"
                     type="text" required/>
            </div>

            <!--        lastname -->
            <div class="form-group input-group">
              <div class="fix-input-icon">
                <span class="input-icon"> <v-icon small color="green ">mdi-account</v-icon></span>
              </div>
              <input class="form-control"
                     placeholder="last name"
                     v-model="user.lastName"
                     type="text" required
              />
            </div>

            <!--        email-->
            <div class="form-group input-group">
              <div class="fix-input-icon">
                <span class="input-icon"><v-icon small color="green ">mdi-email</v-icon></span>
              </div>
              <input class="form-control"
                     placeholder="Email address"
                     v-model="user.email"
                     type="email" required
              />
            </div>

            <!--        password-->
            <div class="form-group input-group">
              <div class="fix-input-icon">
                <span class="input-icon"> <v-icon small color="green ">mdi-lock</v-icon> </span>
              </div>
              <input class="form-control"
                     placeholder="Create password"
                     v-model="user.password"
                     type="password" required
              />
            </div>

            <!--        create-account-btn-->
            <div class="form-group">
              <button type="submit" class="btn-block my-btn"> Create Account</button>
            </div>

            <p class="text-center">Have an account?
              <NuxtLink to="/">Log In</NuxtLink>
            </p>
          </form>
        </div>
        <div v-else class="col-lg-6 col-md-6 col-sm-10 welcome-form">
          <div class="p-0 ">
            <p class="text-center m-0">hi, {{ userInfo.firstName }} !</p>
          </div>
          <div>
            <button class="my-btn" @click="exit">log out</button>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import Title from '@/components/title'
import axios from "axios";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "SignUp",
  components: {Title},
  data() {
    return {
      user: {},
      existsUser: null,
      submitted: null
    }
  },

  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo'
    })
  },
  methods: {
    ...mapMutations({
      login: 'user/login',
      logOut:'user/logOut'
    }),
    signUp() {
      axios.get('https://my-shop-react-cdca2-default-rtdb.firebaseio.com/users.json')
        .then(res => {
          let existsUser = Object.entries(res.data).filter(value => value[1].email === this.user.email)
          this.existsUser = existsUser.length > 0;
          if (this.existsUser === false) {
            axios.post('https://my-shop-react-cdca2-default-rtdb.firebaseio.com/users.json', this.user)
              .then(res => {
                this.submitted = true
                this.login(this.user)
                console.log('dgdgd', this.userInfo)

              })
              .catch(err => console.log('submittedError', err))
          }
        }).catch(err => console.log('err', err))
    },
    exit(){
      this.submitted=false
      this.logOut()
    }
  }
}
</script>

<style scoped>

.sign-up .fix-input-icon {
  display: flex;
  margin-right: -1px;
}

.sign-up .fix-input-icon > .input-icon {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.sign-up .input-icon {
  display: flex;
  align-items: center;
  padding: 0.3rem 0.7rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #4a5562;
  text-align: center;
  background-color: #f6f6f6;
  border: 1px solid #c9cacc;
  border-radius: 0.25rem;
}

.sign-up input, .sign-up textarea {
  background-color: #f6f6f6;
}

.sign-up .welcome-form {
  margin: 160px 0;

}
</style>
