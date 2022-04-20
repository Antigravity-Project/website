import styled, { css } from "styled-components";

import type { ButtonProps } from ".";

const COLOR = {
	purple: css`
		background-color: ${({ theme }) => theme.PURPLE};
		color: ${({ theme }) => theme.TEXT};
	`,
	none: css`
		background-color: transparent;
		color: ${({ theme }) => theme.PURPLE};
		border: 1px solid ${({ theme }) => theme.PURPLE};
		transition: 200ms;

		&:hover {
			color: ${({ theme }) => theme.TEXT};
			background-color: ${({ theme }) => theme.PURPLE};
		}
	`,
};

export const Container = styled.button<ButtonProps>`
	padding: 15px;
	cursor: pointer;
	border-radius: ${({ theme }) => theme.borderRadius};
	font-family: "Poppins";

	${({ theme }) => COLOR[theme.background as "none" | "purple"]}
`;
