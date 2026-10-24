import { ResearchWorkflow } from "../workflows/researchWorkflow";

export async function handleQuery(
  request: Request,
  workflow: ResearchWorkflow
): Promise<Response> {

  const body =
    await request.json();

  const result =
    await workflow.execute(
      body.query
    );

  return Response.json(result);
}
