import { request } from '@/utils/request'

export function fetchNavConf () {
  return request({
    url: '/api/nav',
    method: 'get'
  })
}
export function login (params:object) {
  return request({
    url: '/api/login',
    method: 'get',
    data:params
  })
}