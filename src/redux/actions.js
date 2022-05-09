import { addData, delData, getData } from './bd';
import {
  CLOSE_POPAP,
  OPEN_POPAP,
  LOGIN,
  FEATCH_DATA,
  ADD_EVENT,
  DEL_EVENT,
} from './types';

export function login() {
  const user = 'Nikita';
  return {
    type: LOGIN,
    payload: user,
  };
}

export function closePopap() {
  return {
    type: CLOSE_POPAP,
  };
}

export function openPopap(selectedDay) {
  return {
    type: OPEN_POPAP,
    payload: selectedDay,
  };
}

export function featchData() {
  const newData = {};
  return (dispatch) => {
    try {
      Promise.all([
        getData('1'),
        getData('2'),
        getData('3'),
        getData('4'),
        getData('5'),
      ]).then(
        (value) => {
          value.forEach((item, index) => {
            newData[index + 1] = item;
          });
          dispatch({ type: FEATCH_DATA, payload: newData });
        },
        (reason) => {
          console.log(reason);
        }
      );
    } catch {
      console.error('bd errror');
    }
  };
}

export function addEvent(selectedDay, event) {
  return (dispatch) => {
    try {
      addData(selectedDay, { ...event }).then((id) => {
        getData(selectedDay).then((dataList) => {
          dispatch({ type: ADD_EVENT, payload: { selectedDay, dataList } });
        });
      });
    } catch {
      console.error('bd add errror');
    }
  };
}

export function removeEvent(selectedDay, id) {
  return (dispatch) => {
    try {
      delData(selectedDay, id).then((id) => {
        dispatch({
          type: DEL_EVENT,
          payload: { id: id, selectedDay: selectedDay },
        });
      });
    } catch {
      console.error('bd remove errror');
    }
  };
}
