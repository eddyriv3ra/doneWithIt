import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import navigationTheme from "./navigationTheme";
import AuthNavigator from "./AuthNavigator";
import { AuthContext } from "../auth/context";

export default function Navigation() {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
