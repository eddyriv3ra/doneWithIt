import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import { ErrorMessage } from "../forms";
import ImageInputList from "../ImageInputList";

interface IFormImagePicker {
  name: string;
}

const FormImagePicker = ({ name }: IFormImagePicker) => {
  const { setFieldValue, values, errors, touched }: any = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    const imageUrisCopy = imageUris.filter((imageUri: any) => imageUri !== uri);
    setFieldValue(name, [...imageUrisCopy]);
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
