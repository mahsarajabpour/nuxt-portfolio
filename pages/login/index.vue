<template>
  <div class="container login center">
    <div v-if="!isSubmitted" class="col-lg-6 col-md-6 col-sm-10 p-0 main-form">
      <div class="form-header ">
        <p>Sign In</p>
      </div>
      <div class="center">
        <form class="col-10 login-body" @submit.prevent="login">
          <p v-if="(!emailVerify || !passVerify ) && (isSubmitted!==null)"
             class="alert-danger text-center text-danger">
            <v-icon color="red" small class="alert-danger text-danger">
              mdi-alert-circle-outline
            </v-icon>
            Invalid login or password.
          </p>

          <div class="form-group input-group">
            <input class="form-control" type="email" v-model="user.email"
                   placeholder="email" required
            />
          </div>

          <div class="form-group input-group">
            <input class="form-control" type="password"
                   v-model="user.password"
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
        <p>Don't have an account?
          <NuxtLink :to="'/signUp'">Sign Up</NuxtLink>
        </p>
        <NuxtLink class="" :to="'/sign-up'">Forgot password?</NuxtLink>
      </div>
    </div>
    <div v-else class="col-lg-6 col-md-6 col-sm-10 welcome-form">
      <div class="p-0 ">
        <p class="text-center m-0">hi, {{ userInfo.name }} !</p>
      </div>
      <div>
        <button class="my-btn" @click="exit" >log out</button>
      </div>
    </div>

  </div>

</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import axios from "axios";

export default {
  name: 'index',
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      emailVerify: null,
      passVerify: null,
      isSubmitted: null,
    }
  },
  // fetch(context) is called by the server-side
  // and before instantiating the component
  fetch({store}) {
    store.commit('user/login')
  },

  computed: {
    ...mapGetters({
      userInfo: 'user/login'
    }),
  },

  methods: {
    ...mapMutations({
      logOut: 'user/logOut' // map `this.add()` to `this.$store.commit('increment')`
    }),
    login() {
      axios.get('https://my-shop-react-cdca2-default-rtdb.firebaseio.com/users.json')
        .then(res => {
          for (let key in res.data) {
            if (res.data[key].email === this.user.email) {
              this.emailVerify = true
              if (res.data[key].password === this.user.password) {
                this.passVerify = true
                this.isSubmitted = true
                this.$store.commit('user/login', res.data[key])
              } else {
                this.passVerify = false
              }
            }
          }
          if (this.emailVerify === null && this.passVerify === null) this.isSubmitted = false
        })
    },
    exit(){
      this.isSubmitted=false
      this.logOut()
    }
  }
}
</script>

<style scoped>
.login .form-header {
  border-radius: 10px 10px 0 0;
  background-color: #c7f1e240;
  border-bottom: 1px solid #8e8e8e2b;
  padding: 1rem 1rem 1rem 2rem;
}

.login .form-header p {
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
</style>
