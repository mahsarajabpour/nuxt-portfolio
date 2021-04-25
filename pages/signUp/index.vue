<template>
  <div class="container sign-up">
    <div class="col-lg-6 col-md-6 col-sm-10 main-form ">
      <!--      {emailError &&-->
      <!--      <p class="alert-danger text-center text-danger">email error</p>-->
      <!--      }-->
      <form class="m-3" onSubmit={signUp}>

        <!--        firstname-->
        <div class="form-group input-group">
          <div class="fix-input-icon">
            <span class="input-icon"> <v-icon small color="green ">mdi-account</v-icon> </span>
          </div>
          <input class="form-control"
                 placeholder="first name"
                 type="text" required/>
        </div>

        <!--        lastname -->
        <div class="form-group input-group">
          <div class="fix-input-icon">
            <span class="input-icon"> <v-icon small color="green ">mdi-account</v-icon></span>
          </div>
          <input class="form-control"
                 placeholder="last name"
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
  </div>
</template>

<script>
export default {
  name: "SignUp"
}
</script>

<style scoped>
.sign-up {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.sign-up .main-form {
  margin: 160px 0;
}

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
