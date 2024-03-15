import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider, useDispatch } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Ionicons } from "@expo/vector-icons";
import SettingIcon from "./components/UI/SettingIcon";

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import store from "./storage";
import { modalActions } from "./storage/modal-context";

import MainScreen from "./Screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // const dispatch = useDispatch();

  let [fontsLoaded, fontError] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0B" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#0A0A0B",
            },

            headerRight: () => <SettingIcon />,
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
                fontFamily: "Inter_400Regular",
                fontSize: 16,
              },
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
