import service from '@/utils/request'

export function login(data: any) {
  return service({
    url: '/gdep-auth/token',
    method: 'post',
    data,
  })
}
