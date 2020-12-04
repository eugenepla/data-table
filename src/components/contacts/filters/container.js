import { compose } from 'redux'
import { connect } from 'react-redux'
import { View } from './view'
import { filterContacts } from 'store/contacts/actions'
import { getFilters } from 'store/contacts/selectors'

const mapStateToProps = (state) => ({
    filters: getFilters(state)
})

const mapDispatchToProps = {
    filterContacts
}

const FiltersContacts = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View)

export { FiltersContacts }