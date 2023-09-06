import {
  NavigationContainer,
  ParamListBase,
  NavigationContainerRef,
} from "@react-navigation/native";
import { MyStack } from "./stack.routes";
import React, { useContext } from "react";
import NavigationProvider from "../context/NavigationProvider";
import { ApiContext } from "../context/ApiContext";
import Loading from "../components/Loading";

export function Routes() {
  const navigationRef =
    React.useRef<NavigationContainerRef<ParamListBase>>(null);

  const { state } = useContext(ApiContext);

  function navigation() {
    return {
      navigate: (routeName?: string, params?: object) => {
        navigationRef.current?.navigate(routeName, params);
      },
      goBack: () => {
        navigationRef.current?.goBack();
      },
    };
  }
  return (
    <NavigationProvider.Provider value={navigation()}>
      <NavigationContainer ref={navigationRef}>
        {state.isLoading ? <Loading /> : <MyStack />}
      </NavigationContainer>
    </NavigationProvider.Provider>
  );
}
