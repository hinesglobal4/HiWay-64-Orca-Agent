import { BaseAgent } from "./baseAgent";

export class SummaryAgent extends BaseAgent {

  async execute(
    combinedResults: string
  ): Promise<string> {

    const prompt = `
    Create an executive summary.

    Data:
    ${combinedResults}

    Return:

    - Summary
    - Key Insights
    - Final Recommendation
    `;

    return this.ai.generate(prompt);
  }
}
