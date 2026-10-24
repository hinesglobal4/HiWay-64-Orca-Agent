import { ResearchAgent } from "../agents/researchAgent";
import { RiskAgent } from "../agents/riskAgent";
import { SummaryAgent } from "../agents/summaryAgent";

export class ResearchWorkflow {

  constructor(
    private researchAgent: ResearchAgent,
    private riskAgent: RiskAgent,
    private summaryAgent: SummaryAgent
  ) {}

  async execute(
    query: string
  ) {

    const [
      researchResult,
      riskResult
    ] = await Promise.all([
      this.researchAgent.execute(query),
      this.riskAgent.execute(query)
    ]);

    const combined = `
    RESEARCH:
    ${researchResult}

    RISKS:
    ${riskResult}
    `;

    const summary =
      await this.summaryAgent.execute(
        combined
      );

    return {
      research: researchResult,
      risks: riskResult,
      summary
    };
  }
}
