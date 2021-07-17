import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/provider";
import logOut from '../../context/actions/auth/logout';
import { ActivityIndicator } from "react-native";

const Logout = () => {
  const {authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    logOut()(authDispatch);
  }, []);

  return <ActivityIndicator />;
};

export default Logout;
