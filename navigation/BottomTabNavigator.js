import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import CurrentTasksScreen from "../screens/CurrentTasksScreen";
import UnassignedTasksScreen from "../screens/UnassignedTasks";
import OneOffTaskScreen from "../screens/OneOffTaskScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Current Tasks'
        component={CurrentTasksScreen}
        options={{
          title: "Current Tasks",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-checkmark-circle' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Unassigned Tasks'
        component={UnassignedTasksScreen}
        options={{
          title: "Unassigned Tasks",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-checkmark-circle-outline' />
          ),
        }}
      />
      <BottomTab.Screen
        name='One-Off Task'
        component={OneOffTaskScreen}
        options={{
          title: "One-Off Task",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-add' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Leaderboard'
        component={LeaderboardScreen}
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-analytics' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    default:
      return "Chore Squirrel";
  }
}
