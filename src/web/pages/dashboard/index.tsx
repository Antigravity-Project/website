import type { NextPage } from "next";
import { useEffect } from "react";
import { Header } from "web/components/header";

export const Dashboard: NextPage = () => {
	useEffect(() => {
		const userData = localStorage.getItem("antigravity_user");
		if (!userData) {
			window.location.href = process.env
				.NEXT_PUBLIC_DISCORD_AUTHORIZATION_LINK as string;
		}
	}, []);

	return (
		<>
			<Header />
			<main className="bg-background-500 h-screen" />
		</>
	);
};
