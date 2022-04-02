import { EntriesState } from './';

type EntriesActionType = { type: '[Entries] - ActionName'; payload?: any };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
) => {
  switch (action.type) {
    // case '[Entries] - ActionName':
    //   return {
    //     ...state,
    //   }
    default:
      return state;
  }
};
