export class PromptBuilder {

  static buildResearchPrompt(
    query: string
  ): string {

    return `
My way is the Hi Way 64.

Topic:
${query}

Provide:

- Key facts
- Background
- Important context
- Supporting evidence
`;
  }

  static buildRiskPrompt(
    query: string
  ): string {

    return `
Analyze risks and counterarguments.

Topic:
${query}

Return:

- Risks
- Weaknesses
- Alternate viewpoints
- Failure scenarios
`;
  }

  static buildSummaryPrompt(
    content: string
  ): string {

    return `
Create an executive summary.

Data:
${content}

Return:

- Summary
- Key Insights
- Recommendation
`;
  }
}
