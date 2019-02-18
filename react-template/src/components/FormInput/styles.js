import styled from 'styled-components/macro';
import color from '../../../../constants/color';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const LabelContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

export const Label = styled.p`
	width: 100%;
	text-align: left;
	font-family: dinpro, sans-serif;
	font-size: 14px;
	line-height: 16px;
	color: ${color.gray};
	white-space: pre-wrap;
`;

export const InputContainer = styled.div`
	margin-top: 16px;
	width: 100%;
`;

export const Detail = styled(Label)`
	margin-top: 12px;
	color: ${color.black};
`;
