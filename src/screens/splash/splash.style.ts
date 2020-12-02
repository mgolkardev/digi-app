/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { StyleSheet } from "react-native";

import { Styles } from "common/styles";
import { Colors } from "common/colors";

export const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  formControl: {
    alignSelf: "stretch",
    borderWidth: 0,
    borderRadius: 0,
    flex: 1,
    minHeight: 50,
  },
  poster: {
    flex: 1,
    resizeMode: "contain",
  },
  buttons: {
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 20,
  },
  register: {
    backgroundColor: "#e4e8ee",
    borderRadius: 10,
    color: Colors.secondary,
  },
  register_text: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  login: {
    backgroundColor: Colors.secondary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
