"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  Search,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";

const features = [
  {
    title: "AI Workspace",
    description:
      "Manage conversations, documents, and knowledge from one intelligent workspace.",
    icon: BrainCircuit,
  },
  {
    title: "Workflow Automation",
    description:
      "Create AI-powered workflows that reduce repetitive work and improve productivity.",
    icon: Workflow,
  },
  {
    title: "Research Assistant",
    description:
      "Collect, summarize, and organize information in minutes instead of hours.",
    icon: Search,
  },
  {
    title: "Enterprise Security",
    description:
      "Designed with secure authentication and scalable architecture for growing teams.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Performance",
    description:
      "Built with Next.js for a fast, responsive experience across devices.",
    icon: Zap,
  },
  {
    title: "Team Collaboration",
    description:
      "Share projects, collaborate with teammates, and stay aligned.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Everything you need to build with AI
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Avenor brings AI tools, automation, research, and collaboration
            together in one modern platform.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}