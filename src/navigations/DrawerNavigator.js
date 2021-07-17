import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME, SETTINGS } from "../constants/routerNames";
import { GlobalContext } from "../context/provider";
import SideMenu from "./SideMenu";

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = React.useContext(GlobalContext);
  return (
    <Drawer.Navigator drawerType="slide" drawerContent = {({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen name={HOME} component={HomeNavigator} />
      {/*<Drawer.Screen name={SETTINGS} component={Settings} />*/}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
