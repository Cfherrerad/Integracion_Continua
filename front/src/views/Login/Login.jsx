import axios from "axios";
import styles from "./Login.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import validateLogin from "../../helpers/validateLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const initialState = {
        username: "",
        password: "",
    };

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post("http://backend:8080/users/login",values);
            
            localStorage.setItem("user", JSON.stringify(response.data.user));

            const _user = localStorage.getItem("user");
            // console.log(JSON.parse(user));
            alert("successful login");
            navigate("/");
        } catch (error) {
            if(error.status == 400){
                // console.log(error.status)
                alert("Incorrect credentials");
            } else{
                // console.log(error.status)
                alert(error.message);
            }
        }
    };

    return (
        <main className={styles.bodyContainer}>
            <div className={styles.loginContainer}>
                <h2>Login <br/> Welcome back!</h2>
                <Formik validate={validateLogin} initialValues={initialState} onSubmit={handleSubmit}>
                    <Form className={styles.loginForm}>
                        <div className={styles.inputGroup}>
                            <label>Username:</label>
                            <Field type="text" name='username'/>
                            <ErrorMessage name='username' component='p'/>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Password:</label>
                            <Field type="password" name='password'/>
                            <ErrorMessage name='password' component='p'/>
                        </div>
                        <button>Login</button>
                    </Form>
                </Formik>
            </div>
        </main>
    );
}

export default Login;