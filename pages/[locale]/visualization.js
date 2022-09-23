import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";
import Layout from "../../components/layout";

import markdown from "../../content/list_visualization.md";

const mdCont = markdown;

const converter = new Converter();

export default function Visualization() {
  const { t } = useTranslation();
  return (
    <Layout>
      <section
        id="visualization"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(t("visualization.md")),
        }}
      ></section>
      <section
        id="list_visualization"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(mdCont),
        }}
      ></section>
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
