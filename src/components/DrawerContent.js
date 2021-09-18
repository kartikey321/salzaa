import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//const navigationn = useNavigation();

export function DrawerContent(props, navigation) {
  const paperTheme = useTheme();

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            alignItems: "center",
            marginTop: 45,
            // paddingHorizontal: 10,
            paddingLeft: 140,
            width: 45,
          }}
        >
          <Image
            width={30}
            source={require("../../assets/logo.png")}
            resizeMode="cover"
          />
        </View>

        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{ fontSize: 20 }}
              icon={({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={27} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              labelStyle={{ fontSize: 20 }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={27}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />

            <DrawerItem
              labelStyle={{ fontSize: 20 }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-check-outline"
                  color={color}
                  size={27}
                />
              )}
              label="About"
              onPress={() => {
                props.navigation.navigate("About");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            //AsyncStorage.setItem("token", '')
            // onPressLog;

            // props.navigation.pop('Login');
            // props.navigation.reset({
            //     index:0,
            //     routes:[{name:'Login'}],
            // });
            props.navigation.reset({ routes: [{ name: "Login" }] });
            //this.props.navigation.replace('About')
          }}
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
