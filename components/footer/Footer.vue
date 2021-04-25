<template>
  <footer class="main-footer ">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12 contact  ">
        <h3>Company</h3>
        <p>
          Iran , Tehran
          <br/>
          <br/>
          <strong>Phone: </strong>
          09375970781
          <br/>
          <strong>Email: </strong>
          mahsaa.rajabpour@gmail.com
        </p>
        <ul class="social-media">
          <li>
            <a target="_blank" href="https://github.com/mahsaaarajabpour/my-react-website">
              <v-icon small color="green darken-2">mdi-github</v-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://gitconnected.com/mahsaaarajabpour">
              <v-icon small color="green darken-2">mdi-gitconnected</v-icon>
              <!--              <GitConnect class="git-connected"/>-->
            </a>
          </li>
          <li>
            <a href="/">
              <v-icon small>mdi-facebook</v-icon>
            </a>
          </li>
          <li>
            <a href="/">
              <v-icon small>mdi-skype</v-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/mahsaa-rajabpour-79806099/">
              <v-icon small color="green darken-2">mdi-linkedin</v-icon>
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-6 col-sm-12 links">
        <h4>Useful links</h4>
        <ul>
          <li class="">
            <v-icon small >mdi-chevron-right</v-icon>
            <a href="/">Home</a>
          </li>
          <li>
            <v-icon small >mdi-chevron-right</v-icon>
            <a href="/">About us</a>
          </li>
          <li>
            <v-icon small >mdi-chevron-right</v-icon>
            <a href="/">Services</a>
          </li>
          <li>
            <v-icon small >mdi-chevron-right</v-icon>
            <a href="/">Terms of service</a>
          </li>
          <li>
            <v-icon small >mdi-chevron-right</v-icon>
            <a href="/">Privacy policy</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 links ">
        <h4>our services</h4>
        <ul>
          <li class="">
            <v-icon small >mdi-chevron-right</v-icon>
            <a href="/">Web Design</a>
          </li>
          <li>
            <v-icon small >mdi-chevron-right</v-icon>
            <a href="/">Web Development</a>
          </li>
          <li>
            <v-icon small >mdi-chevron-right</v-icon>
            <a href="/">Product Management</a>
          </li>
          <li>
            <v-icon small>mdi-chevron-right</v-icon>
            <a href="/">Marketing</a>
          </li>
          <li>
            <v-icon small>mdi-chevron-right</v-icon>
            <a href="/">Graphic Design</a>
          </li>
        </ul>

      </div>

      <div class="col-lg-4 col-md-6 col-sm-12 newsletter ">
        <h4>our newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <div class="subscribe">
          <input id="email" type="email" placeholder="email"/>
          <button type="submit">Subscribe</button>
        </div>

      </div>
    </div>
    <div class="row footer-copyright">
      <p>© Copyright. All Rights Reserved</p>
      <p>Design by Mahsa Rajabpour</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.main-footer {
  background-color: #4a5562;
  width: 100%;
  border-top: 3px solid #2abe8b;
}

footer .row:first-child {
  background-color: #515d6a;
}

.main-footer .row {
  padding: 4rem 4rem;
  margin: 0;
  display: flex;
  justify-content: center;
}

.main-footer h4 {
  color: #fff;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 20px;
}

.main-footer li {
  list-style: none;
}

.main-footer .contact h3 {
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1;
  font-weight: 700;
  font-size: 22px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
}

.main-footer .contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  color: #fff;
}

.main-footer .contact .social-media {
  display: flex;
  padding: 0;
  margin-top: 1.3rem;
}

.main-footer .contact .social-media li {
  margin-right: .5rem;
}

.main-footer .contact .social-media li a {
  width: 36px;
  height: 36px;
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 8px 0;
  text-align: center;
  line-height: 1;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.1);
}

.main-footer .contact .social-media li a:hover {
  background-color: #2abe8b;
}

/*///*/
.main-footer .links ul {
  padding: 0;
}

.main-footer .links ul li {
  padding: 0 .5rem;
  line-height: 2;
}

.main-footer .links ul li i {
  color: rgba(255, 255, 255, 0.6);
}

.main-footer .links ul li a {
  text-decoration: none;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.main-footer .links ul li a:hover {
  color: #fff;
}

/*///*/
.main-footer .newsletter p {
  color: #fff;
  font-size: 14px;
  margin-bottom: 1.5rem;
}

.main-footer .newsletter .subscribe {
  display: flex;
}

.main-footer .newsletter .subscribe button {
  background-color: #2abe8b;
  border: none;
  border-radius: 0 5px 5px 0;
  color: #fff;
  width: 35%;
}

.main-footer .newsletter .subscribe input {
  padding: .5rem .2rem .5rem .3rem;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  width: 65%;
  background-color: white;
}

.main-footer .newsletter .subscribe input:focus {
  box-suppress: hide;
}

.main-footer .newsletter .subscribe button:focus {
  outline: none;
}

/*///*/
.main-footer .footer-copyright {
  background-color: #4a5562;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.main-footer .footer-copyright p {
  margin-bottom: .5rem;
}

.main-footer .footer-copyright p:nth-child(2) {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 100;
  font-size: 12px;
}

.git-connected{
  width: 71%;
  height: 21px;
}
.git-connected g{
  fill: white;
}
@media (max-width: 400px) {
  .main-footer .row {
    padding: 4rem 1.5rem;
  }

  .main-footer .newsletter .subscribe button {
    font-size: 4vw;
  }
}

@media (max-width: 222px) {

  .main-footer .contact p {
    font-size: 5.5vw;
  }

  .main-footer .contact .social-media {
    flex-wrap: wrap;
  }

  .main-footer .contact .social-media li {
    margin-bottom: 2px;
  }

  .main-footer .footer-copyright {
    font-size: 5vw;
  }

  .main-footer .footer-copyright p:nth-child(2) {
    font-size: 4vw;
  }
}
</style>
