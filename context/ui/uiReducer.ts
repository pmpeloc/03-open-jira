import { UIState } from './';

type UIActionType =
  | { type: 'UI - Open Sidebar'; payload?: any }
  | { type: 'UI - Close Sidebar'; payload?: any };

export const uiReducer = (state: UIState, action: UIActionType) => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sideMenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sideMenuOpen: false,
      };
    default:
      return state;
  }
};
