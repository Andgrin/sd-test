import React, { Component} from 'react';
// import PropTypes from 'prop-types';
import CardsList from './CardsList';
import { connect } from 'react-redux';
// import { updateEmploee } from '../actions/emploee';


class Home extends Component {
    // static propTypes = {
    //     updateEmploee: PropTypes.func.isReqired
    // }

    // constructor() {
    //     super();
    //     this.state = {
    //     cards: []
    //     }
    // }

    // updateEmploee = props => {
    //     this.state.updateEmploee .updateEmploee(this.state.cards);
    // }

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
                console.log(data, this);
                // this.setState({ cards: data });

                // dispatch(updateEmploee(data));
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        return (
            <CardsList employees={this.props.employees} />
        )
    }
}


function mapStateToProps (state) {
    return {
        employees: state.employees
    }
}

// mapDispatchToProps = (dispatch, data) => {
//     return {
//         // dispatch(updateEmploee(data))
//     }
// }

export default connect(mapStateToProps)(Home);
