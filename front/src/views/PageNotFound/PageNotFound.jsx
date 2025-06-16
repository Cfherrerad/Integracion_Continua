import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
    const navigate = useNavigate();
    const [countdown,setCountdown] = useState(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown -1 );
        }, 1000);

        const navigatePageTimeout = setTimeout(() => {
            clearInterval(countdownInterval);
            navigate("/");
        },5000);

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(navigatePageTimeout);
        };
    },[navigate]);

    return (
        <div>
            <h2>Page not found</h2>
            <p>You will be redirected to home page in {countdown} seconds.</p>
        </div>
    );
};

export default PageNotFound;