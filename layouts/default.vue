<template>
  <div>
    <Navbar/>
    <div class="main">
      <Nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default {
  components: {
    Navbar, Footer
  }
}
</script>
<style>
/*html {*/
/*  font-family: 'Source Sans Pro',*/
/*  -apple-system,*/
/*  BlinkMacSystemFont,*/
/*  'Segoe UI',*/
/*  Roboto,*/
/*  'Helvetica Neue',*/
/*  Arial,*/
/*  sans-serif;*/
/*  font-size: 16px;*/
/*  word-spacing: 1px;*/
/*  -ms-text-size-adjust: 100%;*/
/*  -webkit-text-size-adjust: 100%;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  box-sizing: border-box;*/
/*}*/

/**,*/
/**::before,*/
/**::after {*/
/*  box-sizing: border-box;*/
/*  margin: 0;*/
/*}*/

.main {
  margin: 94px 0;
}
.main li{
  list-style: none;
}
.main-form {
  margin: 80px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 12px 27px 0 #c7c4c4;
}

.entry {
  margin-bottom: 50px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.center {
  display: flex;
  justify-content: center;
}

.welcome-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 12px 27px 0 #c7c4c4;
  background-color: #f2f7f6;
  line-height: 3;
  padding: .5rem;
}

.errorMessage {
  color: red;
  font-size: .8rem;
}

.error {
  border: 1px solid red;
  border-radius: 5px;
}

.entry {
  margin-bottom: 50px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.wrapper {
  min-height: 100%;
}


.App {
  text-align: center;
}


.App-logo {
  height: 40vmin;
  pointer-events: none;
}


/*/////////////////////*//*title*/

.title {
  background-color: #f8f9fa;
  margin: 78px 0 140px 0;
  display: flex;
  justify-content: space-between;
}

.title p {
  padding-left: 15px;
  margin-bottom: 0;
  margin-left: 69.500px;
  line-height: 3;
  font-size: 28px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #556270;
}

.title pre {
  line-height: 2.5;
  padding: 20px 15px 0 0;
  margin-right: 69.500px;
  font-family: "Poppins", sans-serif;
  color: #444444;
  font-weight: 200;
}

.title pre a {
  color: #2abe8b
}

.title pre a:hover {
  text-decoration: none;
}

/*///*/


.my-btn {
  background-color: #2abe8b;
  color: white;
  border-radius: 6px;
  line-height: 2;
  border: none;
  padding: 6px 10px;
}

.my-btn:hover {
  color: white;
  opacity: 80%;
}

.my-btn:focus {
  outline: none;
}

/*////*/
/*pagination*/

.disabled-Btn {
  cursor: default;
  pointer-events: none;
}

@media (max-width: 425px) {
  .title p {
    margin-left: 0;
  }

  .title pre {
    margin-right: 0;
  }
}


/*//////////////*/
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
