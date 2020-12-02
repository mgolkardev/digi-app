/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CategoryScreen } from "screens/category/category.component";
import { HomeScreen } from "screens/home/home.component";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
  Text,
  TopNavigation,
} from "@ui-kitten/components";
import { styles } from "./home.style";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import IRootState from "interfaces/IRootState";

const HomeIcon = (props: any) => <Icon {...props} name="home-outline" />;

const CategoryIcon = (props: any) => <Icon {...props} name="grid-outline" />;

const PersonIcon = (props: any) => (
  <Icon
    {...props}
    name="person-outline"
    fill="#fff"
    style={{ width: 20, height: 20, marginRight: 10 }}
  />
);

const { Navigator, Screen } = createBottomTabNavigator();

const renderTitle = (username: string) => (
  <Layout
    style={{
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <PersonIcon />
    <Text>{username}</Text>
  </Layout>
);

export const HomeNavigator = () => {
  const userReducer = useSelector((state: IRootState) => {
    return state.user;
  });

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title={() => renderTitle(userReducer.auth.data.username)}
        alignment="center"
      />
      <Navigator
      sceneContainerStyle={{backgroundColor:"red"}}
        tabBar={(props) => (
          <BottomNavigation
            {...props}
            style={styles.bottomNavigation}
            appearance="noIndicator"
            selectedIndex={props.state.index}
            onSelect={(i) => {
              props.navigation.navigate(i == 0 ? "main" : "category");
            }}
          >
            <BottomNavigationTab icon={HomeIcon} />
            <BottomNavigationTab icon={CategoryIcon} />
          </BottomNavigation>
        )}
      >
        <Screen name="main" component={HomeScreen} />
        <Screen name="category" component={CategoryScreen} />
      </Navigator>
    </SafeAreaView>
  );
};
