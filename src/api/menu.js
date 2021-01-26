import request from './axios/baseAxios'

export function getMenusTree(params) {
  return request({
    url: 'api/menu/tree',
    method: 'get',
    params
  })
}

export function buildMenus() {
  return request({
    url: 'api/menu/build',
    method: 'get'
  })
}

export function get(params) {
  return request({
    url: 'api/menu',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'api/menu',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/menu',
    method: 'delete',
    data: [id]
  })
}

export function edit(data) {
  return request({
    url: 'api/menu',
    method: 'put',
    data
  })
}