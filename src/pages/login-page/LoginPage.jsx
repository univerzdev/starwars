import { Container } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AppContext } from "../../contexts/app-context";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {

    const appContext = useContext(AppContext);

    if (appContext.isLoggedIn) {
        return <Navigate to="/people" />
    }
    
    return (
        <Container sx={{ textAlign: 'center' }}>
            {!appContext.isLoggedIn && <LoginForm />}
        </Container>
    );
}

export default LoginPage;