import React from 'react';
import PropTypes from 'prop-types';
import '../css/Card.css'

const Card = props => (
    <li className="one-card" >
        <div className="avatar">
            <img src={props.avatar} alt="" />
        </div>

        <div className="employee-info">
            <p className="emploee-name"> 
                <span>{props.first_name}</span>
                &nbsp;
                <span>{props.last_name}</span> 
            </p>
            <p className="emploee-company">
                <span>Company:</span>&nbsp;
                {props.company}
            </p>
            <p className="emploee-address">
                <span>Address:</span>&nbsp; 
                {props.adress}
            </p>
            <p className="emploee-phone">
                <span>Tel:</span>&nbsp; 
                {props.phone}
            </p>
            <p className="emploee-email">
                <span>E-mail:</span>&nbsp; 
                {props.email}
            </p>
        </div>
    </li>
);

Card.protoTypes = {
    avatar: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
}

export default Card;