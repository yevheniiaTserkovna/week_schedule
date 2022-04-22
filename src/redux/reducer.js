import { data } from '../data';
import { CLOSE_POPAP, CREATE_EVENT, OPEN_POPAP } from './types';

const initialState = {
  data: data,
  popapVisible: false,
};

const handlers = {
  [CREATE_EVENT]: (state) => state,
  [CLOSE_POPAP]: (state) => ({ ...state, popapVisible: false }),
  [OPEN_POPAP]: (state) => ({ ...state, popapVisible: true }),
  DEFAULT: (state) => state,
};

export const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
