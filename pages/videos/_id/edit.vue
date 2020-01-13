<template>
  <div>
    Were in Index edit {{ video.name }}
    <router-link :to="`/videos/${video.province_id}`">
      <button class="btn rounded bg-gray-600 px-3 py-2">Back to show</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['video'],
    head:{
      title: 'Edit'
    }
  }
</script>

<style lang="scss" scoped>

</style>