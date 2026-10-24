import { BaseAgent } from "./baseAgent";

export class ResearchAgent extends BaseAgent {
  async execute(
    query: string
  ): Promise<string> {

    const prompt = `
    You are a research analyst.

    Topic:
    ${query}

    Produce:
    - Main facts
    - Background
    - Relevant context
    `;

    return this.ai.generate(prompt);
  }
}
