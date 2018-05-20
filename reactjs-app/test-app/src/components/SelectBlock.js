import React, {Component} from 'react';
import SelectMenu from './SelectMenu';
import SortDirections from './SortDirections';
import '../css/SelectBlock.css'

class SelectBlock extends Component {
    render() { 

        return (
            <div className="sort-wraper" >
                <SelectMenu />
                <SortDirections />
            </div>
        )
    }
}
export default SelectBlock;




