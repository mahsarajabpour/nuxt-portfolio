<template>
  <v-card class="my-modal">

    <v-card-text class="   p-4 modal-header">
      <v-card-title class="col-md-11 justify-content-center p-0">
        <span class="headline text-center"><p class="luckiest-guy-font m-0">{{ repo.name }} </p></span>
      </v-card-title>
      <v-card-actions class="col-md-1 p-0">
        <v-spacer></v-spacer>
        <v-btn
          color="#2abe8b"
          text
          class="font-weight-bold"
          @click="()=>this.$emit('dialog',false)">
          X
        </v-btn>
      </v-card-actions>
    </v-card-text>

<!--    <v-card-text class="row">-->
<!--      <p class=" mb-2 text-center a">2735 KB Languages-->
<!--      </p>-->
<!--    </v-card-text>-->
<!--    <v-card-text class="row">-->
<!--      <p class=" mb-2 text-center b">2735 KB Languages-->
<!--      </p>-->
<!--    </v-card-text>-->
<!--    <v-card-text class="row">-->
<!--      <p class=" mb-2 text-center c">2735 KB Languages-->
<!--      </p>-->
<!--    </v-card-text>-->
<!--    <v-card-text class="row">-->
<!--      <p class=" mb-2 text-center d">2735 KB Languages-->
<!--      </p>-->
<!--    </v-card-text>-->
<!--    <v-card-text class="row">-->
<!--      <p class=" mb-2 text-center e">2735 KB Languages-->
<!--      </p>-->
<!--    </v-card-text>-->
<!--    <v-card-text class="row">-->
<!--      <p class=" mb-2 text-center f">2735 KB Languages-->
<!--      </p>-->
<!--    </v-card-text>-->
<!--    <v-card-text class="row">-->
<!--          <p class=" mb-2 text-center g">2735 KB Languages-->

<!--          </p>-->
<!--        </v-card-text>-->
<!--        <v-card-text class="row">-->
<!--          <p class=" mb-2 text-center h">2735 KB Languages-->

<!--          </p>-->
<!--        </v-card-text>-->
<!--        <v-card-text class="row">-->
<!--          <p class=" mb-2 text-center i">2735 KB Languages-->

<!--          </p>-->
<!--        </v-card-text>-->
<!--        <v-card-text class="row">-->
<!--          <p class=" mb-2 text-center j">2735 KB Languages-->
<!--          </p>-->
<!--        </v-card-text>-->
<!--    <v-card-text class="row">-->
<!--      <p class=" mb-2 text-center k">2735 KB Languages-->
<!--      </p>-->
<!--    </v-card-text>-->
<!--    <v-card-text class="row">-->
<!--      <p class=" mb-2 text-center l">2735 KB Languages-->
<!--      </p>-->
<!--    </v-card-text>-->


    <v-card-text v-if="repo">

      <span class="row justify-content-center">
        <a :href="repo.owner.html_url" target="_blank" class="col-md-2">
          <v-img :src="repo.owner.avatar_url"
                 :href="repo.owner.html_url"
                 alt="owner avatar"
                 class="owner-avatar"></v-img>
        </a>
        <span class="col-md-4 owner-name kalam-font">
          <a :href="repo.owner.html_url" target="_blank">{{ repo.owner.login }}</a>
        </span>
      </span>

      <span class="row justify-content-center">
        <span class="col-md-9">
          <p class="text-center description kalam-font">{{ repo.myDescription }}</p>
        </span>
      </span>

      <span class="row justify-content-center">
          <span class="col-md-9 languages">
            <p class="row justify-content-center font-weight-bold coda-caption-font">Programming Languages</p>
            <p class="row justify-content-center kalam-font">{{ repo.description }}</p>
        </span>
      </span>

      <span class="row justify-content-center">
        <span class="col-md-6">
          <span class="row">
            <span class="col-md-6">
              <span class="row justify-content-center">
                <p class="font-weight-bold pr-2 coda-caption-font">Size: </p>
                <p class="coda-caption-font">{{ repo.size }} KB</p>
              </span>
            </span>

            <span class="col-md-6">
              <span class="row justify-content-center">
                <v-icon small color="#a4afba" class="pr-2">fas fa-eye</v-icon>
                <p class="coda-caption-font m-0">{{ repo.watchers }}</p>
              </span>
            </span>
          </span>
        </span>
      </span>

      <v-card-actions class="row justify-content-center ">
        <v-btn class="col-md-9 text-white luckiest-guy-font"
               :href="repo.clone_url"
               target="_blank"
               depressed
               color="#2abe8b">
see it now!
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "index",
  props: ['repo'],
}
</script>

<style scoped>
@font-face {
  font-family: Abril_Fatface;
  src: url('assets/fonts/Abril_Fatface/AbrilFatface-Regular.ttf');
}

@font-face {
  font-family: Alfa_Slab_One;
  src: url('assets/fonts/Alfa_Slab_One/AlfaSlabOne-Regular.ttf');
}

@font-face {
  font-family: Amatic_SC;
  src: url('assets/fonts/Amatic_SC/AmaticSC-Regular.ttf');
}

@font-face {
  font-family: Anton;
  src: url('assets/fonts/Anton/Anton-Regular.ttf');
}

@font-face {
  font-family: Caveat;
  src: url('assets/fonts/Caveat/Caveat-VariableFont_wght.ttf');
}

@font-face {
  font-family: Coda_Caption;
  src: url('assets/fonts/Coda_Caption/CodaCaption-ExtraBold.ttf');
}

@font-face {
  font-family: Courgette;
  src: url('assets/fonts/Courgette/Courgette-Regular.ttf');
}

@font-face {
  font-family: Fredoka_One;
  src: url('assets/fonts/Fredoka_One/FredokaOne-Regular.ttf');
}

@font-face {
  font-family: Indie_Flower;
  src: url('assets/fonts/Indie_Flower/IndieFlower-Regular.ttf');
}

@font-face {
  font-family: Kalam;
  src: url('assets/fonts/Kalam/Kalam-Regular.ttf');
}

@font-face {
  font-family: Lobster;
  src: url('assets/fonts/Lobster/Lobster-Regular.ttf');
}

@font-face {
  font-family: Luckiest_Guy;
  src: url('assets/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf');
}


/*p{*/
/*  font-size: 20px;*/
/*}*/
/*.a {*/
/*  font-family: Abril_Fatface;*/
/*}*/

/*.b {*/
/*  font-family: Alfa_Slab_One;*/
/*}*/

/*.c {*/
/*  font-family: Amatic_SC;*/
/*}*/

/*.d {*/
/*  font-family: Anton;*/
/*}*/

/*.e {*/
/*  font-family: Caveat;*/
/*}*/

/*.f {*/
/*  font-family: Coda_Caption;*/
/*}*/

/*.g {*/
/*  font-family: Courgette;*/
/*}*/

/*.h {*/
/*  font-family: Fredoka_One;*/
/*}*/

/*.i {*/
/*  font-family: Indie_Flower;*/
/*}*/
/*.j{*/
/*  font-family: Kalam;*/
/*}*/
/*.k{*/
/*  font-family: Lobster;*/
/*}*/
/*.l{*/
/*  font-family: Luckiest_Guy;*/
/*}*/
.my-modal{
  border-radius: 12px;
}
.modal-header{
  display: flex;
  justify-content: center;
  margin: 0 0 1rem 0;
  background-color: #2abe8b2e;
}
.description {
  font-size: 16px;
}

.owner-name a {
  color: black;
  font-size: 18px;
  line-height: 3;
  font-weight: bolder;
}
.kalam-font{
  font-family: Kalam;
}
.luckiest-guy-font {
  font-family: Luckiest_Guy;
}

.owner-avatar {
  border-radius: 50%;
  width: 70%;
}
.coda-caption-font{
  font-family: Coda_Caption;
}

</style>
