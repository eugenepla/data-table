import { compose } from 'redux'
import { connect } from 'react-redux'
import { View } from './view'
import {
  getContacts,
  getFilteredContacts,
  loadingSelect
} from 'store/contacts/selectors'

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state) || getContacts(state),
  loading: loadingSelect(state)
})

const mapDispatchToProps = {}

const TiledContacts = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(View);

export { TiledContacts }