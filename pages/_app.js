import Layout from "../components/layout";
import "../styles/globals.scss";
import { appWithTranslation } from 'next-i18next'

// const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// export default MyApp;
export default appWithTranslation(MyApp);
