import styles from "./Appointments.module.css";
import {useState, useEffect} from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import axios from "axios";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import { useNavigate } from "react-router-dom"

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

const apiCall = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.get(`http://localhost:8080/appointments/${user.id}`)
    localStorage.setItem("appointments",JSON.stringify(response.data.data));
    console.log(response)
        const data = response.data.data;
        setAppointments(
            data === undefined ? [] : 
            Array.isArray(data) ? data : 
            [data]
        );   
};

const handleAddAppointment = (newAppoinment) => {
    setAppointments ((prevState) => [...prevState, newAppoinment])
}

const handleCancelAppointment = () => {
    apiCall();
}

useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        navigate("/");
    } else {
    apiCall();
    }
},[])
    
    return (
    <main className={styles.body}>
        <AppointmentForm addAppointment={handleAddAppointment}/>
        <h2 className={styles.title}>All appointments</h2>
        <div className={styles.appointmentsContainer}>
            {appointments.map((a) =>(
            <div key={a.id}>
                <AppointmentCard onCancel={handleCancelAppointment} appointment = {a} />
            </div>
        ))}
        </div>
    </main>
    );
};

export default Appointments;