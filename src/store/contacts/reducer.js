import { OActionTypes } from './types'
import { createReducer } from 'store/utils'

const initialState = {
  loading: false,
  contacts: [],
  filteredContacts: [],
  filters: {
    fullName: '',
    gender: '',
    nationality: [],
    creator: false
  }
}

export const reducer = createReducer(initialState, {
  [OActionTypes.fetchContacts](state) {
    return { ...state, loading: true }
  },
  [OActionTypes.saveContacts](state, action) {
    return { ...state, contacts: action.payload.data, loading: false };
  },
  [OActionTypes.filterContacts](state, action) {
    console.log('action!!!!!!', action)
    return { ...state, filters: action.payload, loading: true }
  },
  [OActionTypes.saveFilteredContacts](state, action) {
    return { ...state, filteredContacts: action.payload, loading: false }
  },
  [OActionTypes.filtersReset](state) {
    return { ...state, filters: initialState.filters };
  }
});

/*
[OActionTypes.fetchContactsFailed](state) {
    return { ...state, loading: false };
  },
  */