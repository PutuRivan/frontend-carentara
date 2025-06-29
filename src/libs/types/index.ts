import { z } from "zod";

export type TCredential = {
  email: string;
  password: string;
};

export const SigninSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .max(100, "Email should not exceed 100 characters.")
    .email("Invalid email."),
  password: z.string().min(1, "Password is required."),
});

export type TSigninSchema = z.infer<typeof SigninSchema>;

export const SignUpSchema = z.object({
  username: z.string().min(1, "Username is required."),
  email: z.string().min(1, "Email is required.").email("Invalid email."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password should be at least 8 characters long."),
});

export type TRegisterSchema = z.infer<typeof SignUpSchema>;

export type TUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  phoneNumber: string;
};
