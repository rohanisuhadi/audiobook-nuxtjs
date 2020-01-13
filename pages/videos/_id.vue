<template>
  <div>
    <nuxt-child :video="video"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    head() {
      return {
        title: '',
        titleTemplate: `%s ${this.video.name} AudioBuku - Province`
      }
    },
    async fetch({$axios, params, store}) {
      let response = await $axios.get(`/regency/${params.id}`);
      let video = response.data.data[0];
      store.commit('SET_CURRENT_VIDEO', video)
    },
    computed: {
      ...mapState({
        video: 'currentVideo'
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>