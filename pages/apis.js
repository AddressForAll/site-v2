import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function APIs() {
  const { t } = useTranslation();
  return (
    <section
      id="apis"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("apis.md")),
      }}
    ></section>
  );
}
