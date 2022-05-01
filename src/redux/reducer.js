import { data } from '../data';
import {
  CLOSE_POPAP,
  LOGIN,
  OPEN_POPAP,
  ADD_EVENT,
  FEATCH_DATA,
  DEL_EVENT,
} from './types';

const initialState = {
  user: 'Nikita', //логин сделать потом
  data: data,
  popapVisible: false,
  selectedDay: '1', //it's for adding popap
};

const handlers = {
  [FEATCH_DATA]: (state, action) => ({ ...state, data: action.payload }),
  [CLOSE_POPAP]: (state) => ({ ...state, popapVisible: false }),
  [OPEN_POPAP]: (state, action) => ({
    ...state,
    popapVisible: true,
    selectedDay: action.payload,
  }),
  [ADD_EVENT]: (state, action) => {
    let newData = { ...state.data };
    //newData[action.payload.selectedDay].push(action.payload.item);
    newData[action.payload.selectedDay] = action.payload.dataList;

    return { ...state, data: newData };
  },
  [DEL_EVENT]: (state, action) => {
    let newData = { ...state.data };
    let newDay = state.data[action.payload.selectedDay].filter(
      (item) => item.id !== action.payload.id
    );
    newData[action.payload.selectedDay] = newDay;
    /* let newData = { ...state.data };
    newData[action.payload.selectedDay] = action.payload.dataList; */
    return { ...state, data: newData };
  },
  [LOGIN]: (state, action) => ({ ...state, user: action.payload }),
  DEFAULT: (state) => state,
};

export const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
