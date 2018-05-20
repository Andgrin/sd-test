import React from 'react';
import SelectBlock from './SelectBlock';
import SearchBlock from './SearchBlock';
import '../css/Filters.css'

const Filters = props => {
    return (
        <div className="filters-block">
            <SelectBlock />
            <SearchBlock />
        </div>
    )
}

export default Filters;