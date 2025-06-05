import styles from "./Appointments.module.css";
import {useState} from "react";
import {appointmentsData} from "../../helpers/myAppointments";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";

const Appointments = () => {
    const [appointments, setAppointments] = useState(appointmentsData);
    
    return (
    <main className={styles.body}>
        <h2 className={styles.title}>All appointments</h2>
        <div className={styles.appointmentsContainer}>
            {appointments.map((a) =>(
            <div>
                <AppointmentCard key={a.id} appointment = {a} />
            </div>
        ))}
        </div>
    </main>
    );
};

export default Appointments;