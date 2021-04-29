<template>
  <v-card class="my-modal">

    <v-row justify="space-between p-4">
      <v-card-title class="col-md-11 justify-content-center">
        <span class="headline mb-2 text-center">{{ repo.name }} </span>
      </v-card-title>
      <v-card-actions class="col-md-1">
        <v-spacer></v-spacer>
        <v-btn
          color="#2abe8b"
          text
          @click="()=>this.$emit('dialog',false)">
          X
        </v-btn>
      </v-card-actions>
    </v-row>

    <v-card-text v-if="repo">

      <span class="row justify-content-center">
        <a :href="repo.owner.html_url" target="_blank" class="col-md-2">
          <v-img :src="repo.owner.avatar_url" :href="repo.owner.html_url" alt="owner avatar" class="owner-avatar"></v-img>
        </a>
        <span class="col-md-4 owner-name">
          <a :href="repo.owner.html_url" target="_blank">{{ repo.owner.login}}</a>
        </span>
      </span>

      <span class="row justify-content-center">
        <span class="col-md-9">
          <p>{{repo.myDescription}}</p>
        </span>
      </span>

      <span class="row justify-content-center">
        <span class="col-md-9">
          <p class="row font-weight-bold">Programming Languages:</p>
          <p class="row">{{ repo.description}}</p>
        </span>
      </span>

      <span class="row">
        <span class="col-md-3">
           <p class="font-weight-bold ">Full Name Repository: </p>
        </span>
        <span class="col-md-9">
          <p>{{ repo.full_name}}</p>
        </span>
      </span>

      <v-card-actions>
        <v-btn :href="repo.clone_url" target="_blank">
          Go to owner this repo!
        </v-btn>
      </v-card-actions>

      <span class="row">
        <span class="col-md-3">
           <p class="font-weight-bold ">Size: </p>
        </span>
        <span class="col-md-9">
          <p>{{ repo.size}}</p>
        </span>
      </span>

      <span class="row">
        <span class="col-md-3">
           <p class="font-weight-bold ">Watchers: </p>
        </span>
        <span class="col-md-9">
          <p>{{ repo.watchers}}</p>
        </span>
      </span>

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
.owner-avatar{
  border-radius: 50%;
  width: 70%;
}
.owner-name{
  line-height: 5;
}

</style>
