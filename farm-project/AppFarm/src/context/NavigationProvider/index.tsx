import React from "react";

const initialState = {
  navigate: (routeName?: string, params?: object) => {},
  goBack: () => {},
};

const NavigationProvider = React.createContext(initialState);

export default NavigationProvider;
