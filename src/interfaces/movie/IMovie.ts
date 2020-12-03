import { ImageSourcePropType } from "react-native";

/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
export interface IMovie {
  id: number;
  title: string;
  date_of_release: string;
  rating: number;
  tags: string[];
  director: string;
  poster: ImageSourcePropType;
}
