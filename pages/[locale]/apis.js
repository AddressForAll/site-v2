import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";

import markdown from "../../content/import.md";
import html from "../../content/import.html";

const mdCont = markdown;
const htmlCont = html;

const converter = new Converter();

export default function APIs() {
  const { t } = useTranslation("common");
  return (
    <>
      <section
        id="apis"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(t("apis.md")),
        }}
      ></section>
      <section
        id="markdown_example"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(mdCont),
        }}
      ></section>
      <section
        id="html_example"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(htmlCont),
        }}
      ></section>
    </>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
