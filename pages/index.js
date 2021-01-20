import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';

import TextBox from '../components/TextBox';


const sample = `hello world
		hello world
		hello world
		hello world`

export default () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <TextBox text={sample}/>
      </Box>
    </Container>
  );
}
