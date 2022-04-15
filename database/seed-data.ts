interface SeeData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeeData = {
  entries: [
    {
      description: 'Pending: Adipisicing tempor do nulla do nisi.',
      createdAt: Date.now(),
      status: 'pending',
    },
    {
      description: 'In Progress: Amet ipsum enim nostrud duis.',
      createdAt: Date.now(),
      status: 'in-progress',
    },
    {
      description:
        'Finished: Ut in nisi officia elit occaecat cillum magna aliquip fugiat.',
      createdAt: Date.now(),
      status: 'finished',
    },
  ],
};
