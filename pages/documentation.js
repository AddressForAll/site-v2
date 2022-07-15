import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Documentation() {
  const { t } = useTranslation();
  return (
    <section
      id="documentation"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("documentation.md")),
      }}
    ></section>
  );
}
