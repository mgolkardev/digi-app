/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigation.component";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";

import { myTheme as theme } from "../themes/main.theme";
import { store } from "../store/main.store";

export const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <AppNavigator />
    </ApplicationProvider>
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </Provider>
);
