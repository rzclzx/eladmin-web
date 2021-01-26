import request from './axios/baseAxios'

export function saveMenu(data) {
  return request({
    url: 'api/roles/menu',
    method: 'put',
    data
  })
}

export function list(params) {
  return request({
    url: 'api/role',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'api/role',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/role',
    method: 'delete',
    data: [id]
  })
}

export function edit(data) {
  return request({
    url: 'api/role',
    method: 'put',
    data
  })
}
