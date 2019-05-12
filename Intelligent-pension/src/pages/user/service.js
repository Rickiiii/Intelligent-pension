import { request, config } from 'utils'

const { api } = config
const { patientSearch, patientDelete, patientAdd } = api

export function search (data) {
  return request({
    url: patientSearch,
    method: 'post',
    data,
  })
}

export function userDelete (data) {
  return request({
    url: patientDelete,
    method: 'post',
    data,
  })
}

export function addUser (data) {
  return request({
    url: patientAdd,
    method: 'post',
    data,
  })
}
