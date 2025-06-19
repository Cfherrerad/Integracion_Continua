const validateLogin = (formData) => {
    const errors = {};

    if(!formData.username.trim()){
        errors.username = "El username es requerido";
    }
    if(!formData.password.trim()){
        errors.password = "El password es requerido";
    }

    return errors;
};

export default validateLogin;