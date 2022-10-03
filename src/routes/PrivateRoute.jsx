import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AppContext } from "../contexts/app-context";

const PrivateRoute = (props) => {
    const appContext = useContext(AppContext);
    const isLoggedIn = appContext.isLoggedIn;
    const { children } = props;
    return isLoggedIn ? children : <Navigate to='/' />
}
export default PrivateRoute;