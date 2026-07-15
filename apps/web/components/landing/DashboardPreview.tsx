"use client";

import { motion } from "framer-motion";
import { BrainCircuit, BarChart3, Workflow, CheckCircle2 } from "lucide-react";

const cards = [
  {
    title: "AI Tasks",
    value: "24 Active",
    icon: BrainCircuit,
  },
  {
    title: "Research Reports",
    value: "128",
    icon: BarChart3,
  },
  {
    title: "Automations",
    value: "12 Running",
    icon: Workflow,
  },
  {
    title: "Completed",
    value: "96%",
    icon: CheckCircle2,
  },
];

export default function DashboardPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            A Glimpse of Your AI Workspace
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A centralized dashboard to monitor AI tasks, research, workflows,
            and team productivity.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border bg-card p-8 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Live
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-2xl font-bold">
                    {card.value}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}