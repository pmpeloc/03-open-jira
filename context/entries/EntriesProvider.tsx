import { FC, useEffect, useReducer } from 'react';
import { entriesApi } from '../../apis';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>('/entries', {
        description,
      });
      dispatch({ type: '[Entries] - Add-Entry', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entries] - Update-Entry', payload: entry });
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: '[Entries] - Refresh-Entry', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
