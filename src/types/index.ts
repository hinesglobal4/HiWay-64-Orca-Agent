export interface AgentResponse {
  agent: string;
  result: string;
}

export interface ResearchRequest {
  sessionId: string;
  query: string;
}

export interface MemoryContext {
  previousMessages: string[];
}

export interface WorkflowResult {
  research: string;
  risks: string;
  summary: string;
}
