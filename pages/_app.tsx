import { FC } from "react";
import Layout from "../components/Layout/Layout";

import "../styles/globals.css";

import type { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
