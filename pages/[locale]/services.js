import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";
import Layout from "../../components/layout";

const converter = new Converter();

export default function Services() {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section
        id="services"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(t("services.md")),
        }}
      ></section>
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };