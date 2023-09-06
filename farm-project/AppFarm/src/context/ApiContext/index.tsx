import { createContext, useReducer } from "react";
import { ApiAction } from "./actionTypes";
import { ApiState, apiReducer } from "./reducer";

interface ApiContextProps {
  state: ApiState;
  dispatch: React.Dispatch<ApiAction>;
}

export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps);

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, {} as ApiState);
  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};
