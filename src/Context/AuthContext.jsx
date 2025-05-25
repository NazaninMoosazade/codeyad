import { createContext } from "react";

const AuthContext = createContext({
    isLoggIn : false,
    token: null,
    userInfos: null,
    login: () => {},
    logout: () => {}
})

export default AuthContext