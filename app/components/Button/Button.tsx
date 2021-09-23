import React, { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import colors from "../../config/colors";

interface IButton extends TouchableOpacityProps {
  color: "primary" | "secondary";
  children: ReactNode;
  onPress: any;
}

const Button = ({ color, children, onPress }: IButton) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
