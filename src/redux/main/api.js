import axios from 'axios';

// 検索API
export const Api = () => (
  axios.get('http://localhost:3101/testlist')
    .then((response) => {
      const res = response.data;
      return { res };
    })
    .catch((error) => ({ error }))
);
