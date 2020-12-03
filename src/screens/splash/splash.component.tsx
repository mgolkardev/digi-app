/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { Image, SafeAreaView } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";

import { SplashScreenProps } from "types/screens/splash.types";

import { Images } from "common/images";
import { styles } from "./splash.style";

export const SplashScreen = ({ onDismissClick }: SplashScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.form}>
        <Image style={styles.poster} source={Images.splash} />
        <Layout style={styles.buttons}>
          <Button
            style={[styles.formControl, styles.register]}
            status="primary"
            onPress={onDismissClick}
          >
            {(evaProps) => (
              <Text {...evaProps} style={styles.register_text}>
                REGISTER
              </Text>
            )}
          </Button>
          <Button
            style={[styles.formControl, styles.login]}
            status="primary"
            onPress={onDismissClick}
          >
            LOGIN
          </Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};
