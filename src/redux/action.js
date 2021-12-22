import {CHANGE_STYLES, CHANGE_TEXT, TABLE_RESIZE} from '@/redux/type';

// Action creator
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  };
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  };
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLES,
    data
  };
}
