export type AgentType =
  | "research"
  | "risk"
  | "comparison"
  | "summary";

export type TaskStatus =
  | "pending"
  | "running"
  | "completed"
  | "failed";

export interface AgentTask {
  /**
   * Unique task identifier
   */
  id: string;

  /**
   * Agent responsible for execution
   */
  agent: AgentType;

  /**
   * Task objective supplied to agent
   */
  objective: string;

  /**
   * Execution priority
   * Lower numbers execute first
   */
  priority: number;

  /**
   * Task IDs that must complete
   * before this task can run
   */
  dependsOn: string[];

  /**
   * Current execution state
   */
  status: TaskStatus;
}

export interface ExecutionPlan {
  query: string;
  tasks: AgentTask[];
}

export interface AgentResult {
  taskId: string;
  agent: AgentType;
  output: string;
  completedAt: number;
}

export interface WorkflowState {
  sessionId: string;
  plan: ExecutionPlan;
  results: Record<string, AgentResult>;
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
