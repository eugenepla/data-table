import { OActionTypes } from './types';
import { createAction } from 'store/utils'

export const fetchContacts = () => ({
  type: OActionTypes.fetchContacts
})

export const saveContacts = (action) => ({
  type: OActionTypes.saveContacts,
  payload: action
})

export const filterContacts = (filter) => ({
  type: OActionTypes.filterContacts,
  payload: filter
})

export const saveFilteredContacts = (action) => ({
  type: OActionTypes.saveFilteredContacts,
  payload: action
})