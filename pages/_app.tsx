import * as React from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps, fallback }: AppPropsWithLayout&{fallback: object}) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <SWRConfig
      value={{
        fallback,
        refreshInterval: 5000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://api.fontshare.com/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </SWRConfig>
  );
}
