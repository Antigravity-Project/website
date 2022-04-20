import styled from "styled-components";

export const Title = styled.h1`
	font-family: "Ubuntu";
	font-size: 2rem;
	color: ${({ theme }) => theme.TEXT};
`;

export const Paragraph = styled.p`
	font-family: "Poppins";
	color: ${({ theme }) => theme.TEXT};
`;
