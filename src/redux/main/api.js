import axios from 'axios';

// 検索API
export const Api = () => (
  axios.get('https://demo2746340.mockable.io/q267220/testlist')
    .then((response) => {
      const res = response.data;
      return { res };
    })
    .catch((error) => ({ error }))
);
