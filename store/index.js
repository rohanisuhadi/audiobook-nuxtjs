import { getData } from '@/utils/store-utils'

export const state = () => ({
  audios: [],
  audio: {}
})

export const mutations = {
  SET_AUDIOS(state, audios){
    state.audios = audios
  },
  SET_AUDIO(state, audio){
    state.audio = audio
    // this.$auth.logout()
    
    
  },
  SET_REFRESH(state, token){

    

    this.$cookies.set('auth._refresh_token.local', token.refresh_token)
    this.$cookies.set('auth.strategy', 'local')
    this.$cookies.set('auth._token.local', token.token_type+' '+token.access_token)
    this.$auth.setUserToken(token.access_token)
    // this.$auth.setToken('local', token.token_type + ' ' + token.access_token)
    // console.log(this.$cookies.get('auth._token.local'));
    
  },
  SET_LOGOUT(state){
    this.$auth.reset()
  }
}

export const actions = {
  async loadAllAudios({commit}){
    let { data: audios } = await getData('/audiobooks', this.$axios, this.$cookies)
    commit('SET_AUDIOS', audios)
  },
  async getLoadAudio({commit}, {audioId}){
    let { data: audio } = await getData(`/audiobooks/${audioId}`, this.$axios, this.$cookies);
    commit('SET_AUDIO', audio)
  },
  async getAudiosByAuthor({commit}, {authorId}){
    let { data: audios } = await getData(`/audiobooks?author_id=${authorId}`, this.$axios)
    commit('SET_AUDIOS', audios)
  },
  async setToken({commit}, {token}){
    commit('SET_REFRESH', token)
  },
  async setLogout(){
    commit('SET_LOGOUT')
  }
}

