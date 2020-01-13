<template>
  <div>
    <nuxt-child />
    <h1>Video</h1>
    <div v-for="video in $store.state.videos" :key="video.id">
      <router-link :to="`/videos/${video.id}`"> {{ video.name }} </router-link>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'AudioBuku - List Province'
  },
  async fetch({$axios, store}) {
    let response = await $axios.get('/province');
    let videos = response.data.data.map(v => v);
    store.commit('SET_VIDEOS', videos)
  },
}
</script>

<style lang="scss" scoped>

</style>