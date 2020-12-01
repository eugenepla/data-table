import { compose } from 'redux'
import { connect } from 'react-redux'
import { View } from './view'
import { fetchContacts } from 'store/contacts/actions'
import { getContacts, getFilteredContacts } from 'store/contacts/selectors'

const mapStateToProps = (state) => ({
  contacts: getContacts(state)
})

const mapDispatchToProps = {
  fetchContacts
}

const TabularContacts = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(View);

export { TabularContacts }