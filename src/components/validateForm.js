
const validateForm = (userRegistration) => {
    let errors = {};
    if (!userRegistration.username.trim()) {
        errors.username = 'Usrename required'
    }

    if (!userRegistration.email) {
        errors.email = 'Email required'
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userRegistration.email)) {
        errors.email = 'Invalid Email'
    }

    if (!userRegistration.phone) {
        errors.phone = 'phone Required'
    }
    else if (userRegistration.phone.length != 10) {
        errors.phone = 'phone required exact 10 numbers'
    }

    if (!userRegistration.password) {
        errors.password = 'Password Required'
    }
    else if (userRegistration.password.length < 6) {
        errors.password = 'Password required more than 6 characters'
    }
    return errors;
};

export default validateForm;