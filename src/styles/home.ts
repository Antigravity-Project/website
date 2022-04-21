import styled from "styled-components";
import { Paragraph } from "styles";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10rem;
	height: 100vh;
	background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const BotInformation = styled.div`
	margin-top: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10rem;

	@media (max-width: 800px) {
		margin-top: 2rem;
		flex-direction: column-reverse;
		gap: 3rem;
	}
`;

export const P = styled(Paragraph)`
	width: 35vw;
	min-width: 20rem;
	font-size: 1.2rem;
`;

export const ImageWrapper = styled.span`
	transition: 200ms;

	&:hover {
		transform: scale(1.1);
		border-radius: 20px !important;
	}
`;

export const BotInvite = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	gap: 30px;
`;
