import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Title } from "styles";

import {
	Container,
	CustomButton,
	CustomLink,
	DrawerUl,
	Hr,
	Li,
	Logo,
	ResponsiveNav,
	Ul,
} from "./styles";

export const Header: NextPage = () => {
	const { isOpen, onOpen: openDrawer, onClose: closeDrawer } = useDisclosure();

	return (
		<>
			<Container>
				<Logo>Antigravity</Logo>
				<ResponsiveNav>
					<Ul>
						<Li>
							<Link href="#" passHref>
								<CustomLink>Comandos</CustomLink>
							</Link>
						</Li>
						<Li>
							<Link href="#" passHref>
								<CustomLink>Termos de Uso</CustomLink>
							</Link>
						</Li>
					</Ul>
					<CustomButton onClick={openDrawer}>
						<Image src="/menu-button.svg" width="24px" height="24px" />
					</CustomButton>
				</ResponsiveNav>
			</Container>

			<Drawer isOpen={isOpen} onClose={closeDrawer} placement="right">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">
						<Title>Links</Title>
					</DrawerHeader>
					<DrawerBody>
						<DrawerUl>
							<li>
								<Link href="#" passHref>
									<CustomLink>Comandos</CustomLink>
								</Link>
							</li>
							<Hr />
							<li>
								<Link href="#" passHref>
									<CustomLink>Termos de Uso</CustomLink>
								</Link>
							</li>
						</DrawerUl>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
