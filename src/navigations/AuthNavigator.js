import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LOGIN, REGISTER } from "../constants/routerNames";
import Login from "../screens/Login";
import Register from "../screens/Register";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator()
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login}/>
      <AuthStack.Screen name={REGISTER} component={Register}/>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
