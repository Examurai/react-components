import React from 'react';
import styled from 'styled-components/macro';

import Input from '../components/Input';

const Container = styled.div`
  padding: 56px;
`;

export default () => (
  <Container>
    <Input />
  </Container>
);