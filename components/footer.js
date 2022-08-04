import Link from "./Link";
import { useTranslation } from "next-i18next";

function Footer() {
  const { t } = useTranslation("common");
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
      </div>
      <div className="col">
        <ul className="nav" role="menu">
          <li>
            <Link href="/downloads">{t("menu.downloads")}</Link>
          </li>
          <li>
            <Link href="/services">{t("menu.ourservices")}</Link>
          </li>
          <li>
            <Link href="/apis">{t("menu.api")}</Link>
          </li>
          <li>
            <Link href="/faq">{t("menu.faq")}</Link>
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
