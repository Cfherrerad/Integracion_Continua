const validateLogin = (formData) => {
    const errors = {};

    if(!formData.username.trim()){
        errors.username = "El username es requerido";
    }else if (formData.username.length <= 3){
        errors.username = "El username debe tener al menos 3 caracteres"
    }

    if(!formData.password.trim()){
        errors.password = "El password es requerido";
    }else if (formData.password.length < 8){
        errors.password = "El password debe tener al menos 8 caracteres"
    }

    return errors;
};

export default validateLogin;