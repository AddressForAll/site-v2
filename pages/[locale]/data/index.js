/* eslint-disable @next/next/no-img-element */
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";
import Layout from "../../../components/layout";
import Funil from "../../../components/funil/funil";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

const converter = new Converter();

export default function Data() {
  const { t, i18n } = useTranslation("common");

  const [statsDonorsProspection, setStatsDonorsProspection] = useState(null);

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://osm.codes/_sql/stats_donors_prospection`
      );
      const data = await res.json();
      const statsDonorsProspection = data
        .filter((d) => d["donor_status"] != -1)
        .sort((d1, d2) => d2["amount"] - d1["amount"]);
        setStatsDonorsProspection(statsDonorsProspection)
      console.log("statsDonorsProspection:", statsDonorsProspection);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

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
          <img
            alt="data flow"
            src={`/img/diagrams/i001_${i18n.language}-diaDataflow-main.png`}
          />
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


        {statsDonorsProspection && (
          <div className={styles['donors-section']}>
            <Funil
              l1_tit={statsDonorsProspection[0]["label"]}
              l1_v={statsDonorsProspection[0]["amount"]}
              l2_tit={statsDonorsProspection[1]["label"]}
              l2_v={statsDonorsProspection[1]["amount"]}
              l3_tit={statsDonorsProspection[2]["label"]}
              l3_v={statsDonorsProspection[2]["amount"]}
            />
          </div>
        )}
      </section>
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
