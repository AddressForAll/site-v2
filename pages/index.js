/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Home() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <>
      <section id="advertisment">
        <div
          className="message"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(t("home.advertisment.message")),
          }}
        />
        {/* <p className="message">
          {t("home.advertisment.message")}{" "}
          <span className="underlined">{t("home.advertisment.remark")}</span>
        </p> */}
        <div className="youtube-video-container">
          <iframe
            src={t("home.advertisment.video")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section id="regionalmap">
        <div
          className="message"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(t("home.regionalmap.message")),
          }}
        />
        {/* <p className="message">
          {t("home.regionalmap.message")}{" "}
          <span className="underlined">{t("home.regionalmap.remark")}</span>
        </p> */}
        <img src="/img/regioes_atendidas.svg" alt="regional map" />
      </section>
      <section id="aboutus">
        <p className="message">{t("home.aboutus.message")}</p>
        <Link href={{ pathname: "/about", query: query }}>
          <a className="btn btn-blue">{t("menu.whoweare")}</a>
        </Link>
      </section>
      <section id="downloadsbnr">
        <div className="col">
          <p className="message">{t("home.downloads.message")}</p>
          <Link href={{ pathname: "/downloads", query: query }}>
            <a className="btn btn-blue">{t("menu.downloads")}</a>
          </Link>
        </div>
      </section>
    </>
  );
}
