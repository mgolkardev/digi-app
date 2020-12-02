/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { StyleSheet } from "react-native";
import { Styles } from "common/styles";

export const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  scrollView: {
    paddingHorizontal: 20,
    flex: 1,
  },
  bottomNavigation: {
    marginVertical: 8,
    backgroundColor: "#A8A09F",
    borderRadius: 25,
    marginHorizontal: 50,
  },
});
