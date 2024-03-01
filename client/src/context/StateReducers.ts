"use client";

import { reducercases } from "./constants";

export const initialState: { userInfo: unknown; newUser: boolean } = {
  userInfo: undefined,
  newUser: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case reducercases.Set_User_Info:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducercases.Set_New_User:
      return {
        ...state,
        newUser: action.newUser,
      };
    default:
      return state;
  }
};

export default reducer;
