import styles from "./Navbar.module.css";
import logo from '../../assets/logo-small.png';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));

        const handleStorageChange = (event) => {
            if (event.key == "user") {
                setUser(JSON.parse(localStorage.getItem("user")));
            }
        };
        window.addEventListener("storage", handleStorageChange);

        const handleFocus = () => {
                setUser(JSON.parse(localStorage.getItem("user")));
        };
        window.addEventListener("focus", handleFocus);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("focus", handleFocus);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
    <header className={styles.header}>
        <div>
            <img src={logo} alt="" className={styles.logoNavbar}/>
        </div>
        {/* <h1>Appointments page</h1> */}
        <nav>
            <ul className={styles.navLinks}>
                <li>
                   <Link to='/'>Home</Link>
                </li>
                {user ? (
                    <>
                        <li>
                            <Link to='/appointments'>Appointments</Link>
                        </li>
                        <li>
                            <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Sign up</Link>
                        </li>
                    </>
                ) }


            </ul>
        </nav>
    </header>
    );
}

export default Navbar;