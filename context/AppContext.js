import React from "react";

const AppContext = React.createContext({ isAuthenticated: false, user: null });
export default AppContext;