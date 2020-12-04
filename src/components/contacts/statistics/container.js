import { compose } from 'redux'
import { connect } from 'react-redux'
import { View } from './view'
import { getContacts } from 'store/contacts/selectors'

const mapStateToProps = (state) => ({
    contacts: getContacts(state)
})

const mapDispatchToProps = {}

const StatsContacts = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View)

export { StatsContacts }