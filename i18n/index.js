const pt = require("./translation.pt.json");
const es = require("./translation.es.json");
const en = require("./translation.en.json");
const fr = require("./translation.fr.json");

const i18n = {
  translations: {
    pt,
    es,
    en,
    fr,
  },
  defaultLang: "pt",
  useBrowserDefault: true,
};

module.exports = i18n;
