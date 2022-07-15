import Link from "next/link";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

function Footer() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <footer>
      <div className="col">
        <div className="brand">
          <svg>
            <use xlinkHref="#logosvg"></use>
          </svg>
        </div>
      </div>
      <div className="col">
        <ul className="nav" role="menu">
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
            <Link href={{ pathname: "/projects", query: query }}>
              {t("menu.projects")}
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/partners", query: query }}>
              {t("menu.partners")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="col">
        <ul className="nav" role="menu">
          <li>
            <Link href={{ pathname: "/downloads", query: query }}>
              {t("menu.downloads")}
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/services", query: query }}>
              {t("menu.ourservices")}
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
      </div>
      <div id="contactus" className="col">
        <h3>{t("contact")}</h3>
        <address itemScope itemType="http://schema.org/Organization">
          <ul
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            <li className="hidden" itemProp="name">
              Instituto AddressForAll
            </li>
            <li itemProp="streetAddress">Av. Paulista, 171 4º andar</li>
            <li itemProp="addressLocality"> Bela Vista</li>
            <li itemProp="addressRegion"> São Paulo - SP</li>
            <li itemProp="postalCode"> 01311-904</li>
            <li itemProp="addressCountry"> Brasil</li>
          </ul>
        </address>
        <div itemProp="telephone">+55 11 4063-6401</div>
        <div>
          <a href="mailto:contato@addressforall.org" itemProp="email">
            contato@addressforall.org
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
