import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Partners() {
  const { t } = useTranslation();
  return (
    <section
      id="partners"
      className="flex-container"
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(t("partners.md")),
      }}
    ></section>
  );
}
