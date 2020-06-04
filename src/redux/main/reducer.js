import {
    REQUEST_FETCH,
    SUCCEED_FETCH,
    FAILED_FETCH,
    REQUEST_REFETCH,
    SUCCEED_REFETCH,
    FAILED_REFETCH,
  } from './action';
  
  const initialState = {
    isFetching: false,
    isError: false,
    arrayExample: [],
    count: {},
    error: null
  };
  
  const mainState = (state = initialState, action) => {
    switch (action.type) {
      // API
      case REQUEST_FETCH:
        return { ...state, isFetching: true };
        // API成功
      case SUCCEED_FETCH:
        return {
          ...state,
          arrayExample: action.response.arrayExample,
          isError: false,
          isFetching: false,
        };
        // 検索APIエラー
      case FAILED_FETCH:
        return {
          ...state,
          isFetching: false,
          isError: true,
          error: action.error,
        };
      // 再レンダー
      case REQUEST_REFETCH:
        console.log('refetch')
        return { ...state, isFetching: true };
      // 再レンダー成功
      case SUCCEED_REFETCH:
        return {
          ...state,
          arrayExample: [...state.arrayExample, ...action.results.arrayExample],
          isFetching: false,
        };
      // 再レンダーエラー
      case FAILED_REFETCH:
        return {
          ...state,
          isFetching: false,
          isError: true,
          error: action.reError,
        };
      default:
        return state;
    }
  };
  
  export default mainState;
  