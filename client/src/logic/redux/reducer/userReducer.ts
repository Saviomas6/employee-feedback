import { createReducer } from "@reduxjs/toolkit";
import {
  setLoggedDetail,
  setLoggedIn,
  setSignIn,
  setSignUp,
} from "../action/action";

interface I_Props {
  name: string;
  email: string;
}

interface I_InitialStateProps {
  signUp: boolean;
  signIn: boolean;
  isLoggedIn: boolean;
  isLoggedDetail: I_Props[];
}
export const initialState: I_InitialStateProps = {
  signUp: false,
  signIn: false,
  isLoggedIn: false,
  isLoggedDetail: [],
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSignUp, (state, action) => {
    state.signUp = action.payload;
  });
  builder.addCase(setSignIn, (state, action) => {
    state.signIn = action.payload;
  });
  builder.addCase(setLoggedIn, (state, action) => {
    state.isLoggedIn = action.payload;
  });
  builder.addCase(setLoggedDetail, (state, action) => {
    state.isLoggedDetail = action.payload;
  });
});

export default userReducer;
