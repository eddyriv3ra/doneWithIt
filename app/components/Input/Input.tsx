import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

interface IAppTextInout extends TextInputProps {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  placeholder?: string;
  width?: number;
}

const AppTextInput = ({
  icon,
  width,
  onBlur,
  ...otherProps
}: IAppTextInout) => {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
