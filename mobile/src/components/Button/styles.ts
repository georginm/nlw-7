import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },
  title: {},
  icon: {
    marginRight: 12,
  },
});
