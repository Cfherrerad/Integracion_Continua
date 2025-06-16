const validateRegister = (formData) => {
    const errors = {};

    if(!formData.name.trim()){
        errors.name = "El nombre es requerido";
    }else if (formData.name.length <= 3){
        errors.name = "El nombre debe tener al menos 3 caracteres"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formData.email.trim()){
        errors.email = "El email es requerido";
    }else if (!emailRegex.test(formData.email)){
        errors.email = "El email ingresado no es valido"
    }

    if(!formData.birthdate){
        errors.birthdate = "El birthdate es requerido";
    }else{
        const birthdate = new Date(formData.birthdate);
        const age = new Date().getFullYear()-birthdate.getFullYear();
        if(age<18){
        errors.birthdate = "Debes tener mas de 18 años para registrarte"
        }
    }

    if(!formData.nDni.trim()){
        errors.nDni = "El nDni es requerido";
    }else if (formData.nDni.length <= 3){
        errors.nDni = "El nDni debe tener al menos 3 caracteres"
    }

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

    if(formData.password !== formData.confirmPassword){
        errors.confirmPassword = "El password no coincide";
    }

    return errors;
};

export default validateRegister;