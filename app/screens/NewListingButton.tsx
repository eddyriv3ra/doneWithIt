import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

interface INewListingButton {
  onPress: () => void;
}

const NewListingButton = ({ onPress }: INewListingButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 20,
  },
});
