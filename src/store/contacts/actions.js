import { OActionTypes } from './types';

export const fetchContacts = () => ({
  type: OActionTypes.fetchContacts
})

export const saveContacts = (payload) => ({
  type: OActionTypes.saveContacts,
  payload
})

export const filterContacts = (payload) => ({
  type: OActionTypes.filterContacts,
  payload
})

export const saveFiltersContacts = (payload) => ({
  type: OActionTypes.saveFiltersContacts,
  payload
})

export const changeViewContacts = (payload) => ({
  type: OActionTypes.changeViewContacts,
  payload
})

//export function updateContacts(seed, size) {
  //return { type: USER_CONTACTS_UPDATE, seed, size };
//}