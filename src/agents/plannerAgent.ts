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

    const researchTaskId =
      crypto.randomUUID();

    const riskTaskId =
      crypto.randomUUID();

    const comparisonTaskId =
      crypto.randomUUID();

    const summaryTaskId =
      crypto.randomUUID();

    const tasks: AgentTask[] = [];

    //
    // Research Task
    //
    tasks.push({
      id: researchTaskId,
      agent: "research",
      objective: query,
      priority: 1,
      dependsOn: [],
      status: "pending"
    });

    //
    // Risk Task
    //
    tasks.push({
      id: riskTaskId,
      agent: "risk",
      objective: query,
      priority: 1,
      dependsOn: [],
      status: "pending"
    });

    //
    // Optional Comparison Task
    //
    const comparisonEnabled =
      this.requiresComparison(
        normalizedQuery
      );

    if (comparisonEnabled) {

      tasks.push({
        id: comparisonTaskId,
        agent: "comparison",
        objective: query,
        priority: 1,
        dependsOn: [],
        status: "pending"
      });

      tasks.push({
        id: summaryTaskId,
        agent: "summary",
        objective:
          "Create final synthesis from all agent outputs.",
        priority: 999,
        dependsOn: [
          researchTaskId,
          riskTaskId,
          comparisonTaskId
        ],
        status: "pending"
      });

    } else {

      tasks.push({
        id: summaryTaskId,
        agent: "summary",
        objective:
          "Create final synthesis from all agent outputs.",
        priority: 999,
        dependsOn: [
          researchTaskId,
          riskTaskId
        ],
        status: "pending"
      });

    }

    return {
      query,
      tasks
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

  public getExecutableTasks(
    tasks: AgentTask[]
  ): AgentTask[] {

    const completedTasks =
      new Set(
        tasks
          .filter(
            task =>
              task.status === "completed"
          )
          .map(
            task =>
              task.id
          )
      );

    return tasks.filter(task => {

      if (
        task.status !== "pending"
      ) {
        return false;
      }

      return task.dependsOn.every(
 
