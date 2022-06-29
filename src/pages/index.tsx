import type { NextPage } from "next";
import Head from "next/head";

import Main from "../components/Main";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#FFFFFF"></meta>
				<title>Chance</title>
			</Head>
			<Main />
		</>
	);
};

export default Home;
