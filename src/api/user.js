import request from './axios/baseAxios'

export function list(params) {
  return request({
    url: 'user/list',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'api/user',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/user',
    method: 'delete',
    data: [id]
  })
}

export function edit(data) {
  return request({
    url: 'api/user',
    method: 'put',
    data
  })
}
