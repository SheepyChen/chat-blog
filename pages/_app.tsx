import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@component/component/header";
import Footer from "@component/component/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
