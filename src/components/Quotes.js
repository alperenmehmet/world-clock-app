import { Center, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useGlobalContext } from '../context';

const Quotes = () => {
  const { quote } = useGlobalContext();
  console.log(quote);
  return (
    <Flex margin={10} flexDirection='column' position='absolute'>
      <Text fontStyle='italic'>"{quote.content}"</Text>
      <Text fontWeight='bold'>{quote.author}</Text>
    </Flex>
  );
};

export default Quotes;
