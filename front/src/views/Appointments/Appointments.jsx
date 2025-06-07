import styles from "./Appointments.module.css";
import {useState, useEffect} from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import axios from "axios";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

const apiCall = async () => {
    const response = await axios.get("http://localhost:8080/appointments");
    setAppointments(response.data.data);
    console.log(response.data.data);
    
};

useEffect(() => {
    apiCall();
},[])
    
    return (
    <main className={styles.body}>
        <h2 className={styles.title}>All appointments</h2>
        <div className={styles.appointmentsContainer}>
            {appointments.map((a) =>(
            <div key={a.id}>
                <AppointmentCard appointment = {a} />
            </div>
        ))}
        </div>
    </main>
    );
};

export default Appointments;