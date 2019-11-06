import { request } from '@/utils/request'

export function fetchNavConf () {
  return request({
    url: '/api/nav',
    method: 'get'
  })
}