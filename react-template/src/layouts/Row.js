/* eslint-disable no-unused-vars */
import styled from 'styled-components/macro';
import { bigger } from '../helpers/mixins';

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify || ''};
  align-items: ${({ align }) => align || ''};
  flex: ${({ flex }) => flex || ''};
  width: 100%;
`;
