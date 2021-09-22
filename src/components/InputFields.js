import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { FontAwesome5 } from "@expo/vector-icons";
const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <FontAwesome5 name={iconType} size={25} color="grey" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="grey"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: 0.8 * windowWidth,
    height: windowHeight / 15,
    borderColor: "black",
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 0,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    borderRadius: 15,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,

    fontSize: 16,

    backgroundColor: "#d3d3d3",
    width: 0.8 * windowWidth,
    borderRadius: 12,
    height: 40,
    borderColor: "black",
    borderWidth: 0.7,
  },
});
