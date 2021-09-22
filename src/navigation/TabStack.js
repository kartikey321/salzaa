import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AuthStack from "./AuthStack";
import AboutScreen from "../screens/AboutScreen";
import FaqScreen from "../screens/FaqScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
const TabStack = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="grey"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          header: () => null,

          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          header: () => null,
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="info" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FaqScreen}
        options={{
          header: () => null,
          tabBarLabel: "Faq",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="info" color={color} size={21} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({});
