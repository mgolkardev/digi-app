/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { styles } from "./resultzero.style";

export const ResultZero = () => {
  return (
    <Layout style={styles.no_result}>
      <Text>Empty!</Text>
    </Layout>
  );
};
