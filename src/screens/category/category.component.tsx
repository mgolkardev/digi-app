/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { Layout, List } from "@ui-kitten/components";

import { styles } from "./category.style";
import { useSelector } from "react-redux";
import IRootState from "interfaces/IRootState";
import { Search } from "components/search/search.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoadingIndicator } from "components/indicator/indicator.component";
import { Title } from "components/title/title.component";
import { MovieTile } from "components/tile/movie.tile.component";
import { Images } from "common/images";

export const CategoryScreen = ({ navigation }: any) => {
  const [searchValue, setSearchValue] = React.useState("");
  const movieReducer = useSelector((state: IRootState) => {
    return state.movie;
  });

  const onCategory = (movie: any) => {
    navigation.navigate("movie", { tag: movie.name });
  };

  const renderItem = ({ item }: any) => {
    return (
      <MovieTile
        item={{
          title: item.name,
          poster: Images.netflix,
        }}
        key={`category-item-${item.id}`}
        onItemClick={() => onCategory(item)}
        imageStyle={styles.poster}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search
        placeholder="Search category"
        value={searchValue}
        setValue={setSearchValue}
      />
      <Layout style={styles.main}>
        <Title caption="All Categories" style={styles.title} />
        {movieReducer.category.fetching ? (
          <LoadingIndicator />
        ) : (
          <List
            data={movieReducer.category.data?.results?.filter((x: any) =>
              x.name.toLowerCase().includes(searchValue.toLowerCase())
            )}
            renderItem={renderItem}
            numColumns={3}
          />
        )}
      </Layout>
    </SafeAreaView>
  );
};
