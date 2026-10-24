import { BaseAgent } from "./baseAgent";

export class RiskAgent extends BaseAgent {

  async execute(
    query: string
  ): Promise<string> {

    const prompt = `
    Analyze risks and counterarguments.

    Topic:
    ${query}

    Identify:

    - Risks
    - Weaknesses
    - Failure scenarios
    - Alternate viewpoints
    `;

    return this.ai.generate(prompt);
  }
}
