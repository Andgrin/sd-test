import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmploeeActionCreator from '../actionTypes/emploee'
import '../css/SearchBlock.css';

class SearchBlock extends Component {
    static propTypes = {
        findValue: PropTypes.string.isRequired
    };

    render() {  
        const { dispatch, findValue } = this.props;
        const setFindFilterValue = bindActionCreators(EmploeeActionCreator.setFindFilterValue, dispatch);

        return (
            <div className="search-form" >
                <label className="is-hidden" htmlFor="search">Search</label>
                
                <input type="search" 
                        onChange={ () => setFindFilterValue(this.query.value) }
                        name="search" 
                        ref={(input) => this.query = input}
                        placeholder="Search..." />
            </div>      
        );
    }
}

const mapStateToProps = state => (
    {
        findValue: state.findValue
    }
);
  
export default connect(mapStateToProps)(SearchBlock);