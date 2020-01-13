<template>
  <div class="home">
    <div class="display-4 ma-4 d-flex justify-center">
      All AudioBuku
    </div>

    <div class="d-flex flex-wrap">
      <div v-for="audio in audios" :key="audio.title">
        <AudioListAudio :audio="audio"></AudioListAudio>
      </div>
    </div>
  </div>  
</template>

<script>
import Logo from '~/components/Logo.vue'
import AudioListAudio from '~/components/AudioListAudio'
import { mapState } from 'vuex'
export default {
  components: {
    Logo, AudioListAudio
  },
  async asyncData({store, from}) {
    await store.dispatch('loadAllAudios')
  },
  computed: {
    ...mapState(['audios'])
  },
}
</script>

<style>

</style>
