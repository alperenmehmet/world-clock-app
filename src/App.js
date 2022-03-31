import { Container, Image, Text } from '@chakra-ui/react';

import dayTime from './assets/day-time.jpg';
import Quotes from './components/Quotes';
import { BASE_URL_FREE_GEO } from './constants/api';

const App = () => {
  return (
    <>
      <Image
        src={dayTime}
        bgPosition='center'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgAttachment='fixed'
        position='fixed'
        zIndex='-1'
      />
      <Quotes />
    </>
  );
};

export default App;
