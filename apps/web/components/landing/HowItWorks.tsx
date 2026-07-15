"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Describe your goal",
    description:
      "Tell Avenor what you're trying to achieve, from research to workflow automation.",
  },
  {
    icon: Sparkles,
    title: "2. AI plans the work",
    description:
      "Avenor analyzes your request and coordinates the right AI capabilities.",
  },
  {
    icon: Rocket,
    title: "3. Execute & improve",
    description:
      "Review results, refine them, and turn them into reusable workflows.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How Avenor Works
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to turn ideas into AI-powered outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl border p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}