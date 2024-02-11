import { StyleSheet, Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "./Screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0B" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#0A0A0B",
            },

            headerRight: () => (
              <Ionicons name="settings-outline" size={24} color="white" />
            ),
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Select Theard"
            component={MainScreen}
            options={{
              headerShown: true,
              headerTitleStyle: {
                fontWeight: "300",
                fontFamily: "Arial",
                fontSize: 16,
              },
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textIcon: {
    color: "white",
  },
});
