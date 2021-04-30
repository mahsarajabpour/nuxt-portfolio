<template>
  <div class="container login center">
    <div class="col-lg-6 col-md-6 col-sm-10 p-0 main-form">
      <div class="form-header ">
        <p>Sign In</p>
      </div>
      <div class="center">
        <form class="col-10 login-body">
          <!--            {(emailVerify === false || emailVerify === false) &&-->
          <p class="alert-danger text-center text-danger"> incorrect data </p>
          <!--            }-->

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
            <button type="button" @click="login" class="my-btn col-lg-6 col-md-6 col-sm-6">Login
            </button>
          </div>
        </form>
      </div>
      <div class="form-footer d-flex flex-column align-items-center">
        <p>Don't have an account?<NuxtLink :to="'/signUp'">Sign Up</NuxtLink></p>
        <NuxtLink class="" :to="'/sign-up'">Forgot password?</NuxtLink>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name:'index',
  data(){
    return{
      user:{
        email:null,
        password:null
      }
    }
  },
  // fetch(context) is called by the server-side
  // and before instantiating the component
  fetch ({ store }) {
    store.commit('user/login')
  },
  computed: mapState(['user/userInfo']),
  methods: {

    login(){
      this.$store.commit('user/login',this.user)
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
