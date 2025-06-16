// src/app/user/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import DecryptedText from "@/components/react-bits/TextAnimations/DecryptedText/DecryptedText"; // subtle ripple effect on email
import { Spinner } from "@/components/ui/selfmade/spinner";

interface UserProfile {
  name: string;
  email: string;
  role: "user" | "owner" | "admin";
  phone: string;
  createdAt: string;
  updatedAt: string;
  avatarUrl?: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // simulate fetch
    setTimeout(() => {
      setUser({
        name: "Jane Doe",
        email: "jane.doe@example.com",
        role: "user",
        phone: "+1 (555) 987‑6543",
        createdAt: "2024-01-15T10:23:00Z",
        updatedAt: "2024-06-10T16:45:00Z",
        avatarUrl: "https://github.com/evilrabbit.png", // none → placeholder
      });
    }, 300);
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Spinner size="lg" />
        </motion.div>
      </div>
    );
  }

  return (
    <main className="max-w-xl mt-8 mx-auto px-6 py-12">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Your Profile
      </motion.h1>

      <Card>
        <CardHeader className="flex items-center space-x-4 p-6">
          <Avatar className="w-20 h-20">
            {user.avatarUrl ? (
              <AvatarImage src={user.avatarUrl} alt="Your avatar" />
            ) : (
              <AvatarFallback>
                <Image
                  src={'https://github.com/evilrabbit.png'}
                  alt="Avatar placeholder"
                  width={80}
                  height={80}
                />
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground capitalize">
              {user.role}
            </p>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-4 p-6">
          {/* Email with a slight scramble effect on hover */}
          <div>
            <Label>Email</Label>
            <div className="mt-1 inline-block">
              <DecryptedText
                text={user.email}
                encryptedClassName="text-gray-400"
                className="text-black font-medium"
                speed={30}
                maxIterations={8}
                revealDirection="start"
                animateOn="hover"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <Label>Full Name</Label>
            <Input value={user.name} readOnly className="mt-1" />
          </div>

          {/* Phone */}
          <div>
            <Label>Phone Number</Label>
            <Input value={user.phone} readOnly className="mt-1" />
          </div>

          {/* Role (readonly select) */}
          <div>
            <Label>Role</Label>
            <Input value={user.role} readOnly className="mt-1 capitalize" />
          </div>

          {/* Created/Updated */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Created At</Label>
              <Input
                value={format(new Date(user.createdAt), "PPpp")}
                readOnly
                className="mt-1"
              />
            </div>
            <div>
              <Label>Updated At</Label>
              <Input
                value={format(new Date(user.updatedAt), "PPpp")}
                readOnly
                className="mt-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-end">
        <Button> Edit Profile </Button>
      </div>
    </main>
  );
}
