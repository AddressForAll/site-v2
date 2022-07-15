/* Some data examples in JSON */

const crew = {
  Peter: {
    name: "Peter Krauss",
    photo: "http://addressforall.org/resources/img/equipe-peter.jpg",
    country_pt: "Brasil",
    country_em: "Brazil",
    country_sp: "Brasil",
    role: "Coord. back-end",
  },
  Thierry: {
    name: "Thierry Jean",
    photo: "http://addressforall.org/resources/img/equipe-thierry.jpg",
    country_pt: "Brasil / Francia",
    country_em: "Brazil / France",
    country_sp: "Brasil / Franccia",
    role: "Chairperson",
  },
};

// eslint-disable-next-line no-unused-vars
const board = [crew.Thierry, crew.Peter];
// eslint-disable-next-line no-unused-vars
const tech = [crew.Peter]

// Schema.org Person
// According Schema Markup Generator - Person
// https://kalicube.pro/schema-markup-generator-person

// eslint-disable-next-line no-unused-vars
const Peter = {
  "@context": "http://schema.org",
  "@type": "Person",
  familyName: "Krauss",
  givenName: "Peter",
  worksFor: "http://AddressForAll.org",
  jobTitle: "Coord. back-end",
  image: "http://addressforall.org/resources/img/equipe-peter.jpg",
};
