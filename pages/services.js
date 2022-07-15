import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Services() {
  const { t } = useTranslation();
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
