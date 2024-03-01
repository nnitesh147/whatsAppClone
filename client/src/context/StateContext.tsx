"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";
import { initialState } from "./StateReducers";

export const StateContext = createContext({});

export const StateProvider = ({
  initialState,
  reducer,
  children,
}: {
  initialState: any;
  reducer: any;
  children: ReactNode;
}): ReactNode => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
