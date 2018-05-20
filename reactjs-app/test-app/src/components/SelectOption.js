import React from 'react';

const Option = props => (
    <option value={props.value} key={props.value}>
        {props.name}
    </option>
);

export default Option;