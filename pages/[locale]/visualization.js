import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";

const converter = new Converter();

export default function Visualization() {
  const { t } = useTranslation();
  return (
    <section
      id="visualization"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("visualization.md")),
      }}
    ></section>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
