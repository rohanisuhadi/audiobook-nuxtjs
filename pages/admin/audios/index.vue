<template>
  <v-container>
    <h1>Video List</h1>
    <v-btn text to="/admin/audios/new">Add Video</v-btn>

    <div class="flex-table">
      <div>Name</div>
      <div>Description</div>
      <div>Actions</div>
    </div>
    <div v-for="audio in audios" :key="audio.id" class="flex-table">
      <div>{{ audio.title }}</div>
      <div>{{ audio.about | abbreviate }}</div>
      <div class="actions">
        <router-link :to="`/watch/${audio.id}`">Watch</router-link> 
        <router-link :to="`/admin/audio/${audio.id}`">Show</router-link>
        <router-link :to="`/admin/audio/${audio.id}/edit`">Edit</router-link>
        <v-btn x-small @click="deleteVideo(audio)">Delete</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        audios: state => state.audios.audios
      })
    },
    filters: {
      abbreviate(text) {
        if(text){
          text = text.replace('<p>', '');
          return text.slice(0, 50);
        }
      }
    },
    methods: {
      deleteVideo(audio) {
        let response = confirm(`Are you sure you want to delete ${audio.title}`)
        if(response){
          this.$store.dispatch('videos/delete', audio);
          this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully deleted your video, ${audio.title}.`});
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flex-table {
    display: grid;
    grid-template-columns: repeat(auto-fill, 33%);
    padding: 10px;
    border-bottom: 1px black solid;
    &:nth-of-type(2n) {
      background-color: #dedede;
    }
    .actions {
      * {
        padding-right: 15px
      }
    }
  }
</style> 
