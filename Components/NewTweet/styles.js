import { StyleSheet } from "react-native";
import { colors } from "../../Constants/colors";

export const styles = StyleSheet.create({
  main: {
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
  },
});
