/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

import { styles } from "./home.style";
import { Search } from "components/search/search.component";

import { MovieScreen } from "screens/movie/movie.component";
import { CategorySlider } from "./category_slider/category.component";
import { MovieSlider } from "./movie_slider/slider.component";
import { ScrollView } from "react-native-gesture-handler";
import { getLastMovies } from "reducers/movie/last.reducer";
import { useDispatch } from "react-redux";
import { getCategories } from "reducers/movie/category.reducer";

export const HomeScreen = ({ navigation }: any) => {
  const [searchValue, setSearchValue] = React.useState("");

  const reduxDispatch = useDispatch();
  useEffect(() => {
    getCategories(reduxDispatch);
    getLastMovies(reduxDispatch);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Search
        placeholder="Search movie"
        value={searchValue}
        setValue={setSearchValue}
      />

      {searchValue ? (
        <MovieScreen search={searchValue} />
      ) : (
        <ScrollView style={styles.scrollView}>
          <CategorySlider navigation={navigation} />
          <MovieSlider navigation={navigation} type="Top" />
          <MovieSlider navigation={navigation} type="New" />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
