import { createAction } from "@reduxjs/toolkit";

export const setSignUp = createAction<boolean>("/signup");
export const setSignIn = createAction<boolean>("/signin");
