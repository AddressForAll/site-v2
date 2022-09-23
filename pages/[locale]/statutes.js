/* eslint-disable @next/next/no-img-element */
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";
import Layout from "../../components/layout";

import html from "../../content/pt_estatutoResumo.html";

const htmlCont = html;

const converter = new Converter();

export default function Statutes() {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section
        id="statutes"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(htmlCont),
        }}
      ></section>
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
