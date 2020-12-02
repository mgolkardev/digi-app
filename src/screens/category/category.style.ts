/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { Dimensions, StyleSheet } from "react-native";
import { Styles } from "common/styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  poster: {
    height: 100,
  },
  main: {
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    paddingHorizontal: 10,
  },
});
