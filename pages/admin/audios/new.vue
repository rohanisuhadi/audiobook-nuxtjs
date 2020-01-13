<template>
  <v-container>
    <h1>Video Create Page</h1>
    <AudioEditForm :video="video" :saveVideo="createVideo" buttonText="Create Video" />
  </v-container>
</template>

<script>
  import AudioEditForm from '@/components/AudioEditForm.vue';
  export default {
    data() {
      return {
        video: {}
      }
    },
    components: {
      AudioEditForm,
    },
    methods: {
      async createVideo() {
        console.log(this.video)
        // let video = await this.$store.dispatch('videos/create', this.video);
        // this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully created a new video, ${video}.`});
        // this.$router.push(`/admin/audios/${video}`);
      }
    },
  }
</script>

<style lang="scss" scoped>  
</style>