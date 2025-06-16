import styles from "./Navbar.module.css";
import logo from '../../assets/logo-small.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <header className={styles.header}>
        <div>
            <img src={logo} alt="" className={styles.logoNavbar}/>
        </div>
        <h1>Appointments page</h1>
        <nav>
            <ul className={styles.navLinks}>
                <li>
                   <Link to='/'>Home</Link>
                </li>
                <li>
                   <Link to='/appointments'>Appointments</Link>
                </li>
                <li>
                   <Link to='/register'>Register</Link>
                </li>
                <li>
                   <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;