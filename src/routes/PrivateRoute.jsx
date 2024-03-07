/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"

const PrivateRoute = () => {
    const { auth } = useAuth();
    return (
        <>
            {
                auth?.user ? <Outlet/> : <Navigate to="/login" />
            }
        </>
    )
}

export default PrivateRoute