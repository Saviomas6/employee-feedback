import { createAction } from "@reduxjs/toolkit";
interface I_Props {
  name: string;
  email: string;
  isAdmin: boolean;
}
export const setLoggedIn = createAction<boolean>("/setLoggedIn");
export const setLoggedDetail = createAction<I_Props[]>("/setLoggedDetail");
