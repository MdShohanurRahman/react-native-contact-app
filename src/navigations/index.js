import React from "react";
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import HomeNavigator from "./HomeNavigator";
const AppNavContainer = () => {
  const isLoggedIn = false
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

// screens >>Home >> Drawer
// screens >>Auth >>

export default AppNavContainer;
