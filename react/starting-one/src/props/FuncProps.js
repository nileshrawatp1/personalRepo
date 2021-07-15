import React from 'react';

const PropertiesG = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} who works as a {props.work}</h1>
            {props.children}
        </div>
    )
}
export default PropertiesG