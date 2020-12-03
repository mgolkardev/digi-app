/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { List } from "@ui-kitten/components";

import _ from "lodash";

import { styles } from "./slider.style";
import { useSelector } from "react-redux";
import { IRootState } from "interfaces/irootstate.interface";
import { SafeAreaView } from "react-native-safe-area-context";

import { MovieTile } from "components/tile/movie.tile.component";
import { LoadingIndicator } from "components/indicator/indicator.component";
import { Title } from "components/title/title.component";
import { MovieSliderProps } from "types/screens/movieslider.type";
import { MovieRenderItemProps } from "types/screens/renderitems/movieitem.type";

export const MovieSlider = ({ navigation, type }: MovieSliderProps) => {
  const movieReducer = useSelector((state: IRootState) => {
    return state.movie;
  });

  const onAllClick = () => {
    navigation.navigate("movie");
  };

  const renderItem = ({ item }: MovieRenderItemProps) => {
    return <MovieTile item={item} key={`movie-item-${item.id}`} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title caption={`${type} Movies`} onAllClick={onAllClick} />
      {movieReducer.last.fetching ? (
        <LoadingIndicator />
      ) : (
        <List
          data={_.sampleSize(movieReducer.last.data.results, 10)}
          renderItem={renderItem}
          horizontal={true}
        />
      )}
    </SafeAreaView>
  );
};
