import { OActionTypes } from './types'
import { createReducer } from 'store/utils'

const initialState = {
  contactsArray: [],
  loading: false
}

export const reducer = createReducer(initialState, {
  [OActionTypes.fetchContacts](state) {
    console.log('state', state)
    return { ...state, loading: true };
  },
  [OActionTypes.saveContacts](state, action) {
    console.log('action', action)
    return { ...state, contactsArray: action.payload.data, loading: false };
  }
});

/*
[OActionTypes.fetchContactsFailed](state) {
    return { ...state, loading: false };
  },
  */