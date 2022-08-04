/* eslint-disable @next/next/no-img-element */
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import Link from "../../components/Link";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";

const converter = new Converter();

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <section id="advertisment">
        <div
          className="message"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(t("home.advertisment.message")),
          }}
        />
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
        <img src="/img/regioes_atendidas.svg" alt="regional map" />
      </section>
      <section id="aboutus">
        <p className="message">{t("home.aboutus.message")}</p>
        <Link href="/about">
          <a className="btn btn-blue">{t("menu.whoweare")}</a>
        </Link>
      </section>
      <section id="downloadsbnr">
        <div className="col">
          <p className="message">{t("home.downloads.message")}</p>
          <Link href="/downloads">
            <a className="btn btn-blue">{t("menu.downloads")}</a>
          </Link>
        </div>
      </section>
    </>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
