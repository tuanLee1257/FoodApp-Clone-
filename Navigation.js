import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import React from "react";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";

const store = configureStore();
function Navigation(props) {
  const Stack = createStackNavigator();
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default Navigation;
