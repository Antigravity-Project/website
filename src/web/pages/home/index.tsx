import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "web/components/button";
import { Header } from "web/components/header";

export const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center h-screen bg-background-500]">
				<div className="mt-10 flex flex-col-reverse items-center justify-center gap-12 md:mt-20 md:flex-row md:gap-40">
					<div className="flex items-center justify-center text-center flex-col gap-7">
						<p className="w-[35vw] min-w-[20rem] text-xl">
							Antigravity é um simples bot de moderação e diversão para seu
							servidor! Este é um projeto desenvolvido por End, Hanzo e Molotov!
						</p>
						<Button>Adicionar o bot</Button>
					</div>
					<span className="duration-200 hover:scale-110">
						<Image
							src="/logo.webp"
							width="240"
							height="220"
							style={{
								borderRadius: "50%",
							}}
							alt="logo"
						/>
					</span>
				</div>
			</main>
		</>
	);
};
