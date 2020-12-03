/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { ListItem, Text } from "@ui-kitten/components";

import { styles } from "./movie.tile.style";
import { View, Image } from "react-native";
import { TileProps } from "types/components/tile.types";

export const MovieTile = ({ item, onItemClick, imageStyle }: TileProps) => {
  return (
    <ListItem style={[styles.item]} onPress={onItemClick}>
      <View style={styles.item_box}>
        <Image style={[styles.poster, imageStyle]} source={item.poster} />
        <Text numberOfLines={1} style={{ textAlign: "center", padding: 10 }}>
          {item.title}
        </Text>
      </View>
    </ListItem>
  );
};
