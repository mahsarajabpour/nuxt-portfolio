<template>
  <div class="m-pagination">
    <div class="prev">
      <NuxtLink id="prevBtn" class="disabled-Btn" to="/">
        <v-icon small>mdi-arrow-left</v-icon>
      </NuxtLink>
      <!--       <NuxtLink id="prevBtn" class="prev-page-btn " to="/">-->
      <!--         <v-icon small>mdi-arrow-left</v-icon>-->
      <!--      </NuxtLink>-->
    </div>

    <div class="col col-md-6 center-page">
      <NuxtLink v-for="(pageNum,i) in pageCount" to="/">{{ pageNum }}</NuxtLink>
    </div>

    <div class="next">
      <NuxtLink id="nextBtn" class="disabled-Btn" to="/">
        <v-icon small>mdi-arrow-right</v-icon>
      </NuxtLink>
      <!--       <NuxtLink id="nextBtn" class="next-page-btn" to="/">-->
      <!--         <v-icon small>mdi-arrow-right</v-icon>-->
      <!--       </NuxtLink>-->
    </div>


  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageCount'],
}
</script>

<style>
/*////*/
/*pagination*/
.m-pagination {
  margin-bottom: 3%;
  width: 60rem;
  height: auto;
  display: flex;
  justify-content: space-between;
  font-size: 1.5vw;
  align-items: center;
}

.m-pagination .col {
  text-align: center;
}

.m-pagination .prev,
.m-pagination .next {
  width: 40px;
}

.m-pagination .prev a,
.m-pagination .next a {
  display: inline-block;
  color: #333232a1;
  text-decoration: none;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  background-color: #eeeeee;
  transition: 0.3s;
  border: 1px solid #d0d4d3;

}

.m-pagination .next-page-btn:hover,
.m-pagination .prev-page-btn:hover {
  background-color: #d2cece;
}

.m-pagination .center-page a {
  background-color: #eeeeee;
  height: auto;
  width: 2.5rem;
  display: inline-block;
  color: #333232a1;
  border-radius: 5px;
  margin-right: 2%;
  margin-left: 2%;
}

.m-pagination .center-page a.active,
.m-pagination .center-page a:hover {
  background-color: #2abe8b;
  text-decoration: none;
  color: white;
}


.disabled-Btn {
  cursor: default;
  pointer-events: none;
}

@media (max-width: 767px) {
  .m-pagination {
    width: 200px;
    justify-content: center;
    font-size: 14px;
    align-items: center;
    overflow: hidden;
  }

  .m-pagination .center-page a {
    display: none !important;
  }

  .m-pagination .center-page .active {
    display: inline-block !important;
  }
}
</style>
