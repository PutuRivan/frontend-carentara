"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RegisterForm from "@/components/form/register-form";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const handleGoogleRegister = async () => {
    try {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  }
  return (
    <div className="flex h-screen overflow-hidden">
      <motion.div
        className="relative hidden w-1/2 lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/auth/car-driving.jpg"
          alt="Travel horizon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-16 space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Join Carentara
          </h1>
          <p className="max-w-md text-lg text-white/90">
            Create your account now and start booking premium rides, unlocking exclusive deals, and exploring new horizons.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div
          className="
            relative
            w-full max-w-md
            rounded-2xl
            bg-white/30 backdrop-blur-md
            p-8
            shadow-lg
          "
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <RegisterForm />

          <div className="mt-4 text-center">
            <span className="text-sm text-neutral-700">
              Already have an account?{" "}
            </span>
            <Link
              href="/login"
              className="text-sm font-semibold text-neutral-900 hover:underline"
            >
              Sign In
            </Link>
          </div>

          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-white/50" />
            <span className="px-2 text-black">or</span>
            <div className="flex-1 h-px bg-white/50" />
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 mb-2 text-black cursor-pointer"
            onClick={handleGoogleRegister}
          >
            <FcGoogle size={20} />
            Sign up with Google
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
