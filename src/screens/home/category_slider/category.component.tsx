/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { Card, List, ListItem, Text } from "@ui-kitten/components";

import _ from "lodash";

import { styles } from "./category.style";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/IRootState";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoadingIndicator } from "components/indicator/indicator.component";
import { ICategory } from "interfaces/movie/ICategory";
import { CategoryRenderItemProps } from "types/screens/renderitems/categoryitem.types";

export const CategorySlider = ({ navigation }: any) => {
  const movieReducer = useSelector((state: IRootState) => {
    return state.movie;
  });

  const onItemClick = (item: ICategory) => {
    navigation.navigate("movie", { tag: item.name });
  };

  const renderItem = ({ item }: CategoryRenderItemProps) => (
    <ListItem key={`cat-item-${item.id}`}>
      <Card
        style={styles.item}
        onPress={() => {
          onItemClick(item);
        }}
      >
        <Text>{item.name}</Text>
      </Card>
    </ListItem>
  );

  return (
    <SafeAreaView style={styles.container}>
      {movieReducer.category.fetching ? (
        <LoadingIndicator />
      ) : (
        <List
          data={_.sampleSize(movieReducer.category.data.results, 6)}
          renderItem={renderItem}
          horizontal={true}
        />
      )}
    </SafeAreaView>
  );
};
