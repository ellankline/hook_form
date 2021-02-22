import React, { useState } from 'react';
import NewUserDisplay from './newUserDisplay';

const NewUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');
    const [display, setDisplay] = useState([]);
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
                        onChange ={ (e) => setFirstName(e.target.value) }
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                        type='text' 
                        value={lastName} 
                        onChange ={ (e) => setLastName(e.target.value) }
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type='text' 
                        value={email} 
                        onChange ={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type='password' 
                        value={password} 
                        onChange ={ (e) => setPassword(e.target.value) }
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input 
                        type='password' 
                        value={confirmPW} 
                        onChange ={ (e) => setConfirmPW(e.target.value) }
                    />
                </div>

                <button type='submit'>Submit</button>
                <NewUserDisplay displayNewUser={display} />
            </form>
        </div>
    );
};

export default NewUser;