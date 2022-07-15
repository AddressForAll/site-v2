var pt = require("./translation.pt.json");
var es = require("./translation.es.json");
var en = require("./translation.en.json");
var fr = require("./translation.fr.json");

const i18n = {
  translations: {
    pt,
    es,
    en,
    fr,
  },
  defaultLang: "pt",
  useBrowserDefault: false,
};

// export default i18n;
module.exports = i18n;
