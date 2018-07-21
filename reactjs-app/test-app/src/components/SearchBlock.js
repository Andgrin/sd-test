import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setFindFilterValue } from '../actionTypes/emploee'
import '../css/SearchBlock.css';

class SearchBlock extends Component {
    render() {  
        return (
            <div className="search-form" >
                <label className="is-hidden" htmlFor="search">Search</label>
                
                <input 
                    type="search" 
                    onChange={ () => this.props.setFindFilterValue(this.query.value)}
                    name="search" 
                    ref={(input) => this.query = input}
                    placeholder="Search..." 
                />
            </div>      
        );
    }
}

const mapDispatchToProps = (dispatch, data) => {
    return {
        setFindFilterValue: (val) => {
            dispatch(setFindFilterValue(val))
        }
    }
}
  
export default connect(null, mapDispatchToProps)(SearchBlock);