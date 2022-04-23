import type { NextPage } from "next";
import { Header } from "web/components/header";

import { Main } from "./styles";

export const Dashboard: NextPage = () => {
	return (
		<>
			<Header />
			<Main />
		</>
	);
};
