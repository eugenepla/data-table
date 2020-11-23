import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
import { OActionTypes } from './types'
import { saveContacts } from './actions'
import { API } from 'services'

function* loadContacts() {
  const data = yield call(API.contacts.fetchContacts)
  yield put(saveContacts(data))
}

export function* contactsSaga() {
  yield takeEvery(OActionTypes.fetchContacts, loadContacts)
}