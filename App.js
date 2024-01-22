// make sure to import it on the top most
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  // create new instance of stack
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            // set label of screen
            title: "Home",
            // drawer label for current screen
            drawerLabel: "Dashboard Home",
            // drawer text color which is active
            drawerActiveTintColor: "pink",
            // drawer text background color which is active
            drawerActiveBackgroundColor: "grey",
            // whole drawer styles
            drawerContentStyle: {
              backgroundColor: "yellow",
            },
          }}
        />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>

      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Go to About" onPress={() => navigation.jumpTo("About")} />
    </View>
  );
};

const About = ({ route, navigation }) => {
  return (
    <View>
      <Text>About</Text>
      <Button title="ABout " />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
