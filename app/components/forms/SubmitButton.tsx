import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

interface ISubmitButton {
  title: string;
}

const SubmitButton = ({ title }: ISubmitButton) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button color="primary" onPress={handleSubmit}>
      {title}
    </Button>
  );
};

export default SubmitButton;
