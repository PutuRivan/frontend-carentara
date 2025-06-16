"use client"

import { TRegisterSchema, TSigninSchema, TUser } from "@/libs/types";
import { useEffect, useState } from "react";
import { AuthContext } from "@/context/auth-context";
import {
  getAccessTokenFromCookie,
  getUserDataFromSessionStorage,
  setAccessTokenInCookie,
  setUserDataInSessionStorage,
} from '@/libs/utils';
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const router = useRouter();

  useEffect(() => {
    const accessToken = getAccessTokenFromCookie()
    if (accessToken) {
      setUser(getUserDataFromSessionStorage())
    }
  }, [])

  const signUp = async (values: TRegisterSchema) => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.username,
          email: values.email,
          password: values.password
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message)
      }

      toast.success(data.message)
      setLoading(false)
      router.push('/login')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  const signIn = async (values: TSigninSchema) => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email: values.email,
          user_password: values.password
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error('Invalid credentials')
      }

      setIsAuthenticated(true)
      setLoading(false)
      toast.success(data.message)
      setUser(data.data)
      setAccessTokenInCookie(data.token)
      setUserDataInSessionStorage(data.data)

      if (data.data.role === 'ADMIN') {
        router.push('/admin')
      } else if (data.data.role === 'OWNER') {
        router.push('/owner')
      } else {
        router.push('/user')
      }

    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthenticated, signUp, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
