import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  items,
  name,
  width,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
}: any) => {
  const { errors, setFieldValue, touched, values }: any = useFormikContext();

  return (
    <>
      <Picker
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        width={width}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
