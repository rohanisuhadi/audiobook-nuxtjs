<template>
 <v-card width="340px" 
          hover 
          class="ma-2"
          :to="`/watch/${audio.id}`"
          >
          
    <v-img :src="audio.cover_picture_url"/>
    <v-card-title>{{ audio.title }}</v-card-title>

    <v-card-text>
    </v-card-text>
    
    <v-card-actions>
      <span v-for="author in audio.authorslist" :key="author.id">
        <v-btn  color="green lighten-2"
                class="mr-2"
                small
                @mousedown.stop
                :to="`/author/${author.id}`">
          {{ author.username }}
        </v-btn>
      </span>
    </v-card-actions>

 </v-card>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  props: ['audio'],
  // computed: {
  //   ...mapGetters({
  //     getTag: 'tags/get',
  //     isPlayed: 'users/videoIsPlayed'
  //   })  
  // },
}
</script>
<style scoped>

</style>