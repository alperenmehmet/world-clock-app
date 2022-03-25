import { Image, Text } from '@chakra-ui/react';

import dayTime from './assets/day-time.jpg';
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
      <Text>hello</Text>
    </>
  );
};

export default App;
