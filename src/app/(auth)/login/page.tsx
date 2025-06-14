"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LoginForm from "@/components/form/login-form";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: Hero */}
      <motion.div
        className="relative hidden w-1/2 lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/auth/hero.jpg"     // your background image
          alt="Travel horizon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-16 space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Explore Horizons
          </h1>
          <p className="max-w-md text-lg text-white/90">
            Where your dream destinations become reality. Embark on a journey where every corner of the world is within your reach.
          </p>
        </div>
      </motion.div>

      {/* Right: Glass Form Panel */}
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
            Sign In
          </h2>

          <LoginForm />

          {/* Forgot password */}
          <div className="mt-2 text-right">
            <Link href="/auth/forgot-password" className="text-sm text-neutral-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Or divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-white/50" />
            <span className="px-2 text-black">or</span>
            <div className="flex-1 h-px bg-white/50" />
          </div>

          {/* Social login */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 mb-4 text-black"
          >
            <FcGoogle size={20} />
            Sign in with Google
          </Button>

          {/* Sign up link */}
          <p className="text-center text-neutral-900">
            Are you new?{" "}
            <Link href="/register" className="font-semibold hover:underline">
              Create an Account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
