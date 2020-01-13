import { async } from "rsvp"

const strategy = 'local'

export default function ({ $axios, redirect , app, store}) {
  
  $axios.onRequest(config => {
    return config
  }, error => {
    return Promise.reject(error)
  })

  $axios.onError(async error => {

    // token = app.$auth.getToken(strategy)
    // refreshToken = app.$auth.getRefreshToken(strategy)

    if (app.$auth.getToken(strategy) && app.$auth.getRefreshToken(strategy)) {

      if (error.response.status === 401) {
        const { data } = await $axios.put('/auth', { refresh_token: app.$auth.getRefreshToken(strategy) })
        
        store.dispatch('setToken', { token: data })
        
        return $axios.request(error.config)
      }

      if (error.response.status === 401 || error.response.status === 403) {
        app.$auth.reset();
        // redirect('/login');
      }
    }

    return Promise.reject(error)

  })
}