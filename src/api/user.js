import request from './axios/baseAxios'

export function get(params) {
  return request({
    url: '/index',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'api/users',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/users',
    method: 'delete',
    data: [id]
  })
}

export function edit(data) {
  return request({
    url: 'api/users',
    method: 'put',
    data
  })
}
