import axios from "axios";
import styles from "./Login.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import validateLogin from "../../helpers/validateLogin";

const Login = () => {
        const initialState = {
        username: "",
        password: "",
    };

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post("http://localhost:8080/users/login",values);
            
            localStorage.setItem("user", JSON.stringify(response.data.user));

            const user = localStorage.getItem("user");
            console.log(JSON.parse(user));
            alert("successful login");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <main>
            <h2>Login in the app</h2>
            <Formik validate={validateLogin} initialValues={initialState} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field type="text" name='username'/>
                        <ErrorMessage name='username' component='p'/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type="text" name='password'/>
                        <ErrorMessage name='password' component='p'/>
                    </div>
                    <button>Login</button>
                </Form>
            </Formik>
        </main>
    );
}

export default Login;