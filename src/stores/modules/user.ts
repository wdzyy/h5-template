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
    setToken(data: any) {
      this.token = data.accessToken
      this.userInfo = data
    },
    // 获取token
    getToken() {
      return this.token
    },
  },
})
