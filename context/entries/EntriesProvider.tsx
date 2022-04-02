import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pending: Adipisicing tempor do nulla do nisi.',
      createdAt: Date.now(),
      status: 'pending',
    },
    {
      _id: uuidv4(),
      description: 'In Progress: Amet ipsum enim nostrud duis.',
      createdAt: Date.now() - 1000000,
      status: 'in-progress',
    },
    {
      _id: uuidv4(),
      description:
        'Finished: Ut in nisi officia elit occaecat cillum magna aliquip fugiat.',
      createdAt: Date.now() - 100000,
      status: 'finished',
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
