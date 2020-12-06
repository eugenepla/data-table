import { compose } from 'redux'
import { connect } from 'react-redux'
import { View } from './view'
import { fetchContacts } from 'store/contacts/actions'
import {
  getContacts,
  getFilteredContacts,
  selectLoading
} from 'store/contacts/selectors'

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state) || getContacts(state),
  loading: selectLoading(state)
})

const mapDispatchToProps = {
  fetchContacts
}

const TabularContacts = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(View);

export { TabularContacts }