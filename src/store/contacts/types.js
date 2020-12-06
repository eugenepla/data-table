const PREFIX = '@@contacts/';

export const OActionTypes = {
  fetchContacts: `${PREFIX}FETCH_CONTACTS`,
  saveContacts: `${PREFIX}SAVE_CONTACTS`,

  filterContacts: `${PREFIX}FILTER_CONTACTS`,
  saveFilteredContacts: `${PREFIX}SAVE_FILTERED_CONTACTS`,
  filtersReset: `${PREFIX}FILTERS_RESET`,

  showLoader: `${PREFIX}SHOW_LOADER`,
  hideLoader: `${PREFIX}HIDE_LOADER`
}

