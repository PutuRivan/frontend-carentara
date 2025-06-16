"use client"

import { TCredential, TRegisterSchema, TSigninSchema, TUser } from "@/libs/types";
import { createContext, useContext } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export const AuthContext = createContext({} as {
  user: TUser | null,
  loading: boolean,
  isAuthenticated: boolean,
  signUp: (values: TRegisterSchema) => void,
  signIn: (values: TSigninSchema) => void
});

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context;
}