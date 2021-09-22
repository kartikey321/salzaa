import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OnboardingScreen from "../screens/OnBoardingScreen";
import TabStack from "./TabStack";
const HomeStack = ({ navigation }) => {
  const Stack1 = createNativeStackNavigator();

  return (
    <Stack1.Navigator>
      <Stack1.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => null }}
        // options={
        // {
        //   headerLeft: () => (
        //     <View style={{ marginLeft: 10, backgroundColor: "#CDE8ED" }}>
        //       <MaterialCommunityIcons.Button
        //         name="menu"
        //         size={35}
        //         elevation={8}
        //         backgroundColor="white"
        //         color="black"
        //         onPress={() => navigation.toggleDrawer()}
        //       />
        //     </View>
        //   ),
        // }
        // }
      />
    </Stack1.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
