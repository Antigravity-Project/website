import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.BACKGROUND};
	filter: drop-shadow(0 0 0.5rem black);
	height: 7rem;
	color: ${({ theme }) => theme.TEXT};
`;

export const Logo = styled.h1`
	font-family: "Roboto";
	font-size: 1.5rem;
	margin-left: 4rem;

	@media (max-width: 600px) {
		margin-left: 2rem;
	}
`;

export const ResponsiveNav = styled.nav`
	margin-right: 4rem;

	@media (max-width: 600px) {
		margin-right: 2rem;
	}
`;

export const Ul = styled.ul`
	display: flex;
	list-style: none;
	gap: 1rem;

	@media (max-width: 600px) {
		display: none;
	}
`;

export const Li = styled.li`
	padding: 0.9rem;
	cursor: pointer;
	transition: 200ms;

	&:hover {
		background-color: ${({ theme }) => theme.PURPLE};
	}
`;

export const CustomLink = styled.a`
	text-decoration: none;
	font-family: "Poppins";
	color: ${({ theme }) => theme.TEXT};
`;

export const CustomButton = styled.button`
	border: none;
	background: none;
	align-items: center;
	display: none;

	@media (max-width: 600px) {
		display: flex;
	}
`;

export const DrawerUl = styled.ul`
	list-style: none;
`;

export const Hr = styled.hr`
	margin: 0.5rem 0;
`;

export const DrawerDiv = styled.div`
	width: 100%;
	height: 75%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
