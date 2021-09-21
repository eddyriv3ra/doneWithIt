import React from "react";
import { View, StyleSheet, Image, ImageProps, Text } from "react-native";
import colors from "../../config/colors";

interface IListItem {
  title: string;
  subTitle: string;
  image: ImageProps;
}

const ListItem = ({ title, subTitle, image }: IListItem) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
    paddingTop: 5,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
