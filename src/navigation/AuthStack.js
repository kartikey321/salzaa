import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AuthStack = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <View style={{ marginLeft: 10, backgroundColor: "#CDE8ED" }}>
              <MaterialCommunityIcons.Button
                name="menu"
                size={35}
                elevation={8}
                backgroundColor="white"
                color="black"
                onPress={() => navigation.toggleDrawer()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
