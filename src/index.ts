interface Env {
  AI: Ai;
}

import { WorkersAIService } from "./services/workersAI";
import { ResearchAgent } from "./agents/researchAgent";
import { RiskAgent } from "./agents/riskAgent";
import { SummaryAgent } from "./agents/summaryAgent";
import { ResearchWorkflow } from "./workflows/researchWorkflow";

export default {

  async fetch(
    request: Request,
    env: Env
  ): Promise<Response> {

    const ai =
      new WorkersAIService(
        env.AI
      );

    const workflow =
      new ResearchWorkflow(
        new ResearchAgent(ai),
        new RiskAgent(ai),
        new SummaryAgent(ai)
      );

    if (
      request.method === "POST"
    ) {

      const body =
        await request.json();

      const result =
        await workflow.execute(
          body.query
        );

      return Response.json(
        result
      );
    }

    return new Response(
      "Research Assistant Online"
    );
  }
};
