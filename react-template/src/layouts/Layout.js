/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import RecipientModalList from '../containers/recipients/ModalList';
import colors from '../constants/color';
import Resizer from './Resizer';
import Popups from './Popups';

const Container = styled.div`
  background: ${colors.grayBackground};
  min-height: calc(100vh - 0px);
`;

export default ({ children }) => (
  <Container>
    <RecipientModalList />
    <Header />
    <Resizer>{children}</Resizer>
    <Popups />
  </Container>
);
