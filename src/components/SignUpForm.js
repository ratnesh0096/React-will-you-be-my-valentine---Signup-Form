import React, { useState } from 'react';
import '../styles/SignUpForm.css';
import useForm from './useForm';
import validateForm from './validateForm';
validateForm
const SignUpForm = () => {
    const { handleInput, userRegistration, handleSubmit, isValid, isSubmitted } = useForm(validateForm);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="username"
                        value={userRegistration.username}
                        onChange={handleInput} data-testid='name'
                    />
                    {isValid.username && <p>Invalid username</p>}
                </div>
                <br />
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email" value={userRegistration.email}
                        onChange={handleInput}
                        data-testid='email'
                    />
                    {isValid.email && <p>Invalid email</p>}
                </div>
                <br />
                <div>
                    <label>Select gender</label>&nbsp;&nbsp;
                    <select
                        name="gender"
                        value={userRegistration.gender}
                        onChange={handleInput}
                        data-testid='gender'
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <br />
                <div>
                    <label>Phone Number</label>
                    <input
                        type="number" 
                        name="phone"
                        value={userRegistration.phone}
                        onChange={handleInput}
                        data-testid='phoneNumber'
                    />
                    {isValid.phone && <p>Invalid phone number</p>}
                </div>
                <br />

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userRegistration.password}
                        onChange={handleInput}
                        data-testid='password'
                    />
                    {isValid.password && <p>Invalid password</p>}
                </div>
                <br />
                <button type="submit" data-testid='submit'>SUBMIT</button>
            </form>
            {isSubmitted && <h2> Welcome Boi</h2>}
        </>
    );
};

export default SignUpForm;