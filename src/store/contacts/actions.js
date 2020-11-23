import { OActionTypes } from './types';
import { createAction } from 'store/utils'

export const fetchContacts = () => {
  return {
    type: OActionTypes.fetchContacts
  }
}

export const saveContacts = (action) => {
  return {
    type: OActionTypes.saveContacts,
    payload: action
  }
}