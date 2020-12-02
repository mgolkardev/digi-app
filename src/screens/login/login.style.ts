/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { StyleSheet, Dimensions } from "react-native";
import { Styles } from "common/styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    ...Styles.container
  },
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  formControl: {
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: "stretch",
    minHeight: 50,
  },
  logo: {
    maxWidth: width / 3,
    maxHeight: width / 3,
    borderRadius: width / 5,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "column",
    borderRadius: 10,
    margin: 20,
  },
  bottomLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  welcome:{
    fontSize:25,
    textAlign:'center',
    marginTop:25,
    marginBottom:50,
  }
});
