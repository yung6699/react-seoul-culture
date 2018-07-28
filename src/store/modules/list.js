import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';
import API_KEY from 'static/key.json';

let start = 0;
let end = 0;

function getItemsAPI() {
  return axios.get(`http://openapi.seoul.go.kr:8088/${API_KEY.key}/json/SearchConcertDetailService/1/100`);
}

function sliceItems(sum, arr) {
  end += sum;
  start = end - sum;
  const tmp = [];
  for (let i = start; i < end; i += 1) {
    if (!arr[i]) {
      break;
    }
    tmp.push(arr[i]);
  }

  return tmp;
}

// 액션 타입을 정의해준다.
const GETITEMS = 'list/GETITEMS';
const SELECTITEM = 'list/SELECTITEM';
const CHANGE = 'list/CHANGE';
const APPENDITEMS = 'list/APPENDITEMS';

// // 액션 생성 함수를 만듭니다. 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const getItems = createAction(GETITEMS, getItemsAPI);
export const change = createAction(CHANGE, data => data);
export const selectedItem = createAction(SELECTITEM, value => value);
export const appendItems = createAction(APPENDITEMS, value => value);

// // 모듈의 초기 상태를 정의합니다.
const initialState = {
  keyword: '',
  option: '',
  selected: '',
  items: [],
  sliceItems: [],
};

// // 리듀서를 만들어서 내보내줍니다. / handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고 두번째
// // 파라미터는 초기 상태입니다.
export default handleActions({

  ...pender({
    type: GETITEMS,
    onSuccess: (state, { payload }) => {
      const { data } = payload;
      return {
        ...state,
        items: [...data.SearchConcertDetailService.row],
      };
    },
  }),

  [APPENDITEMS]: (state, { payload }) => {
    const arr = sliceItems(payload, state.items);
    return {
      ...state,
      sliceItems: [
        ...state.sliceItems,
        ...arr,
      ],
    };
  },

  //   [SELECTITEM]: (state, { payload }) => {     return {     };   },
  // [CHANGE]: (state, { payload }) => {     return {       ...state,
  // [payload[0]]: payload[1],     };   },

}, initialState);
