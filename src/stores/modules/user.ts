import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userInfo',
  state: () => ({
    token: 'token jlkasjdl12jldkjas9daslkjdasdlasmd1',
    userInfo: {},
  }),
  getters: {
    getUserInfo: state => state.userInfo,
  },
  actions: {
    // 设置token
    setToken(token: string) {
      this.token = token
    },
    // 获取token
    getToken() {
      return this.token
    },
  },
})
