export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError( async error => {
    const code = parseInt(error.response && error.response.status)
    

    const token = app.$auth.getToken()
    const refreshToken = app.$auth.getRefreshToken()
    if (token && refreshToken) {

      if (code === 401) {

        const { data } = await $axios.post('/refresh', { refresh_token: refreshToken })
        console.log(data)
        app.$auth.setUserToken(data.access_token)
        app.$auth.setRefreshToken('local', data.refresh_token)
        return $axios.request(error.config)
      }

      if (code === 401 || code === 403) {
        // store.dispatch('logout')
        // router.push({ name: 'login' })
        redirect('/login')
      }
    }

    return Promise.reject(error)

  })
}