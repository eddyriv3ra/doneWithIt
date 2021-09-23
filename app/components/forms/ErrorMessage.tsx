import React from "react";
import { StyleSheet, Text } from "react-native";
import { FormikErrors, FormikTouched } from "formik";

interface IErrorMessage {
  error: FormikErrors<unknown>;
  visible: FormikTouched<unknown>;
}

const ErrorMessage = ({ error, visible }: IErrorMessage) => {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
