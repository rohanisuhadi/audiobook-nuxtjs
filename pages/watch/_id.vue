<template>
  <v-container>
    <v-row>
      <v-col md="9" cols="12">
        <!-- <VideoWatch :video="video" /> -->
        <div class="video-player-box" 
            v-video-player:videoPlayer="playerOptions">
        </div>

      </v-col>
      <v-col md="3" cols="12">
        <div class="display-1"> {{ audio.title }} </div>
        <div v-html="audio.about"></div>
        <!-- <div class="display-1">{{video.name}}</div>
        <VideoByline :video="video" />
        <div class="green--text" v-if="isPlayed(video.id)">
          <font-awesome-icon icon="check" /> 
          Played
        </div>
        <div v-else>
          <v-btn x-small @click="markPlayed" v-if="$auth.loggedIn">
            Mark Played
          </v-btn>
        </div> -->

        <!-- <MarkdownDisplay :markdown="video.description" /> -->
        
        <span v-for="author in audio.authorslist" :key="author.id">
          <v-btn  color="green lighten-2"
                  class="mr-2"
                  small
                  @mousedown.stop
                  :to="{ name: 'author', params: {id: author.id} }">
            {{ author.username }}
          </v-btn>
        </span>

      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- <MarkdownDisplay :markdown="video.code_summary" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import VideoByline from '@/components/VideoByline';
// import VideoWatch from '@/components/VideoWatch';
// import MarkdownDisplay from '@/components/MarkdownDisplay';
import 'video.js/dist/video-js.css'

import Vue from 'vue'

if (process.browser) {
  const VueVideoPlayer = require('vue-video-player/dist/ssr')
  Vue.use(VueVideoPlayer)
}

import { mapState } from 'vuex';
// import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    // VideoByline,
    // VideoWatch,
    // MarkdownDisplay
  },
  // async asyncData({store, params}) {
  //   store.dispatch('getLoadAudio', {audioId: params.id})
  // },
  created() {
    this.$store.dispatch('getLoadAudio', {audioId: this.$route.params.id})
  },
  computed: {
    ...mapState(['audio']),
    playerOptions(){
        return {
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3.0],
          sources: [{
            type: "video/mp4",
            src: this.audio.audio_preview_file_url
          }],
          poster: this.audio.cover_picture_url,
          fluid: true
        }
      }
  }
}
</script>

<style>
</style>