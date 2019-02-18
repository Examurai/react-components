import styled from 'styled-components/macro';
import color from '../../constants/color';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${props => (
  	props.isFocus ?
		  color.accent :
		  props.isError ? color.error : color.grayLight
	)};
  background: ${color.white};

  :hover {
    border-color: ${color.accent};
  }
`;

export const Input = styled.input`
  width: ${props => (props.isCompleted ? 'calc(100% - 32px)' : '100%')};
  height: 100%;
  background: ${color.white};
  border: 0;
  outline: none;
  font-family: dinpro, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: ${color.black};
  ::placeholder {
  	color: ${color.gray};
  }
  :focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  margin-left: 16px;
  width: 16px;
  height: 16px;
`;

export const Empty = styled.div`
	height: 0;
	overflow: visible;
`;

export const ErrorMessage = styled.p`
  top: 4px;
  left: 16px;
  font-family: dinpro, sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: ${color.error};
  display: block;
  position: relative;
`;
