import { createContext } from 'react';

export const AppContext = createContext({
  isLoggedIn: false,
  error: null,
  searchQuery: undefined,
  login: (username, password) => { },
  logout: () => { },
  setSearchQuery: (searchQuery) => { }
});
