import { createSelector } from 'reselect';

const _getContacts = (state) => state.contacts;

export const getContactsArray = createSelector(
    [_getContacts],
    (contacts) => contacts.contactsArray
);
