import "../styles/globals.css";
import type { AppProps } from "next/app";
import userContext from "../contexts/userContext";
import { useState } from "react";

interface user {
  username: string,
}

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState({} as user );

	return (
		<userContext.Provider value={{ user, setUser }}>
			<Component {...pageProps} />
		</userContext.Provider>
	);
}

export default MyApp;
