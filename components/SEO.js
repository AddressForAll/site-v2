import Head from 'next/head';
import { useTranslation } from "next-i18next";

export default function SEO() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title key="title">A4A - AddressForAll</title>
        <meta
          key="description"
          name="description"
          content={t("home.aboutus.message")}
        />
      </Head>
    </>
  );
}