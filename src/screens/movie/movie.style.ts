/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { Colors } from "common/colors";
import { Styles } from "common/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  title: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
  },
});
