<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white ">
    <a class="nav-logo" href="/">My Shop</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavDropdown"
            aria-controls="myNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavDropdown">
      <div class="navbar-content">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/" exact>Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/portfolio/">Portfolio</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blogs/1">Blogs</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/create-blog">Add Blog</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
        <div class="my-dropdown row">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            hi <i class="fas fa-home"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <p class="dropdown-item m-0" onclick="">log out</p>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbar {
  width: 100%;
  line-height: 3.5;
  position: fixed !important;
  top: 0;
  z-index: 100 !important;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.navbar .nav-logo {
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
  color: #556270;
  margin-right: 2%;
}

.navbar .nav-logo:hover {
  text-decoration: none;
}

.navbar .navbar-nav .nav-item a {
  margin: 0 .8rem;
  font-weight: 700;
  color: #556270;
}

.navbar .navbar-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.navbar .collapse .navbar-nav a.active,
.navbar .collapse .navbar-nav .nav-item a:hover {
  color: #2abe8b;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: unset !important;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 7.5rem !important;
  padding: 0 !important;
  margin: 0 !important;
  font-size: 1rem;
  color: #212529;
  text-align: center !important;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.my-dropdown a,
.my-dropdown a:hover {
  color: #556270;
}
</style>
