import React, { createContext, useState } from "react";
import AppLoading from "expo-app-loading";
import authStorage from "./storage";

export const AuthContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) return setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContextProvider;
