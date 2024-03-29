import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/bootstrap.scss";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import StoreProvider from "@/store/StoreProvider";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
