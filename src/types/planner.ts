export type AgentType =
  | "research"
  | "risk"
  | "comparison"
  | "summary";

export interface AgentTask {
  id: string;
  agent: AgentType;
  objective: string;
  priority: number;
}

export interface ExecutionPlan {
  query: string;
  tasks: AgentTask[];
}

export interface PlannerConfig {
  comparisonTerms: string[];
}

export const DEFAULT_PLANNER_CONFIG: PlannerConfig = {
  comparisonTerms: [
    "compare",
    "comparison",
    "versus",
    "vs",
    "difference",
    "better than"
  ]
};
