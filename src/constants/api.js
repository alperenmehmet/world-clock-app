import axios from 'axios';

export const BASE_URL_QUOTE = 'https://api.quotable.io/random/';

export const BASE_URL_WORLD_TIME = 'https://worldtimeapi.org/api/timezone/';

export const BASE_URL_FREE_GEO =
  'https://api.ipbase.com/v2/info?ip=1.1.1.1&apikey=';

export const getQuote = async () => {
  const result = await axios
    .get(`${BASE_URL_QUOTE}`)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
  return result;
};

export const getGeo = async () => {
  const result = await axios
    .get(`${BASE_URL_FREE_GEO}${process.env.REACT_APP_GEO_KEY}`)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
  return result.time_zone.id;
};

export const getTime = async (geoIp) => {
  const result = await axios
    .get(`${BASE_URL_WORLD_TIME}${geoIp}`)
    .then((data) => data)
    .catch((err) => console.log(err));
  return result;
};
