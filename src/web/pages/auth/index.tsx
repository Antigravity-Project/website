import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Auth: NextPage = () => {
	const router = useRouter();
	const { query } = router;
	const { access_token: accessToken, refresh_token: refreshToken } = query;

	useEffect(() => {
		if (!accessToken || !refreshToken) {
			return;
		}

		axios
			.get(`${process.env.NEXT_PUBLIC_DISCORD_API_URL}/users/@me`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then(({ data }) => {
				data.accessToken = accessToken;
				data.refreshToken = refreshToken;

				localStorage.setItem("account", JSON.stringify(data));
			});

		axios
			.get(`${process.env.NEXT_PUBLIC_DISCORD_API_URL}/users/@me/guilds`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then(({ data }) => {
				const currentAccount = localStorage.getItem("account") as string;
				const parsedAccount = JSON.parse(currentAccount);
				parsedAccount.guilds = data;

				localStorage.setItem("account", JSON.stringify(parsedAccount));
			});

		router.push("/");
	});

	return <div />;
};
