import axios from "axios";
import styles from "./AppointmentCard.module.css"

const AppointmentCard = ({ appointment, onCancel }) => {
    const { id, date, time, status} = appointment;

    const handleCancel = async () => {
        try {
            await axios.put(`http://localhost:8080/appointments/cancel/${id}`);
            alert("Appointment cancelled");
            onCancel();

        } catch (error) {
            alert(error.response.data.data)
        }
    };

    return (
        <div className={styles.body}>
            <h3>Appointment Id:{id}</h3>
            <p>
                <strong>📅Date:</strong> {date}
            </p>
            <p>
                <strong>⌚Time:</strong> {time}
            </p>
            <p>
                <strong>Status:</strong> {status}
            </p>
            {status == "active" && <button onClick={handleCancel}>Cancel</button>}
        </div>
    );
}

export default AppointmentCard;