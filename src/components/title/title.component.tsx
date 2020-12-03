/*
 * Created on Mon Dec 01 2020
 *
 * Copyright (c) 2020 Mohammad Golkar (@mgolkardev)
 */
import React from "react";
import { Button, Icon, Layout, Text } from "@ui-kitten/components";

import { TitleProps } from "types/components/title.types";

import { styles } from "./title.style";

const ArrowIcon = (props: any) => (
  <Icon {...props} name="arrow-forward-outline" />
);

export const Title = ({ style, caption, onAllClick }: TitleProps) => {
  return (
    <Layout style={[style, styles.title]}>
      <Text>{caption}</Text>

      {onAllClick && (
        <Button
          style={styles.all_btn}
          accessoryRight={ArrowIcon}
          onPress={onAllClick}
        >
          All
        </Button>
      )}
    </Layout>
  );
};
