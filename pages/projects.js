import { useTranslation, Trans } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="flex-container">
      <h1>{t("projects.title")}</h1>
      <p>{t("projects.text")}</p>
      <h2 id="AddressForAll">{t("projects.project01.title")}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(t("projects.project01.text")),
        }}
      />
      <h2 id="CRP">{t("projects.project02.title")}</h2>
      <p>{t("projects.project02.text")}</p>
      <h2 id="OSM-Codes">{t("projects.project03.title")}</h2>
      <p>{t("projects.project03.text")}</p>
      <h2 id="Digital-Preserv">{t("projects.project04.title")}</h2>
      <p>{t("projects.project04.text")}</p>
      <h2 id="Digital-Gov">{t("projects.project05.title")}</h2>
      <p>{t("projects.project05.text")}</p>
      <h2 id="Early-Childhood">{t("projects.project06.title")}</h2>
      <p>{t("projects.project06.text")}</p>
    </section>
  );
}
