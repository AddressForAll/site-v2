/* eslint-disable @next/next/no-img-element */
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";
import Layout from "../../components/layout";

const converter = new Converter();

export default function Data() {
  const { t, i18n } = useTranslation("common");
  return (
    <Layout>
      <section id="data" className="flex-container">
        <h1>{t("data.title")}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(t("data.text")),
          }}
        />
        <p className="wide">{t("data.phases.text")}</p>

        <div className="flex-img">
          <img alt="data flow" src={`/img/diagrams/i001_${i18n.language}-diaDataflow-main.png`} />
        </div>

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
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
