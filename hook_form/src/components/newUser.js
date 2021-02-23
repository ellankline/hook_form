import React, { useState } from 'react';
import NewUserDisplay from './newUserDisplay';

const NewUser = () => {
    const [firstName, setFirstName] = useState('');
        const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState('');
        const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState('');
        const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState('');
        const [passwordError, setPasswordError] = useState("");
    const [confirmPW, setConfirmPW] = useState('');
        const [confirmPWError, setConfirmPWError] = useState("");
    const [display, setDisplay] = useState([]);
    
    function handleFirstName(e) {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("Name must be 2 characters or longer!");
        } else if (e.target.value >= 2) {
            setFirstNameError('');
        };
    };

    function handleLastName(e) {
        setLastName(e.target.value);
        if (e.target.value >= 2) {
            setLastNameError('');
        } else if (e.target.value.length < 2) {
            setLastNameError("Name must be 2 characters or longer!");
        };
    };

    function handleEmail(e) {
        setEmail(e.target.value);
        if (e.target.value >= 5) {
            setEmailError('');
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        };
    };

    function handlePassword(e) {
        setPassword(e.target.value);
        if (e.target.value >= 8) {
            setPasswordError('');
        }
        else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        };
    };

    function handleConfirmPW(e) {
        setConfirmPW(e.target.value);
        if (e.target.value === password) {
            setConfirmPWError('');
        } else {
                setConfirmPWError("Password must match!");
            };
        };

    const submitForm = (e) => {
        e.preventDefault();
        setDisplay({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPW: confirmPW,
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPW('');
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>First Name</label>
                    <input 
                        type='text'
                        value={firstName} 
                        onChange ={ handleFirstName }
                    />
                    { firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> : ''
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                        type='text' 
                        value={lastName} 
                        onChange ={ handleLastName }
                    />
                    { lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> : ''
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type='text' 
                        value={email} 
                        onChange ={ handleEmail }
                    />
                    { emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> : ''
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type='password' 
                        value={password} 
                        onChange ={ handlePassword }
                    />
                    { passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> : ''
                    }
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input 
                        type='password' 
                        value={confirmPW} 
                        onChange ={ handleConfirmPW }
                    />
                    { confirmPWError ?
                    <p style={{color:'red'}}>{ confirmPWError }</p> : ''
                    }
                </div>

                <button type='submit'>Submit</button>
                <NewUserDisplay displayNewUser={display} />
            </form>
        </div>
    );
};

export default NewUser;