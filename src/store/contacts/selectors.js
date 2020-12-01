import { createSelector } from 'reselect';

const _getContacts = (state) => state.contacts;

export const getContacts = createSelector(
  [_getContacts],
  (contacts) => contacts.contacts
)

export const getFilters = createSelector(
  [_getContacts],
  (contacts) => contacts.filters
)

export const getFilteredContacts = createSelector(
  [_getContacts],
  (contacts, filters) => {
    let filtered = [...contacts]

    console.log('filtered', filtered)
  }
)


//export const getRefreshedContacts = createSelector(
  //[_getSearchedContacts],
  //(searchedList) => contacts.filters
//)