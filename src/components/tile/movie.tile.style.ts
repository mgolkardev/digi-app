/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { Colors } from "common/colors";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  item: {
    width: width / 3,
    flex: 1,
  },
  item_box: {
    borderRadius: 10,
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.tile_bg,
  },
  poster: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
