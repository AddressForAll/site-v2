/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "./Link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitchLink from "./LanguageSwitchLink";

import i18nextConfig from "../next-i18next.config";

function Header() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;
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
                <Link href="/about">{t("menu.whoweare")}</Link>
              </li>
              <li>
                <Link href="/statutes">{t("menu.statute")}</Link>
              </li>
              <li>
                <Link href="/about#projects">{t("menu.projects")}</Link>
              </li>
              <li>
                <Link href="/partners">{t("menu.partners")}</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle" href="!#" role="button">
              {t("menu.data")}
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link href="/data">{t("menu.data")}</Link>
              </li>
              <li>
                <a
                  href="http://docs.addressforall.org/"
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  {t("menu.documentation")}
                </a>
              </li>
              <li>
                <Link href="/visualization">{t("menu.visualization")}</Link>
              </li>
              <li>
                <Link href="/downloads">{t("menu.downloads")}</Link>
              </li>
              <li>
                <Link href="/apis">{t("menu.api")}</Link>
              </li>
              <li>
                <Link href="/faq">{t("menu.faq")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/services">{t("menu.ourservices")}</Link>
          </li>
          <li>
            <Link href="/contribute">{t("menu.contribute")}</Link>
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
              href="https://git.AddressForAll.org"
              target="_blank"
              title="AddressForAll gits"
              rel="external noopener noreferrer"
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
              rel="external noopener noreferrer"
            >
              <svg>
                <use xlinkHref="#dadosAbertos"></use>
              </svg>
            </a>
          </li>
        </ul>

        <div className="LanguageSwitcher">
          {i18nextConfig.i18n.locales.map((locale) => {
            if (locale === currentLocale) return null;
            return <LanguageSwitchLink locale={locale} key={locale} />;
          })}
        </div>
      </nav>
    </header>
  );
}

export default Header;
