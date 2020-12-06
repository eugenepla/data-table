import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
import { OActionTypes } from './types'
import { saveContacts } from './actions'
import { API } from 'services'

function* fetchContacts() {
  try {
    const data = yield call(API.contacts.fetchContacts)
    yield put(saveContacts(data))
  }
  catch (e) {
    console.log('error', e)
  }
}

export function* contactsSaga() {
  console.log('contactsSaga')
  yield takeEvery(OActionTypes.fetchContacts, fetchContacts)
}

function* changeFilters(action) {
  console.log('dsasaddad')
  yield put({ type: OActionTypes.saveFilteredContacts, payload: action.payload })
}

export function* filtersSaga() {
  console.log('filtersSaga')
  yield takeLatest(OActionTypes.saveFilteredContacts, changeFilters)
}




