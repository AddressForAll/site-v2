import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";

const converter = new Converter();

export default function Services() {
  const { t } = useTranslation("common");
  return (
    <section
      id="services"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("services.md")),
      }}
    ></section>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };