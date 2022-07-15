import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <>
      <section id="faq" className="flex-container">
        <h1>{t("faq.title")}</h1>
        <h2>{t("faq.dados.title")}</h2>
        <ol>
          <li>
            <div className="question">
              <p>{t("faq.dados.q01.q")}</p>
            </div>
            <div className="answer">
              <p>{t("faq.dados.q01.a.text")}</p>
              <ul>
                <li>{t("faq.dados.q01.a.pt01")}</li>
                <li>{t("faq.dados.q01.a.pt02")}</li>
                <li>{t("faq.dados.q01.a.pt03")}</li>
              </ul>
              <p>{t("faq.dados.q01.a.subtext")}</p>
            </div>
          </li>
          <li>
            <div className="question">
              <p>{t("faq.dados.q02.q")}</p>
            </div>
            <div className="answer">
              <div
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(t("faq.dados.q02.a.text")),
                }}
              />
              <ul>
                <li>{t("faq.dados.q02.a.pt01")}</li>
                <li>{t("faq.dados.q02.a.pt02")}</li>
              </ul>
              <p>{t("faq.dados.q02.a.subtext")}</p>
            </div>
          </li>
          <li>
            <div className="question">
              <p>{t("faq.dados.q03.q")}</p>
            </div>
            <div className="answer">
              <div
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(t("faq.dados.q03.a")),
                }}
              />
            </div>
          </li>
          <li>
            <div className="question">
              <p>{t("faq.dados.q04.q")}</p>
            </div>
            <div className="answer">
              <p>{t("faq.dados.q04.a")}</p>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}