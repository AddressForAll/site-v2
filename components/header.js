/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

function Header() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <header>
      <div className="brand">
        <Link href="/">
          <svg>
            <use xlinkHref="#logosvg"></use>
          </svg>
        </Link>
      </div>

      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">
        &#9776;
      </label>

      <nav>
        <ul className="menu nav">
          <li className="dropdown">
            <span className="dropdown-toggle" href="!#" role="button">
              {t("menu.whoweare")}
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link href={{ pathname: "/about", query: query }}>
                  {t("menu.whoweare")}
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/statutes", query: query }}>
                  {t("menu.statute")}
                </Link>
              </li>
              <li>
                <a href="/about#projects">{t("menu.projects")}</a>
              </li>
              <li>
                <Link href={{ pathname: "/partners", query: query }}>
                  {t("menu.partners")}
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle" href="!#" role="button">
              {t("menu.data")}
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link href={{ pathname: "/data", query: query }}>
                  {t("menu.data")}
                </Link>
              </li>
              <li>
                {/* <Link href={{ pathname: "/documentation", query: query }}> */}
                {/* <Link href="http://docs.addressforall.org/"> */}
                {/* {t("menu.documentation")}
                </Link> */}
                <a
                  href="http://docs.addressforall.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("menu.documentation")}
                </a>
              </li>
              <li>
                <Link href={{ pathname: "/visualization", query: query }}>
                  {t("menu.visualization")}
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/downloads", query: query }}>
                  {t("menu.downloads")}
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/apis", query: query }}>
                  {t("menu.api")}
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/faq", query: query }}>
                  {t("menu.faq")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={{ pathname: "/services", query: query }}>
              {t("menu.ourservices")}
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/contribute", query: query }}>
              {t("menu.contribute")}
            </Link>
          </li>
          <li>
            <a href="https://medium.com/@presidencia_82067" rel="external">
              {t("menu.blog")}
            </a>
          </li>
        </ul>

        <ul className="icons-menu nav">
          <li>
            <a
              href="https://github.com/AddressForAll"
              target="_blank"
              title="GitHub"
              rel="noopener noreferrer"
            >
              <svg>
                <use xlinkHref="#git"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://dadosabertos.social/c/dados-espaciais/12"
              target="_blank"
              title={t("menu.opendataportal")}
              rel="noopener noreferrer"
            >
              <svg>
                <use xlinkHref="#dadosAbertos"></use>
              </svg>
            </a>
          </li>
        </ul>

        <div className="LanguageSwitcher">
          <LanguageSwitcher lang="pt">BR</LanguageSwitcher> |{" "}
          <LanguageSwitcher lang="es">ES</LanguageSwitcher>
        </div>
        {/* <form className="switcher">
          <select onChange={handleChangeLocale} value={language}>
            <option key="pt" value="pt" defaultValue>
              BR
            </option>
            <option key="es" value="es">
              ES
            </option>
            <option key="en" value="en">
              EN
            </option>
            <option key="fr" value="fr">
              FR
            </option>
          </select> 
           </form> */}
      </nav>
    </header>
  );
}

export default Header;
