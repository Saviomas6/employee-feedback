import { createReducer } from "@reduxjs/toolkit";
import { setSignIn, setSignUp } from "../action/action";
interface I_InitialStateProps {
  signUp: boolean;
  signIn: boolean;
}
export const initialState: I_InitialStateProps = {
  signUp: false,
  signIn: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSignUp, (state, action) => {
    state.signUp = action.payload;
  });
  builder.addCase(setSignIn, (state, action) => {
    state.signIn = action.payload;
  });
});

export default userReducer;
