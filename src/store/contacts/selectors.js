import { createSelector } from 'reselect';

export function getFullName(title, first, last) {
  return `${title} ${first} ${last}`;
}

const _getContactsState = (state) => state.contacts;

export const getContacts = createSelector(
  [_getContactsState],
  (contacts) => contacts.contacts
)

export const getFilters = createSelector(
  [_getContactsState],
  (contacts) => contacts.filters
)

export const getFilteredContacts = createSelector(
  [getContacts, getFilters],
  (contacts, filters) => {
    let filtered = [...contacts]

    if (filters?.fullName) {
      filtered = filtered.filter(item => {
        const fullName = `${item.name.title} ${item.name.first} ${item.name.last}`
        return fullName?.toLowerCase().includes(filters?.fullName?.toLowerCase())
      })
    }
    if (filters?.gender) {
      filtered = filtered?.filter(item => item.gender === filters.gender)
    }
    if (filters?.nationality && filters.nationality.length) {
      filtered = filtered.filter(item => filters.nationality.includes(item.nat));
    }
    if (filters?.creator) {
      filtered = filtered.filter(item => item.creator === filters.creator)
    }



    return filtered
  }
)

export const selectLoading = createSelector(
  [_getContactsState],
  (contacts) => contacts.loading
)