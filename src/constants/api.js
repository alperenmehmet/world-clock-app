import axios from 'axios';

export const BASE_URL_QUOTE = 'https://api.quotable.io/random/';

export const BASE_URL_WORLD_TIME = 'https://worldtimeapi.org/api/timezone/';

export const BASE_URL_FREE_GEO = 'https://api.freegeoip.app/json/?apikey=';

export const getQuote = async () => {
  const result = await axios.get(`${BASE_URL_QUOTE}`).then(({ data }) => data);
  return result;
};

export const getGeo = async () => {
  const result = await axios
    .get(`${BASE_URL_FREE_GEO}${process.env.REACT_APP_GEO_KEY}`)
    .then(({ data }) => console.log(data));
  return result;
};
