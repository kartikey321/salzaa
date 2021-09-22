import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FormInput from "../components/InputFields";
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
        <Text style={styles.text}>Enter your name</Text>
        <FormInput
          labelValue={name}
          onChangeText={(text) => setName(text)}
          placeholderText="name"
          iconType="user-alt"
          keyboardType="name-phone-pad"
          autoCorrect={false}
        />

        <View style={{ height: 20 }}></View>

        <Text style={styles.text}>Enter your phone</Text>
        <FormInput
          labelValue={phone}
          onChangeText={(text) => setPhone(text)}
          placeholderText="phone number"
          iconType="phone-alt"
          keyboardType="phone-pad"
          autoCorrect={false}
        />

        <View style={{ height: 20 }}></View>

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
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
