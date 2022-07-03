import { Fragment } from "react";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
