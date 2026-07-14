"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full border px-4 py-1 text-sm text-muted-foreground">
            🚀 AI-Powered Productivity Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl">
            Build Smarter.
            <br />
            Scale Faster.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Avenor helps individuals and teams automate research, organize
            knowledge, and build intelligent workflows using AI.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" size="lg">
              Book Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}