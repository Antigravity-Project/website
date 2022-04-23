import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "web/components/button";
import { Header } from "web/components/header";

import { BotInformation, BotInvite, ImageWrapper, Main, P } from "./styles";

export const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Main>
				<BotInformation>
					<BotInvite>
						<P>
							Antigravity é um simples bot de moderação e diversão para seu
							servidor! Este é um projeto desenvolvido por End, Hanzo e Molotov!
						</P>
						<Button>Adicionar o bot</Button>
					</BotInvite>
					<ImageWrapper>
						<Image
							src="/logo.webp"
							width="240"
							height="220"
							style={{
								borderRadius: "50%",
							}}
							alt="logo"
						/>
					</ImageWrapper>
				</BotInformation>
			</Main>
		</>
	);
};
