export class SessionMemory {

  constructor(
    private state: DurableObjectState
  ) {}

  async getHistory(): Promise<string[]> {
    const history =
      await this.state.storage.get<string[]>(
        "history"
      );

    return history ?? [];
  }

  async saveMessage(
    message: string
  ): Promise<void> {

    const history =
      await this.getHistory();

    history.push(message);

    await this.state.storage.put(
      "history",
      history
    );
  }
}
