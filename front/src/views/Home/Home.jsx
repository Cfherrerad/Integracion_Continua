import styles from './Home.module.css'


const Home = () => {
    return <div className={styles.body}>
        <div className={styles.home}>
            <h1>¡Bienvenido a HD Appointments!</h1>
            <p>Gracias por confiar en nuestra clínica. Aquí podrás gestionar tus turnos de forma rápida, sencilla y segura. Elige el profesional, el día y el horario que mejor se adapten a tus necesidades. ¡Estamos para cuidarte!</p>  
        </div>
    </div>
} 
export default Home;