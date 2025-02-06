import { Navigate, useLocation, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const location = useLocation();
    const loading = false;
    const token = localStorage.getItem("token"); // Check if user is authenticated

    if (loading) return <Loader />; // Show loader while authentication state is being checked

    return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
}
