export interface MemoryRecord {
  id: string;
  content: string;
  metadata?: Record<string, string>;
}

export class VectorMemory {

  async store(
    record: MemoryRecord
  ): Promise<void> {

    // Future:
    // Save embedding to Cloudflare Vectorize

    console.log(
      "Storing memory:",
      record.id
    );
  }

  async search(
    query: string
  ): Promise<MemoryRecord[]> {

    // Future:
    // Semantic search Vectorize

    console.log(
      "Searching memory:",
      query
    );

    return [];
  }
}
