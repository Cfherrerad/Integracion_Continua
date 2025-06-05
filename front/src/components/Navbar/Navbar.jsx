import styles from "./Navbar.module.css";
import logo from '../../assets/logo-small.png';

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
                   <a href="#">Home</a>
                </li>
                <li>
                   <a href="#">Register</a>
                </li>
                <li>
                   <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;