import React from 'react'
import FilterContainer from '../containers/FilterContainer'



export const FilterOptions = () => {

    return (
        <div className='filters'>
            {/* Filter Conteiners */}
            <FilterContainer filter='SHOW_ALL'>
                All
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                COMPLETED
            </FilterContainer>
        </div>
    )
}



export default FilterOptions