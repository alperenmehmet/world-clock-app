import { Image } from '@chakra-ui/react';
import dayTime from './assets/day-time.jpg';
import Quotes from './components/Quotes';

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
