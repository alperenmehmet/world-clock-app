import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getGeo, getQuote, getTime } from '../constants/api';

const Quotes = () => {
  const [quote, setQuote] = useState({});

  useEffect(async () => {
    getQuote().then((data) => data && setQuote(data));
  }, []);

  return (
    <Flex margin={10} flexDirection='column' width='500px' position='absolute'>
      <Text fontStyle='italic'>"{quote.content}"</Text>
      <Text fontWeight='bold'>{quote.author}</Text>
    </Flex>
  );
};

export default Quotes;
