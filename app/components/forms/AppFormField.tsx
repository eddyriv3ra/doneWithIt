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

interface FormikTypes {
  setFieldTouched: (value: string) => void;
  handleChange: any;
  errors: any;
  touched: any;
}

const AppFormField = ({ name, width, ...otherProps }: AppFormField) => {
  const { setFieldTouched, handleChange, errors, touched }: FormikTypes =
    useFormikContext();

  return (
    <>
      <Input
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
