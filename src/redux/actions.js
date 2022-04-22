import { CLOSE_POPAP, OPEN_POPAP } from './types';

export function closePopap() {
  return {
    type: CLOSE_POPAP,
  };
}

export function openPopap() {
  return {
    type: OPEN_POPAP,
  };
}
