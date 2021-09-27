import React from "react";
import Navigation from "./app/navigation";
import "react-native-gesture-handler";
import OfflineNotice from "./app/components/OfflineNotice";
import UserContextProvider from "./app/auth/context";

export default function App() {
  return (
    <UserContextProvider>
      <OfflineNotice />
      <Navigation />
    </UserContextProvider>
  );
}
