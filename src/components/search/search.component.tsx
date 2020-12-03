/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { Icon, Input } from "@ui-kitten/components";

import { styles } from "./search.style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SearchProps } from "types/components/search.type";

export const Search = ({ placeholder, value, setValue }: SearchProps) => {
  const renderIcon = (props: any) =>
    value ? (
      <TouchableWithoutFeedback
        onPress={() => {
          setValue("");
        }}
      >
        <Icon {...props} fill="#ccc" size="small" name="close-outline" />
      </TouchableWithoutFeedback>
    ) : (
      <></>
    );

  return (
    <Input
      style={styles.formControl}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      accessoryRight={renderIcon}
    />
  );
};
