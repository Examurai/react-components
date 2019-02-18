/* eslint-disable no-unused-vars */
import styled from 'styled-components/macro';
import { bigger } from '../helpers/mixins';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || ''};
  align-items: ${({ align }) => align || ''};
  flex: ${({ flex }) => flex};
  ${({ full }) =>
    full &&
    `
        & > * {
            height: calc(100% - 0px);
        }
    `}
`;
