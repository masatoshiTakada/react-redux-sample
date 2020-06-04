import {
    REQUEST_FETCH,
    SUCCEED_FETCH,
    FAILED_FETCH,
    REQUEST_REFETCH,
    SUCCEED_REFETCH,
    FAILED_REFETCH,
  } from './action';
  
  const initialState = {
    isFetching: true,
    isError: false,
    response: {},
    count: {},
  };
  
  const mainState = (state = initialState, action) => {
    switch (action.type) {
      // API
      case REQUEST_FETCH:
        return {
          ...state,
        };
        // API成功
      case SUCCEED_FETCH:
        return {
          ...state,
          response: action.response,
          isError: false,
          isFetching: false,
        };
        // 検索APIエラー
      case FAILED_FETCH:
        return {
          ...state,
          isFetching: false,
          isError: true,
          response: action.error,
        };
      // 再レンダー
      case REQUEST_REFETCH:
          console.log('refetch')
        return {
          ...state,
        };
      // 再レンダー成功
      case SUCCEED_REFETCH:
        console.log(state.response);
        return {
          ...state,
          response: [...state.response, action.results],
          // response: state.response.concat([action.results]),
        };
      // 再レンダーエラー
      case FAILED_REFETCH:
        return {
          ...state,
          isFetching: false,
          isError: true,
          response: action.reError,
        };
      default:
        return state;
    }
  };
  
  export default mainState;
  