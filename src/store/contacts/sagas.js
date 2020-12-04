import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
import { OActionTypes } from './types'
import { saveContacts } from './actions'
import { API } from 'services'

function* fetchContacts() {
  const data = yield call(API.contacts.fetchContacts)
  yield put(saveContacts(data))
}

function* changeFilters(action) {
  yield put({
    type: (
      action.payload.filters
        ? OActionTypes.filterContacts
        : OActionTypes.filtersReset
    ),
    payload: action.payload,
  });
}

export function* contactsSaga() {
  yield takeEvery(OActionTypes.fetchContacts, fetchContacts)
  yield takeLatest(OActionTypes.saveFilteredContacts, changeFilters)
}




