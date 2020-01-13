import { getData } from '@/utils/store-utils'

export const state = () => ({
  audios: [],
})

export const mutations = {
  SET_AUDIOS(state, audios) {
    state.audios = audios;
  },
  ADD_AUDIO(state, audio) {
    let audios = state.audios.concat(audio);
    state.audios = audios;
  },
  DELETE_AUDIO(state, videoId) {
    let audios = state.audios.filter(v => v.id != videoId)
    state.audios = audios;
  },
  EDIT_AUDIO(state, audio) {
    let v = state.audios.find(v => v.id == audio.id)
    v = audio;
  }
}

export const actions = {
  async loadAll({ commit, dispatch }) {
    let { data: audios } = await getData('/audiobooks?offset=2', this.$axios, this.$cookies)
    commit('SET_AUDIOS', audios);
  },
  async create({ commit }, audio) {
    let response = await this.$axios.post('/audios', audio);
    let savedVideo = response.data.data.attributes;
    commit('ADD_AUDIO', savedVideo);
    return savedVideo;
  },
  async delete({ commit }, audio) {
    let response = await this.$axios.delete(`/audios/${audio.id}`);
    if (response.status == 200 || response.status == 204) {
      commit('DELETE_AUDIO', audio.id);
    }
  },
  async edit({ commit }, audio) {
    let response = await this.$axios.put(`/audios/${audio.id}`, audio);
    let newVideo = response.data.data.attributes;
    commit('EDIT_AUDIO', newVideo);
    return newVideo;
  },
}

export const getters = {
  get: state => id => {
    return state.audios.find(v => v.id == id) || {}
  }
}