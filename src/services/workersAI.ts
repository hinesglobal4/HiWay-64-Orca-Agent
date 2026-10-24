export class WorkersAIService {
  constructor(
    private ai: Ai
  ) {}

  async generate(prompt: string): Promise<string> {
    const result = await this.ai.run(
      "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
      {
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      }
    );

    return result.response;
  }
}
