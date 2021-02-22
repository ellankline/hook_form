import React from 'react';


const NewUserDisplay = (props) => {
    const {displayNewUser} = props;
    //const {firstName, lastName, email, password, confirmPW} = displayNewUser.props;
    return (
        <div>
            <p>Your Form Data</p>
            <p>First Name: {displayNewUser.firstName ? displayNewUser.firstName :''}</p>
            <p>Last Name: {displayNewUser.lastName ? displayNewUser.lastName :''}</p>
            <p>Email: {displayNewUser.email ? displayNewUser.email :''}</p>
            <p>Password: {displayNewUser.password ? displayNewUser.password :''}</p>
            <p>Confirm Password: {displayNewUser.confirmPW ? displayNewUser.confirmPW :''}</p>
        </div>
    );
};

export default NewUserDisplay;