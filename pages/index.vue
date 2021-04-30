<template>
  <div class="">
    <Slider/>
    <Login/>
  </div>
</template>

<script>
import Slider from '@/components/slider'
import Login from '@/pages/login'

export default {
  name: "index",
  components: {Slider,Login}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
