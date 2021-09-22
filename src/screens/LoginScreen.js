import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FormInput from "../components/InputFields";
import { registration } from "../HelperMethods/AuthHelper";
import GlobalStyles from "../styles/GlobalStyles";
import { windowWidth } from "../utils/Dimensions";
import { signIn } from "../HelperMethods/AuthHelper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.headText}>Login</Text>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.text}>Enter your e-mail</Text>
        <FormInput
          labelValue={email}
          onChangeText={(text) => setEmail(text)}
          placeholderText="email"
          iconType="user-tie"
          keyboardType="email-address"
          autoCorrect={false}
        />

        <View style={{ height: 20 }}></View>
        <Text style={styles.text}>Enter your password</Text>
        <FormInput
          labelValue={password}
          onChangeText={(text) => setPassword(text)}
          placeholderText="password"
          secureTextEntry={true}
          iconType="key"
          autoCorrect={false}
        />
      </View>
      <View style={{ height: 20 }}></View>
      <TouchableOpacity
        onPress={() => {
          signIn(email, password).then(() => {
            navigation.replace("Home");
          });
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            padding: 12,
            borderRadius: 14,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 60 }}></View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        <Text>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textInputst: {
    backgroundColor: "#d3d3d3",
    width: 0.8 * windowWidth,
    borderRadius: 12,
    height: 40,
    borderColor: "black",
    borderWidth: 0.7,
  },
});
