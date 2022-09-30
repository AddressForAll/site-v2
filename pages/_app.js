import SEO from "../components/SEO";
import "../styles/globals.scss";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
