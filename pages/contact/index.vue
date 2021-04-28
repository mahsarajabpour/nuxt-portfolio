<template>
  <div class="contact">
    <div class="title">
      <p>Contact</p>
      <pre>
                        <NuxtLink to="/">Home</NuxtLink>   /   Contact
                    </pre>
    </div>
    <div class="container">
      <div class="col-md-12">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37544.996079770775!2d51.3323354014984!3d35.703984603857236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2sus!4v1611089448083!5m2!1sen!2sus"
            width="100%" height="260" frameBorder="0" title="map" allowFullScreen="" aria-hidden="false"
            tabIndex="0"></iframe>
        </div>
        <div class="info row">
          <div class="col col-md-4">
            <div class="address">
              <i class="fas fa-map-marker-alt"></i>
              <h3>location:</h3>
              <p>Tehran , Iran</p>
            </div>
            <div class="email">
              <i class="fas fa-envelope"></i>
              <h3>Email:</h3>
              <p>mahsaa.rajabpour@gmail.com</p>
            </div>
            <div class="phone">
              <i class="fas fa-phone-alt"></i>
              <h3>call:</h3>
              <p>09375970781</p>
            </div>
          </div>
          <form class="communicate col col-md-8">
            <div class="row ">
              <div class="col-md-6 form-group pr-1 p-0">
                <input class="form-control"
                       type="text"
                       placeholder="your name"
                       required/>
              </div>
              <div class="col-md-6 form-group pl-1 p-0">
                <input class="form-control" type="email"
                       placeholder="your Email"
                       required/>
              </div>
            </div>
            <div class="row form-group mb-2">
              <input class="form-control" type="text"
                     placeholder="subject"
                     required/>
            </div>
            <div class="row form-group mb-2">
              <textarea class="form-control" name="subject" id="subject" cols="100"
                        rows="5" placeholder="message"
                        required>message
              </textarea>
            </div>
            <div class="row send-message mb-2">
              <button type="submit" class="my-btn">Send Message</button>
              <!--            {/*{messageAuth===true ? <p>your message has been send!</p> : <p>no</p>}*/}-->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.contact .map {
  margin: 0 0 60px 0;
}

.contact .info {
  margin-bottom: 50px;
  text-align: left;
}

.contact .info .address:hover i,
.contact .info .phone:hover i,
.contact .info .email:hover i {
  background-color: #556270;
  color: #fff;
}

.contact .info i {
  background-color: #edeff1;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  color: #556270;
  transition: all 0.3s ease-in-out;
}

.contact .info h3 {
  color: #556270;
  font-family: "Raleway", sans-serif;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 22px;
  margin-left: 55px;
}

.contact .info p {
  color: #8795a4;
  padding-left: 55px;
}

.contact .form-control::placeholder,
.contact .form-control {
  color: #495057a6;
  text-transform: capitalize;
  font-size: 14px;
}

.contact .form-control textarea {
  overflow: auto;
}

.contact .form-control:focus {
  border-color: #2abe8b;
  box-shadow: 0 0 0 0.2rem rgba(61, 190, 139, 0.17)
}

.contact .info .send-message {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .info {
    display: flex;
    flex-direction: column;
  }
}
</style>
