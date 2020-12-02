/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { AsyncStorage } from "react-native";

import _ from "lodash";

export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    // Error saving data
  }
};
export const readToken = async () => {
  try {
    await AsyncStorage.getItem("token");
  } catch (error) {
    // Error saving data
  }
};

export const getMoviePoster = (id: number) => {
  const posters = [
    require(`assets/posters/1.jpg`),
    require(`assets/posters/2.jpg`),
    require(`assets/posters/3.jpg`),
    require(`assets/posters/4.jpg`),
    require(`assets/posters/5.jpg`),
    require(`assets/posters/6.jpg`),
    require(`assets/posters/7.jpg`),
    require(`assets/posters/8.jpg`),
    require(`assets/posters/1.jpg`),
    require(`assets/posters/2.jpg`),
  ];
  return posters[parseInt(id.toString().slice(-1))];
};
