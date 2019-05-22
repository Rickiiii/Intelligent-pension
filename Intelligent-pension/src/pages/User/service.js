import { request, config } from 'utils'

const { api } = config
const {
  patientSearch, patientDelete, patientAdd, patientPay, patientEdit, userRights, addUserRights, deleteUserRights, editUserRights
} = api

export function search(data) {
  return request({
    url: patientSearch,
    method: 'post',
    data,
  })
}

export function userDelete(data) {
  return request({
    url: patientDelete,
    method: 'post',
    data,
  })
}

export function addUser(data) {
  return request({
    url: patientAdd,
    method: 'post',
    data,
  })
}

export function pay(data) {
  return request({
    url: patientPay,
    method: 'post',
    data,
  })
}

export function edit(data) {
  return request({
    url: patientEdit,
    method: 'post',
    data,
  })
}


export function userFetch(data) {
  return request({
    url: userRights,
    method: 'post',
    data,
  })
}

export function addUsers(data) {
  return request({
    url: addUserRights,
    method: 'post',
    data,
  })
}


export function editUsers(data) {
  return request({
    url: editUserRights,
    method: 'post',
    data,
  })
}

export function deleteUsers(data) {
  return request({
    url: deleteUserRights,
    method: 'post',
    data,
  })
}
