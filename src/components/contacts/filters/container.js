import { compose } from 'redux'
import { connect } from 'react-redux'
import { View } from './view'
import { filterContacts } from 'store/contacts/actions'
import { getFilters, getFilteredContacts } from 'store/contacts/selectors'

const mapStateToProps = (state) => ({
    filters: getFilters(state),
    filteredData: getFilteredContacts(state)
})

const mapDispatchToProps = {
    filterContacts
}

const FiltersContacts = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View)

export { FiltersContacts }