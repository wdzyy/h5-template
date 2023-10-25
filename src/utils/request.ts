import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // api base_url
  timeout: 5000, // 请求超时时间
})
// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log(config, 'config')

    // 在请求发送之前做一些处理
    // if (store.getters.getToken) {
    //   // 让每个请求携带自定义 token 请根据实际情况自行修改
    //   config.headers.Authorization = getToken()
    // }
    return config
  },
  (error) => {
    // 发送失败
    console.log(error) // for debug
    return Promise.reject(error)
  },
)
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    // 如果自定义代码不是 200，则将其判断为错误。
    if (res.code !== 200) {
      /* ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      })
      // 401: 未登录
      if (res.code === 401) {
        // 重新登录
        store.dispatch('user/resetToken').then(() => {
          router.push('/login')
        })
      } */
      return Promise.reject(new Error(res.message || 'Error'))
    }
    else {
      return res
    }
  },
  (error) => {
    console.log(`err${error}`) // for debug
    /* ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    }) */
    return Promise.reject(error)
  },
)
export default service
