/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React, { useEffect } from "react";

import { Button, Input, Layout, Text } from "@ui-kitten/components";

import { useDispatch, useSelector } from "react-redux";

import { auth } from "reducers/user/auth.reducer";
import { Image, SafeAreaView, View } from "react-native";

import { SplashScreen } from "screens/splash/splash.component";
import { LoadingIndicator } from "components/indicator/indicator.component";

import { IRootState } from "interfaces/irootstate.interface";
import { ILogin } from "interfaces/user/ilogin.interface";

import { styles } from "./login.style";
import { ScrollView } from "react-native-gesture-handler";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export const LoginScreen = ({ navigation }: any) => {
  const [showSplash, onShowSplash] = React.useState(true);
  const username = useInputState("hriks");
  const password = useInputState("gt4043@1");

  const userReducer = useSelector((state: IRootState) => {
    return state.user;
  });

  const reduxDispatch = useDispatch();

  useEffect(() => {
    if (
      !userReducer.auth.fetching &&
      userReducer.auth.done &&
      userReducer.auth.data
    ) {
      navigateToHome();
    }
  }, [userReducer.auth.fetching]);

  const navigateToHome = () => {
    navigation.navigate("home");
  };

  const OnLoginClick = () => {
    auth(
      { username: username.value, password: password.value } as ILogin,
      reduxDispatch
    );
  };

  const LoadingIndicatorAccessory = (props: any) =>
    userReducer.auth.fetching ? <LoadingIndicator /> : <></>;

  if (showSplash)
    return <SplashScreen onDismissClick={() => onShowSplash(false)} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={[styles.formControl, styles.welcome]}>Welcome back!</Text>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("assets/netflix.png")}
        />

        <Input
          style={styles.formControl}
          placeholder="Username"
          {...username}
        />
        <Input
          style={styles.formControl}
          placeholder="Password"
          secureTextEntry={true}
          {...password}
        />
      </ScrollView>
      <Layout style={styles.buttons}>
        <Layout style={styles.bottomLink}>
          <Text>Don't have an account?</Text>
          <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Register</Text>
        </Layout>
        <Button
          style={styles.formControl}
          status="primary"
          onPress={OnLoginClick}
          accessoryLeft={LoadingIndicatorAccessory}
        >
          LOGIN
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
