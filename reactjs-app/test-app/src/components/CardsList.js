import React, {Component} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../css/CardsList.css'


class CardsList extends Component {

    static propTypes = {
        employees: PropTypes.array
    };    

    render() {
        const {
            employees,
            sortKey,
            sortDirection,
            findValue
        } = this.props;
       
        const employeeComponents = employees
            .filter(function(element, index){
                let name = employees[index].first_name.toLowerCase() + ' ' + employees[index].last_name.toLowerCase();
                if (name.startsWith(findValue, 0)) return true;
                return false;
            })
            .sort(function(a,b){ 
                if( sortKey === 1 && sortDirection === 1 ) {
                    let nameA = a.first_name.toLowerCase() + a.last_name.toLowerCase();
                    let nameB = b.first_name.toLowerCase() + b.last_name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                }

                if( sortKey === 1 && sortDirection === -1 ) {
                    let nameA = a.first_name.toLowerCase() + a.last_name.toLowerCase();
                    let nameB = b.first_name.toLowerCase() + b.last_name.toLowerCase();
                    if (nameA < nameB) return 1;
                    if (nameA > nameB) return -1;
                }

                if( sortKey === 2 && sortDirection === 1 ) {
                    if (a.phone < b.phone) return -1;
                    if (a.phone > b.phone) return 1;
                }

                if( sortKey === 2 && sortDirection === -1 ) {
                    if (a.phone < b.phone) return 1;
                    if (a.phone > b.phone) return -1;
                }

                return 0;
            })
            .map((employee, index) => (
                <Card
                    key={'card-' + employee.id}
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
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        sortKey: state.sortKey,
        sortDirection: state.sortDirection,
        findValue: state.findValue
    }
}

export default connect(mapStateToProps)(CardsList);