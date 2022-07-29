const pt = require("./translation.pt.json");
const es = require("./translation.es.json");
const en = require("./translation.en.json");
// const fr = require("./translation.fr.json");

const i18n = {
  translations: {
    pt: pt,
    es: es,
    en: en,
    // fr: fr,
  },
  defaultLang: "pt",
  useBrowserDefault: false,
};

module.exports = i18n;
