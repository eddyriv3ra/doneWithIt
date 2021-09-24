import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface IPickerItem {
  item: any;
  onPress: () => void;
}

const PickerItem = ({ item, onPress }: IPickerItem) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
