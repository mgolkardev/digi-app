/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React, { Profiler } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "screens/login/login.component";
import { HomeNavigator as HomeScreen } from "screens/home/home.navigation";
import { MovieScreen } from "screens/movie/movie.component";
import { Animated } from "react-native";

const { Navigator, Screen } = createStackNavigator();

const forSlide = ({ current, next, inverted, layouts: { screen } }: any) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

const HomeNavigator = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "transparent" },
      cardOverlayEnabled: true,
      cardStyleInterpolator: forSlide,
    }}
    mode="modal"
  >
    <Screen name="login" component={LoginScreen} />
    <Screen name="home" component={HomeScreen} />
    <Screen name="movie" component={MovieScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
