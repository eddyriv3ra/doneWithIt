import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "../Icon";

interface ICategoryPickerItem {
  item: any;
  onPress: () => void;
}

const CategoryPickerItem = ({ item, onPress }: ICategoryPickerItem) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
