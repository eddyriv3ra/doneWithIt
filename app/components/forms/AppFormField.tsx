import React from "react";
import { useFormikContext, FormikErrors } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Input from "../Input";
import ErrorMessage from "./ErrorMessage";
import { TextInputProps } from "react-native";

interface AppFormField extends TextInputProps {
  name: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  width?: number;
}

const AppFormField = ({ name, width, ...otherProps }: AppFormField) => {
  const { setFieldTouched, setFieldValue, errors, touched, values }: any =
    useFormikContext();

  return (
    <>
      <Input
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
