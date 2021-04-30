import React, { useState } from 'react';
import validateForm from './validateForm';

const useForm = (validateForm) => {
    const [userRegistration, setuserRegitration] = useState(
        {
            username: "",
            email: "",
            gender: "",
            phone: "",
            password: "",
        }
    );

    const [isValid, setValidation] = useState({})
    const [isSubmitted, setSubmisson] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setuserRegitration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidation(validateForm(userRegistration));
        if (Object.keys(isValid).length === 0) {
            // alert(Object.keys(isValid).length);
            setSubmisson(true);
        }
        else{
            setSubmisson(false);
        }
    }

    return { handleInput, userRegistration, handleSubmit, isValid, isSubmitted };
};

export default useForm;
// const handleSubmit = (e) => {
//     // let email=userRegistration.email;
//     // alert(email.split("@")[0]);
//     // const name = e.target.name;
//     // setValidation({ ...isValid, [name]: false })
//     // alert(isValid.username);
//     e.preventDefault();
// }