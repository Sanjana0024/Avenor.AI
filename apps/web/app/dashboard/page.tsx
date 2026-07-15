import {
  BrainCircuit,
  FolderKanban,
  Workflow,
  BarChart3,
} from "lucide-react";

import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <>
      <WelcomeBanner />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Projects"
          value="12"
          icon={<FolderKanban className="h-7 w-7 text-primary" />}
        />

        <StatsCard
          title="AI Sessions"
          value="184"
          icon={<BrainCircuit className="h-7 w-7 text-primary" />}
        />

        <StatsCard
          title="Workflows"
          value="9"
          icon={<Workflow className="h-7 w-7 text-primary" />}
        />

        <StatsCard
          title="Reports"
          value="38"
          icon={<BarChart3 className="h-7 w-7 text-primary" />}
        />
      </div>
    </>
  );
}