import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from "../constants/routerNames";
import Contacts from "../screens/Contacts";
import ContactDetails from "../screens/ContactDetails";
import CreateContact from "../screens/CreateContact";
import Settings from "../screens/Settings";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator()
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts}/>
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails}/>
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}/>
      <HomeStack.Screen name={SETTINGS} component={Settings}/>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;