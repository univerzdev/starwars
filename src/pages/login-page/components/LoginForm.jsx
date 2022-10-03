import { Alert, Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import { useContext, useRef } from "react";

import { AppContext } from "../../../contexts/app-context";

const LoginForm = () => {

    const appContext = useContext(AppContext);
    const isLoggedIn = appContext.isLoggedIn;
    const error = appContext.error;
    const usernameRef = useRef();
    const passwordRef = useRef();

    const onLoginHandler = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        appContext.login(username, password);
    }

    const onLogoutHandler = (e) => {
        e.preventDefault();
        appContext.logout();
    }

    return (
        <Box className="login-box">
            {isLoggedIn ?
                <>
                    <h1 style={{ textAlign: 'center' }}>Logout</h1>
                    <form onSubmit={onLogoutHandler}>
                        <Button onClick={onLogoutHandler} type="submit">Logout</Button>
                    </form>
                </>
                :
                <>
                    <h1 style={{ textAlign: 'center' }}>Login</h1>
                    <form onSubmit={onLoginHandler}>
                        <FormControl>
                            <InputLabel sx={{ color: '#fff', borderColor: '#fff' }}>username</InputLabel>
                            <Input inputRef={usernameRef} id="username" type="text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel sx={{ color: '#fff', borderColor: '#fff' }}>password</InputLabel>
                            <Input inputRef={passwordRef} id="password" type="password" />
                        </FormControl>
                        <Button type="submit">Login</Button>
                    </form>
                    {error && <Alert severity="error">{error}</Alert>}
                </>
            }
        </Box>
    )
}

export default LoginForm;