import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { registration, signIn } from "../HelperMethods/AuthHelper";
import GlobalStyles from "../styles/GlobalStyles";
import { windowWidth } from "../utils/Dimensions";
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.headText}>Signup</Text>
      <View style={{ marginTop: 30 }}>
        <Text>Enter your name</Text>
        <TextInput
          value={name}
          keyboardType="name-phone-pad"
          textAlign="center"
          onChangeText={(text) => {
            setName(text);
          }}
          style={styles.textInputst}
        />
        <View style={{ height: 20 }}></View>

        <Text>Enter your phone</Text>
        <TextInput
          value={phone}
          keyboardType="phone-pad"
          textAlign="center"
          onChangeText={(text) => {
            setPhone(text);
          }}
          style={styles.textInputst}
        />
        <View style={{ height: 20 }}></View>

        <Text>Enter your e-mail</Text>
        <TextInput
          value={email}
          keyboardType="email-address"
          textAlign="center"
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.textInputst}
        />
        <View style={{ height: 20 }}></View>
        <Text>Enter your password</Text>
        <TextInput
          value={password}
          secureTextEntry={true}
          textAlign="center"
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={styles.textInputst}
        />
      </View>
      <View style={{ height: 20 }}></View>
      <TouchableOpacity
        onPress={() => {
          registration(email, password).then(() => {
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
          <Text style={{ color: "white" }}>Signup</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 60 }}></View>
      <Text>Already have an account? Login </Text>
    </View>
  );
};

export default SignupScreen;

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
