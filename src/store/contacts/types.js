const PREFIX = '@@contacts/';

export const OActionTypes = {
  fetchContacts: `${PREFIX}FETCH_CONTACTS`,
  saveContacts: `${PREFIX}SAVE_CONTACTS`,

  filterContacts: `${PREFIX}FILTER_CONTACTS`,
  saveFiltersContacts: `${PREFIX}SAVE_FILTERS_CONTACTS`,
  filtersReset: `${PREFIX}FILTERS_RESET`,

  showLoader: `${PREFIX}SHOW_LOADER`,
  hideLoader: `${PREFIX}HIDE_LOADER`,

  changeViewContacts: `${PREFIX}CHANGE_VIEW_CONTACTS`
}

