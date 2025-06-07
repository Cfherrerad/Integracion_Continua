import styles from "./AppointmentCard.module.css"
const AppointmentCard = ({ appointment }) => {
    const { id, date, time, status} = appointment;

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
        </div>
    );
}

export default AppointmentCard;