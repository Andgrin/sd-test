import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { updateEmploee } from '../actionTypes/emploee';

class FetchData  {

    getList() {
        fetch('http://localhost:3004/employees/')
        .then(
        function(response) {
            if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
                response.status);
            return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
            console.log(data);
            });
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
};

const mapDispatchToProps = (dispatch, data) => {
    return {
        updateEmployees: (data) => {
            dispatch(updateEmploee(data))
        }
    }
}

// export default FetchData;
export default connect(null, mapDispatchToProps)(FetchData);