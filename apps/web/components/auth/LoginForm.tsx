"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Invalid email or password");
    }
  }


  async function handleGoogleLogin() {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(
        auth,
        provider
      );

      router.push("/dashboard");

    } catch (error) {
      console.log(error);
      alert("Google login failed");
    }
  }


  return (
    <div className="space-y-4">

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />


      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />


      <Button
        className="w-full"
        onClick={handleLogin}
      >
        Login
      </Button>


      <div className="relative my-6">
        <div className="border-t" />

        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-3 text-sm text-muted-foreground">
          OR
        </span>
      </div>


      <Button
        variant="outline"
        className="w-full"
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </Button>

    </div>
  );
}