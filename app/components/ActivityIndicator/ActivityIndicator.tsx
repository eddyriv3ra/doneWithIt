import React from "react";
import LottiveView from "lottie-react-native";

interface IActivityIndicator {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: IActivityIndicator) => {
  if (!visible) return null;

  return (
    <LottiveView
      autoPlay
      loop
      source={require("../../assets/animations/loader.json")}
    />
  );
};

export default ActivityIndicator;
