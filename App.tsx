import React from "react";
import Navigation from "./app/navigation";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import "react-native-gesture-handler";

export default function App() {
  const netInfo = useNetInfo();
  return <Navigation />;
}
