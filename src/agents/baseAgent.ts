import { WorkersAIService } from "../services/workersAI";

export abstract class BaseAgent {
  constructor(
    protected ai: WorkersAIService
  ) {}

  abstract execute(
    query: string
  ): Promise<string>;
}
