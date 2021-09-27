import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import colors from "../config/colors";
import { FeedStackParamList } from "../navigation/FeedNavigator";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

type ListingScreenPropNavigation = NativeStackNavigationProp<
  FeedStackParamList,
  "ListingDetails"
>;

const ListingsScreen = () => {
  const { error, data, loading, request } = useApi(listingsApi.getListings);
  const navigation = useNavigation<ListingScreenPropNavigation>();

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings</Text>
          <Button color="primary" onPress={() => request()}>
            Retry
          </Button>
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", { item })}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
