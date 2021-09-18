import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { firebase } from "@firebase/app";
import { firebaseConfig } from "./src/config/firebase";
import { initializeApp } from "firebase/app";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./src/components/DrawerContent";

import AuthStack from "./src/navigation/AuthStack";
import AboutScreen from "./src/screens/AboutScreen";
import FaqScreen from "./src/screens/FaqScreen";
const Drawer = createDrawerNavigator();

// Initialize Firebase
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent />}>
        <Drawer.Screen
          name="HomeStack"
          component={AuthStack}
          options={{ header: () => null }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{ header: () => null }}
        />
        <Drawer.Screen
          name="FAQ"
          component={FaqScreen}
          options={{ header: () => null }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
