import React, {Component} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as EmploeeActionCreator from '../actionTypes/emploee'

import '../css/CardsList.css'


class CardsList extends Component {

    static propTypes = {
        employees: PropTypes.array
    };

    render() {

        const {dispatch, employees } = this.props;
        // const updateEmploee = bindActionCreators(EmploeeActionCreator.updateEmploee, dispatch);

        const employeeComponents = employees.map((employee, index) => (
            <Card
                key={employee.id}
                adress={employee.adress}
                avatar={employee.avatar}
                company={employee.company}
                email={employee.email}
                first_name={employee.first_name}
                id={employee.id}
                last_name={employee.last_name}
                phone={employee.phone}
            />
          ));


        return (
            <ul className="cards-list">
                {employeeComponents}
            </ul>
        );
    }
    // const results = props.data;
    // let cards = results.map(card =>
    //     <Card avatar={card.avatar} 
    //         first_name={card.first_name} 
    //         last_name={card.last_name} 
    //         adress={card.adress} 
    //         company={card.company} 
    //         phone={card.phone} 
    //         email={card.email} 
    //         key={card.id} 
    //      />
    // );

    
}

const mapStateToProps = (state) => {
    return {employees: state.employees }
}

export default connect(mapStateToProps)(CardsList);