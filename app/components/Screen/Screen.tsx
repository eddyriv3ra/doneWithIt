import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IScreen {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Screen = ({ children, style }: IScreen) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
