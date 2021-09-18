import * as firebase from "firebase";
import { Alert } from "react-native";

export async function registration(email, password) {
  try {
    await firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.default.auth().currentUser;
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase.default.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.default.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
