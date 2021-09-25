import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
    <Tab.Screen name="AccountNavigator" component={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
