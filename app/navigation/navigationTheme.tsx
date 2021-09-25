import { DefaultTheme, Theme } from "@react-navigation/native";
import colors from "../config/colors";

const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

export default myTheme;
