/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { View } from "react-native";
import { Spinner } from "@ui-kitten/components";

import { Styles } from "common/styles";

export const LoadingIndicator = ({ style }: any) => {
  return (
    <View style={[style, Styles.indicator]}>
      <Spinner status="control" size="small" />
    </View>
  );
};
