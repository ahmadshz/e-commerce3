import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const RequiredDashboard = () => {
    const cookies = new Cookies();
    const token = cookies.get('auth_token');

    // Check if the token exists and is a valid string
    if (!token || typeof token !== 'string') {
        return <Navigate to={'/'} replace={true} />;
    }

    try {
        // Decode the token
        const { role } = jwtDecode(token);

        // Check if the user is an admin
        return role === 'admin' ? <Outlet /> : <Navigate to={'/'} replace={true} />;
    } catch (error) {
        console.error('Error decoding token:', error);
        return <Navigate to={'/'} replace={true} />;
    }
};

export default RequiredDashboard;