import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Statutes() {
  const { t } = useTranslation();
  return (
    <section
      id="statutes"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("statutes.md")),
      }}
    ></section>
  );
}
