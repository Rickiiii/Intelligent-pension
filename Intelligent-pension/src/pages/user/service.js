import { request, config } from 'utils'

const { api } = config
const {
  patientSearch, patientDelete, patientAdd, patientPay, patientEdit
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
