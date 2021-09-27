import { useContext } from "react";
import { AuthContext } from "../auth/context";
import authStorage from "./storage";

import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, setUser, logIn };
};
