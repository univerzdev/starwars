import { useReducer } from "react";

import { AppContext } from "./app-context";

import { DUMMY_LOGIN_DATA } from "../data/credentials";

const defaultState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    error: null,
    searchQuery: undefined
}

const appReducer = (state, action) => {
    if (action.type === 'LOGIN_USER') {
        if (action.payload) {
            return { ...defaultState, error: action.payload, isLoggedIn: false };
        }
        return { ...defaultState, isLoggedIn: true };
    }

    if (action.type === 'LOGOUT_USER') {
        return { ...defaultState, isLoggedIn: false }
    }
    if (action.type === 'SET_SEARCH_QUERY') {
        return { ...state, searchQuery: action.payload };
    }
    return state;
}

const AppProvider = props => {
    const [appState, dispatchAppAction] = useReducer(
        appReducer, defaultState
    );

    const login = (username, password) => {
        if (username.trim() !== '' && password.trim() !== '') {
            const userIndex = DUMMY_LOGIN_DATA.findIndex(el => el.username === username);
            if (userIndex !== -1) {
                if (DUMMY_LOGIN_DATA[userIndex].password === password) {
                    dispatchAppAction({ type: 'LOGIN_USER' });
                    localStorage.setItem('isLoggedIn', '1');
                }
                else {
                    dispatchAppAction({ type: 'LOGIN_USER', payload: "You have entered an incorrect password. (u:admin, pw:admin)" })
                }
            }
            else {
                dispatchAppAction({ type: 'LOGIN_USER', payload: "The user with the entered login name does not exist  (u:admin, pw:admin)" })
            }
        }
        else {
            dispatchAppAction({ type: 'LOGIN_USER', payload: "Please enter name and password  (u:admin, pw:admin)" })
        }
    }

    const logout = () => {
        dispatchAppAction({ type: 'LOGOUT_USER' });
        localStorage.removeItem('isLoggedIn');
    }

    const setSearchQuery = (searchQuery) => {
        dispatchAppAction({ type: 'SET_SEARCH_QUERY', payload: searchQuery })
    }

    const appContext = {
        isLoggedIn: appState.isLoggedIn,
        error: appState.error,
        searchQuery: appState.searchQuery,
        login,
        logout,
        setSearchQuery
    }

    return <AppContext.Provider value={appContext}>{props.children}</AppContext.Provider>
}
export default AppProvider;