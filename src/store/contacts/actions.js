import { OActionTypes } from './types';
import { createAction } from 'store/utils'

export const fetchContacts = () => {
  console.log('OActionTypes.fetchContacts', OActionTypes.fetchContacts)
  return {
    type: OActionTypes.fetchContacts
  }
}

export const saveContacts = (action) => {
  console.log('OActionTypes.saveContacts', OActionTypes.saveContacts)
  return {
    type: OActionTypes.saveContacts,
    payload: action
  }
}