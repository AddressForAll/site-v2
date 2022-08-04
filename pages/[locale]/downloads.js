import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";

const converter = new Converter();

export default function Downloads() {
  const { t } = useTranslation("common");
  return (
    <section
      id="downloads"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("downloads.md")),
      }}
    ></section>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };