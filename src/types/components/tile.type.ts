/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import { ImageSourcePropType } from "react-native";

export type TileProps = {
  item: {
    title: string;
    poster: ImageSourcePropType;
  };
  onItemClick?: () => void;
  imageStyle?: object;
};
