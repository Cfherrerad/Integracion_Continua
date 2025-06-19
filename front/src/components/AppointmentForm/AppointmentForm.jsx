import styles from "./AppointmentForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import validateAppointment from "../../helpers/validateAppointment";
import axios from "axios";

const AppointmentForm = ({addAppointment}) => {
    const initialState = {
        date: "",
        time: ","
    };

    const handleSubmit = async (values) => {
        try{
            const user = JSON.parse(localStorage.getItem("user"));
            const response = await axios.post("http://localhost:8080/appointments/schedule",{
                ...values,
                userId: user.id,
            });

            addAppointment( response.data.data);

            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert(error.response.data.message)
        }
    };

    const hour = [8,9,10,11,12,13,14,15,16,17,18,19,20];

    return (
        <div className={styles.bodyContainer}>
            <h2>Register your appointment</h2>
            <Formik initialValues={initialState} validate={validateAppointment} onSubmit={handleSubmit}>
                <Form className={styles.registerContainer} >
                    <label>Date:</label>
                    <Field type='date' name='date' />
                    <ErrorMessage name='date' component='p' />

                    <label>Time:</label>
                    <Field as='select' name='time' >
                        {hour.map((hour, index) => (
                            <option key={index +1} value={hour+":00"}>
                                {hour}:00
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name='time' component='p' />

                    <button type='submit'>Send</button>
                </Form>
            </Formik>
        </div>
    );
}



export default AppointmentForm;