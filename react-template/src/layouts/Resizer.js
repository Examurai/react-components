/* eslint-disable no-unused-vars */
import styled from 'styled-components/macro';
import { bigger } from '../helpers/mixins';

export default styled.div`
  margin: auto;
  padding: 0 24px;
  //width: 100%;
  min-width: 1208px;

  ${bigger.tablet`
    padding: 0 32px;
    width: 100%;
  `}

  ${bigger.desktop`
    padding: 0;
    width: 1208px;
  `}
`;
