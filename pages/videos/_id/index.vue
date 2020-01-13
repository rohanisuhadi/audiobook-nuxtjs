<template>
  <div>
    We're are in video {{ video.name }}
    <router-link :to="`/videos/${video.province_id}/edit`">
      <button class="btn rounded bg-gray-600 px-3 py-2">Edit</button>
    </router-link>
    <router-link :to="`/videos`">
      <button class="btn rounded bg-gray-600 px-3 py-2">Back to index</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['video'],
    head: {
      title: 'Watch'
    }
  }
</script>

<style lang="scss" scoped>

</style>