import React from 'react'
import { connect } from 'react-redux'
import Filter from '../pure/Filter'
import { serVisibilityFilter } from '../../actions/actions'


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(serVisibilityFilter(ownProps))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;