import { useEffect, useState } from 'react';
import { getGeo, getTime } from '../constants/api';

const Time = () => {
  const [geoIp, setGeoIp] = useState();
  const [worldTime, setWorldTime] = useState();

  useEffect(() => {
    getGeo().then((data) => data && setGeoIp(data));
    getTime(geoIp).then((data) => data && setWorldTime(data));
  }, [geoIp]);

  console.log(worldTime);
  return <div></div>;
};

export default Time;
