/* eslint-disable @next/next/no-img-element */
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";

const converter = new Converter();

export default function Data() {
  const { t, i18n } = useTranslation("common");
  return (
    <>
      <section id="data" className="flex-container">
        <h1>{t("data.title")}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(t("data.text")),
          }}
        />
        <p>{t("data.phases.text")}</p>

        <img alt="data flow" src=      {(() => {
        switch (i18n.language) {
          case 'en':
            return '/img/diagrams/i001_en-diaDataflow-main.png'
          default:
            return '/img/diagrams/i001_lt-diaDataflow-main.png'
        }
      })()} />

        <ul className="flex-list">
          <li className="card">
            <h3>{t("data.phases.phase01.title")}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(t("data.phases.phase01.text")),
              }}
            />
          </li>
          <li className="card">
            <h3>{t("data.phases.phase02.title")}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(t("data.phases.phase02.text")),
              }}
            />
          </li>
          <li className="card">
            <h3>{t("data.phases.phase03.title")}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(t("data.phases.phase03.text")),
              }}
            />
          </li>
        </ul>
      </section>
    </>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
