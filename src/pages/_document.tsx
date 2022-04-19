import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins&family=Ubuntu&family=Roboto&display=swap"
					rel="stylesheet"
				/>
				<meta name="theme-color" content="#7F5AF0" />
				<meta name="name" content="Antigravity" />
				<meta name="description" content="Um simples bot de moderação" />
				<meta property="og:name" content="Antigravity" />
				<meta property="og:description" content="Um simples bot de moderação" />
				<meta name="twitter:card" content="summary" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
