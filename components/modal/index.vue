<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ repo.name }} </span>
    </v-card-title>
    <v-card-text v-if="repo" >
      owner: {{ repo.owner.login }}
      <br>
      owner url: {{ repo.owner.url }}
      <br>
      full name repository: {{ repo.full_name }}
      <br>
      git url: {{ repo.git_url }}
      <br>
      id: {{ repo.id }}
      <br>
      size: {{ repo.size }}
      <br>
      watchers: {{ repo.watchers }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="green darken-1"
        text
        @click="()=>this.$emit('dialog',false)">
        exit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "index",
  props:['repo'],
}
</script>

<style scoped>
/*div[data-card='true'] {*/
/*  background: url('/assets/image/portfolio/react-shop.png') no-repeat center center fixed !important;*/
/*  background-size: cover;*/
/*}*/
</style>
