import React, { useContext } from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Login, Logout } from "@mui/icons-material";

import { AppContext } from "../contexts/app-context";

const Header = () => {

    const appContext = useContext(AppContext);
    const isLoggedIn = appContext.isLoggedIn;

    const onLogout = (e) => {
        e.preventDefault();
        appContext.logout();
    }

    return (
        <AppBar className="navbar" position='static' sx={{ backgroundColor: '#000000', padding: '25px', marginBottom: '40px' }}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    <NavLink to={'/'} ><img width='150px' src='https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png' alt='Star Wars' /></NavLink>
                </Typography>
                <Stack direction='row' spacing={4}>
                    {isLoggedIn && <Button onClick={onLogout} variant='outlined' endIcon={<Logout />} color='white'>Logout</Button>}
                    {!isLoggedIn && <NavLink to={'/'} ><Button variant='outlined' endIcon={<Login />} color='white'>Login</Button></NavLink>}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
export default Header;