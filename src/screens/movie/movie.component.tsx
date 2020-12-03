/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React, { useEffect } from "react";
import {
  Icon,
  List,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import { styles } from "./movie.style";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "interfaces/irootstate.interface";
import { getMovies } from "reducers/movie/get.reducer";
import { Search } from "components/search/search.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovieTile } from "components/tile/movie.tile.component";
import { LoadingIndicator } from "components/indicator/indicator.component";
import { Title } from "components/title/title.component";
import { MovieScreenProps } from "types/screens/movie.type";
import { MovieRenderItemProps } from "types/screens/renderitems/movieitem.type";
import { ResultZero } from "components/resultzero/resultzero.component";

export const MovieScreen = ({
  route,
  navigation,
  search = "",
}: MovieScreenProps) => {
  const tag = route?.params?.tag;
  const [searchValue, setSearchValue] = React.useState(search);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const movieReducer = useSelector((state: IRootState) => {
    return state.movie;
  });

  const reduxDispatch = useDispatch();

  useEffect(() => {
    if (!search) getMovies(reduxDispatch, tag ?? "", searchValue);
  }, []);

  let sto: any;

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  useEffect(() => {
    if (sto) clearTimeout(sto);

    sto = setTimeout(() => {
      getMovies(reduxDispatch, tag ?? "", searchValue);
    }, 1000);
    return () => {
      if (sto) clearTimeout(sto);
    };
  }, [searchValue]);

  useEffect(() => {
    if (
      !movieReducer.get.fetching &&
      movieReducer.get.done &&
      movieReducer.get.data
    ) {
      setIsRefreshing(!isRefreshing);
    }
  }, [movieReducer.get.fetching]);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackIcon = (props: any) => (
    <Icon {...props} name="arrow-back-outline" />
  );

  const renderBackAction = () => (
    <TopNavigationAction onPress={navigateBack} icon={BackIcon} />
  );

  const renderItem = ({ item }: MovieRenderItemProps) => {
    return <MovieTile item={item} key={`movie-item-${item.id}`} />;
  };

  const handleLoadMore = () => {
    if (movieReducer.get.data.next) {
      getMovies(
        reduxDispatch,
        tag ?? "",
        searchValue,
        movieReducer.get.data.next
      );
    }
  };

  const noItemDisplay = () => <ResultZero />;

  const renderFooter = () =>
    movieReducer.get.data.next ? <LoadingIndicator /> : <></>;

  return (
    <SafeAreaView style={styles.container}>
      {!search && (
        <>
          <TopNavigation
            title={tag ? tag : "All Movies"}
            alignment="center"
            accessoryLeft={renderBackAction}
            style={{}}
          />
          <Search
            placeholder={`Search movie in ${
              tag ? `${tag} category` : `all categories`
            }`}
            value={searchValue}
            setValue={setSearchValue}
          />

          <Title caption={`All ${tag ?? ""} movies`} style={styles.title} />
        </>
      )}

      {movieReducer.get.fetching ? (
        <LoadingIndicator />
      ) : (
        <List
          style={styles.list}
          data={movieReducer.get.data.results}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={(i) => i.id}
          refreshing={isRefreshing}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={noItemDisplay}
        />
      )}
    </SafeAreaView>
  );
};
