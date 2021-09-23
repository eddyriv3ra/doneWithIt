import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface IPickerItem {
  label: string;
  onPress: () => void;
}

const PickerItem = ({ label, onPress }: IPickerItem) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
