export const REQUEST_FETCH = 'REQUEST_FETCH';
export const SUCCEED_FETCH = 'SUCCEED_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';
export const REQUEST_REFETCH = 'REQUEST_REFETCH';
export const SUCCEED_REFETCH = 'SUCCEED_REFETCH';
export const FAILED_REFETCH = 'FAILED_REFETCH';

// API
export const requestFetch = () => ({
  type: REQUEST_FETCH,
});

// 検索API成功
export const succeedFetch = (response) => ({
  type: SUCCEED_FETCH,
  response,
});

// 検索APIエラー
export const failedFetch = (error) => ({
  type: FAILED_FETCH,
  error,
});

// 再レンダー
export const requestReFetch = () => ({
  type: REQUEST_REFETCH,
});

// 再レンダー成功
export const succeedReFetch = (results) => ({
  type: SUCCEED_REFETCH,
  results,
});

// 再レンダーエラー
export const failedReFetch = (reError) => ({
  type: FAILED_REFETCH,
  reError,
});
