import styled, { css } from "styled-components";

import type { ButtonProps } from ".";

const COLOR = {
	purple: css`
		background-color: ${({ theme }) => theme.PURPLE};
		color: ${({ theme }) => theme.TEXT};

		&:hover {
			filter: brightness(1.05);
			box-shadow: 0 0 1rem ${({ theme }) => theme.PURPLE};
		}
	`,
	none: css`
		background-color: transparent;
		color: ${({ theme }) => theme.PURPLE};
		border: 1px solid ${({ theme }) => theme.PURPLE};

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
	transition: 200ms;

	${({ theme }) => COLOR[theme.background as "none" | "purple"]}
`;
