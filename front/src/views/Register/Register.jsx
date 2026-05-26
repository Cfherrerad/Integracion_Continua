import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import validateRegister from "../../helpers/validateRegister";
import axios from "axios";


const Register = () => {
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        confirmPassword: "",
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    
    const handleChange = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post("http://backend:8080/users/register",form);
            
            console.log(response.data);
            alert("User correctly registered");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    useEffect(()=>{
        const errors = validateRegister(form);
        setErrors(errors);
    },[form])

    return (
        <main className={styles.bodyContainer}>
            <div className={styles.registerContainer}>
            <h2>Sign up in the app</h2>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label>Name:</label>
                    <input onChange={handleChange} type="text" name='name' value={form.name} />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Email:</label>
                    <input onChange={handleChange} type="text" name='email' value={form.email} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Birthdate:</label>
                    <input onChange={handleChange} type="date" name='birthdate' value={form.birthdate} />
                    {errors.birthdate && <p>{errors.birthdate}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>nDni:</label>
                    <input onChange={handleChange} type="number" name='nDni' value={form.nDni} />
                    {errors.nDni && <p>{errors.nDni}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Username:</label>
                    <input onChange={handleChange} type="text" name='username' value={form.username} />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Password:</label>
                    <input onChange={handleChange} type="text" name='password' value={form.password} />
                    {errors.password && <p>{errors.password}</p>}
                </div>                
                <div className={styles.inputGroup}>
                    <label>Confirm password:</label>
                    <input onChange={handleChange} type="text" name='confirmPassword' value={form.confirmPassword} />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <button>Send</button>
            </form>
            </div>
        </main>
    );
}

export default Register;