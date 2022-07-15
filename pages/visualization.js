import { useTranslation } from "next-export-i18n";
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
