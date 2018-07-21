import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Dropdown from 'react-dropdown';
import SelectOption from './SelectOption'
import { connect } from 'react-redux';
import { setSortSelectValue } from '../actionTypes/emploee';

class SelectMenu extends Component {
    static propTypes = {
        defSelectOptions: PropTypes.array.isRequired,
        sortKey: PropTypes.number.isRequired
    };
    
    render() {
        const {
            defSelectOptions,
            sortKey
        } = this.props;

        const optionComponents = defSelectOptions.map((option, index) => (
            <SelectOption
                key={option.id}
                name={option.name}
                value={option.id}
            />
        ));

        return (
            <div className="sort-select_wraper" >
                <label>
                    Sort by:
                    <select 
                        value={sortKey} 
                        onChange={ (e) => this.props.setSortSelectValue(e.target.value) }
                    >
                        {optionComponents}
                    </select>
                </label>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        defSelectOptions: state.defSelectOptions,
        sortKey: state.sortKey 
    }
}

const mapDispatchToProps = (dispatch, data) => {
    return {
        setSortSelectValue: (val) => {
            dispatch(setSortSelectValue(+val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);
