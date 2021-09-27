import React from "react";
import Navigation from "./app/navigation";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import "react-native-gesture-handler";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const netInfo = useNetInfo();
  return (
    <>
      <OfflineNotice />
      <Navigation />
    </>
  );
}
