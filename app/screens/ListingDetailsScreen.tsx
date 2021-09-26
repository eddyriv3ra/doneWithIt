import React from "react";
import { RouteProp, useRoute } from "@react-navigation/core";
import { View, Image, StyleSheet, Text } from "react-native";

import ListItem from "../components/ListItem";
import colors from "../config/colors";
import { FeedStackParamList } from "../navigation/FeedNavigator";

type Props = RouteProp<FeedStackParamList, "ListingDetails">;

const ListingDetailsScreen = () => {
  const {
    params: { item },
  } = useRoute<Props>();
  return (
    <View>
      <Image style={styles.image} source={{ uri: item.images[0].url }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
