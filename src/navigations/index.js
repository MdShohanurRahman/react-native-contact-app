import React, { useContext } from "react";
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import HomeNavigator from "./HomeNavigator";
import { GlobalContext } from "../context/provider";
const AppNavContainer = () => {
  const {
    authState: {isLoggedIn}
  } = useContext(GlobalContext)
  const state = useContext(GlobalContext)
  console.log("state", state);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

// screens >>Home >> Drawer
// screens >>Auth >>

export default AppNavContainer;
