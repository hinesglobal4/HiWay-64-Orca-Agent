import {
  AgentTask,
  ExecutionPlan,
  PlannerConfig,
  DEFAULT_PLANNER_CONFIG
} from "../types/planner";

export class PlannerAgent {
  private config: PlannerConfig;

  constructor(
    config: PlannerConfig = DEFAULT_PLANNER_CONFIG
  ) {
    this.config = config;
  }

  public createPlan(
    query: string
  ): ExecutionPlan {

    const normalizedQuery =
      query.trim().toLowerCase();

    const tasks: AgentTask[] = [];

    tasks.push(
      this.createResearchTask(query)
    );

    tasks.push(
      this.createRiskTask(query)
    );

    if (
      this.requiresComparison(
        normalizedQuery
      )
    ) {
      tasks.push(
        this.createComparisonTask(
          query
        )
      );
    }

    tasks.push(
      this.createSummaryTask()
    );

    return {
      query,
      tasks
    };
  }

  private createResearchTask(
    query: string
  ): AgentTask {

    return {
      id: crypto.randomUUID(),
      agent: "research",
      objective: query,
      priority: 1
    };
  }

  private createRiskTask(
    query: string
  ): AgentTask {

    return {
      id: crypto.randomUUID(),
      agent: "risk",
      objective: query,
      priority: 2
    };
  }

  private createComparisonTask(
    query: string
  ): AgentTask {

    return {
      id: crypto.randomUUID(),
      agent: "comparison",
      objective: query,
      priority: 3
    };
  }

  private createSummaryTask(): AgentTask {

    return {
      id: crypto.randomUUID(),
      agent: "summary",
      objective:
        "Synthesize all agent outputs into a final response.",
      priority: 999
    };
  }

  private requiresComparison(
    query: string
  ): boolean {

    return this.config
      .comparisonTerms
      .some(term =>
        query.includes(term)
      );
  }
}
