"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

import { useAuth } from "@/components/auth/AuthProvider";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { user, loading } = useAuth();

  const router = useRouter();


  useEffect(() => {

    if (!loading && !user) {
      router.push("/login");
    }

  }, [user, loading, router]);


  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading Avenor...
      </div>
    );
  }


  if (!user) {
    return null;
  }


  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Header />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}