import { OActionTypes } from './types'
import { createReducer } from 'store/utils'

const initialState = {
  loading: false,
  contacts: [],
  filters: {
    fullName: '',
    gender: '',
    nationality: [],
    creator: false
  },
  filteredContacts: [],
  view: "tiledView"
}

export const reducer = createReducer(initialState, {
  [OActionTypes.fetchContacts](state) {
    return { ...state, loading: true }
  },
  [OActionTypes.saveContacts](state, action) {
    return { ...state, contacts: action.payload.data, loading: false };
  },
  [OActionTypes.filterContacts](state, action) {
    console.log('action filterContacts', action)
    return { ...state, filters: action.payload }
  },
  [OActionTypes.saveFilteredContacts](state, action) {
    console.log('action saveFilteredContacts', action)
    return { ...state, filteredContacts: action.payload }
  },
  [OActionTypes.filtersReset](state) {
    return { ...state, filters: initialState.filters };
  },
  [OActionTypes.changeViewContacts](state, action) {
    console.log('action', action)
    return { ...state, view: action.payload }
  }
});
