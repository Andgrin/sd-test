import React, { Component} from 'react';
// import PropTypes from 'prop-types';
import CardsList from './CardsList';
import { connect } from 'react-redux';
import { updateEmploee } from '../actionTypes/emploee';
import Filters from './Filters';


class Home extends Component {
    componentDidMount() {
        return fetch('http://localhost:3004/employees/')
            .then( (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                // Examine the text in the response
                return response.json()
            })
            .then((data) => {
                // console.log(data, this);
                this.props.updateEmployees(data)
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        return (
            <div>
                <Filters />
                <CardsList />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, data) => {
    return {
        updateEmployees: (data) => {
            dispatch(updateEmploee(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(Home);
