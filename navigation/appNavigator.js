import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import DailyActivities from "../screens/dailyActivities";
import Communication from "../screens/communication";
import CaretakerMessage from "../screens/caretakerMessage";
import Activity from "../screens/Activity";

const Stack = createStackNavigator();
//The entire app navigation

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Daily Activity"
      component={DailyActivities}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Communication"
      component={Communication}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Caretaker Message"
      component={CaretakerMessage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Activity"
      component={Activity}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
