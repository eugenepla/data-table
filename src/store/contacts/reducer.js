import { OActionTypes } from './types'
import { createReducer } from 'store/utils'

const initialState = {
  contactsArray: [],
  loading: false
}

export const reducer = createReducer(initialState, {
  [OActionTypes.fetchContacts](state) {
    return { ...state, loading: true };
  },
  [OActionTypes.saveContacts](state, action) {
    return { ...state, contactsArray: action.payload.data, loading: false };
  }
});

/*
[OActionTypes.fetchContactsFailed](state) {
    return { ...state, loading: false };
  },
  */