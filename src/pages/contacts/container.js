import { compose } from 'redux'
import { connect } from 'react-redux'
import { View } from './view'
import { getContacts, getContactsView } from 'store/contacts/selectors'
import { fetchContacts, changeViewContacts } from 'store/contacts/actions'

const mapStateToProps = (state) => ({
    contacts: getContacts(state),
    view: getContactsView(state)
})

const mapDispatchToProps = {
    fetchContacts, changeViewContacts
}

const PageContacts = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View)

export { PageContacts }