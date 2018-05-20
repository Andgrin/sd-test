import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSortDirection } from '../actionTypes/emploee';

class SortDirections extends Component {
    static propTypes = {
        sortDirection: PropTypes.number.isRequired,
        sortKey: PropTypes.number.isRequired
    };

    render() {
        const {
            dispatch,
            sortDirection,
            sortKey
        } = this.props;

        if( sortKey > 0 ) {
            return (
                <div className="sort-buttons_wrapper" >
                    <p >Select direction: </p>
                    <button 
                        type="button" 
                        className="sort-btn" 
                        onClick={() => this.props.setSortDirection(1)}
                    >
                        Up
                    </button>

                    <button type="button" 
                        className="sort-btn" 
                        onClick={() => this.props.setSortDirection(-1)} 
                    >
                        Down
                    </button>
                </div>
            )
        } else {
            return false;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        sortKey: state.sortKey 
    }
}

const mapDispatchToProps = (dispatch, data) => {
    return {
        setSortDirection: (val) => {
            dispatch(setSortDirection(val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortDirections);