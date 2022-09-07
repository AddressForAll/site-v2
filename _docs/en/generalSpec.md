# Site requirements specification

## Philosophical pillars
Design, architecture and implementation philosophy.

1. [**Separation of concerns**](https://en.wikipedia.org/wiki/Separation_of_concerns): institutional commucication, software documentation and data vizualization interface  are 3 different things. Also  traditional separatin between logic, layout and content in a web site, all these concerns can be used in [architecture decisions](https://en.wikipedia.org/wiki/Cross-cutting_concern).

2. **Simplicity**: seek zen-like simplicity in which there is nothing to add and nothing to take away.

3. **Transparency**: transparent [data lineage](https://en.wikipedia.org/wiki/Data_lineage), transparent [reproducibility of official results](https://en.wikipedia.org/wiki/Reproducibility) and  [*institucional transparency*](https://en.wikipedia.org/wiki/Transparency_(behavior)).  

4. **Reuse**: reuse the building blocks, microservices, templates and existing standards. The development of web pages, data visualization and interface software are oriented to resuse.

5. **Extensibility and cross technology**: institutional (`www`) and `docs` subdomains of `addressForAll.org` support a broad range of technologies and infrastructures – avoid being tied to any one specific system.  We can "plug over the web site" maps, animations, etc. without risk and without reworking costs. We can also manage multilingual content (English, Portuguese, Spanish and others). <!-- Design for extensibility and customisation ...-->

## Terminology and definitions

* Content:
   - **Institutional contents**: in a *separation of concerns* context, is the content for the public communication of the site's owner, with legal value.  In the *implementation* context, it must be static per page, and *transparent* for [Internet Archive Registration](https://archive.org/), [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) and [formal registry offices](https://pt.wikipedia.org/wiki/F%C3%A9_p%C3%BAblica).

   - **Interface and dynamical content**: non-institutional content, including non-static content, like navigation menus, interactive animations, etc.

* Language: all web pages of the site can be offered with different languages and a language selector interface. The [HTML `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) is used to express the language at an HTML parent-element of the content.

   - **Institutional content's language**: the `lang` used to express  the language that institutionaql HTML content elements are written in. In general the `lang` at  `<main>` or `<article>` sections.

   - **Navigation and interface language**: the `lang` used to express  the language that interface must use, even to navigate over multiple institutional languages. At `<nav>`, `<menu>` and `<div>` of dynamical interfaces.

<aside align="right" style="padding:0.8em"><img width="320" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/ServerSideTemplates.gif/320px-ServerSideTemplates.gif" /><br/><img align="right" width="320" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/ClientSideTemplates.gif/320px-ClientSideTemplates.gif" /></aside>

* Template resolution: automatic content generation and web site renderizatrion, using any [web template system](https://en.wikipedia.org/wiki/Web_template_system) or technology, can occur in different machines, as a project decision.
  -  **server-side** template resolution: template and input are processed at server, so only result will add internet traffic.
  -  **client-side** template resolution: template processor, template and its input data, all will be sent to the client.

Web standards:

* **CSS**: adopting [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3) conventions.

* **HTML**: adopting [HTML5](https://en.wikipedia.org/wiki/HTML5) conventions. At SQL database the HTML content can be expressed as XHTML. At web site and templates, explore "semantic tags". Examples: `<article>`, `<section>`, `<footer>`, `<nav>` etc. instead `<div>`;  and `<abbr>`, `<address>`, `<time>` etc. instead `<span>` .

  - [HTML5-onlyContent](https://github.com/okfn-brasil/HTML5-onlyContent), HTML5 simplified tag subset, to avoid mix-content a *separation of concerns* decisions, and express *institutional content*.

  - [Microdata](https://en.wikipedia.org/wiki/Microdata_(HTML)): to add (in future) the "semantic layer" into HTML5. See [this complex example of transparent content](https://okfn-brasil.github.io/lexml-dou/demo/prop2_02.html), with its [machine interpretation](https://validator.schema.org/#url=https%3A%2F%2Fokfn-brasil.github.io%2Flexml-dou%2Fdemo%2Fprop2_02.html) and its [equivalent human-generated entry at LexML](https://www.lexml.gov.br/urn/urn:lex:br:federal:decreto.legislativo:2017-12-04;173).

AddressForAll domains and subdomains:

* `www.AddressForAll.org` (redirects to `AddressForAll.org`). Is the institutional site.

* `docs.AddressForAll.org`. Is the documentation site, but can be a refinement for institutional content, when browsing technical descriptions. The `docs` and `www` subdomains should offer, together,  an "one site" user experiency.

* `git.AddressForAll.org`. Is the Github redirector. Only a "proof of existency" for source code and data.

* `api.AddressForAll.org`. All API endpoints.

* `osm.codes`,  `digital-guard.org` and is subdomains. Complementar sites and API endpoints.


## General project decions and architecture

... UML and flowchart with [Mermaid](https://mermaid-js.github.io/mermaid/#/classDiagram)...

1. The server-side framework is  [**React**](https://www.digitalocean.com/community/tutorials/react-server-side-rendering-pt).

   1.1. Architecture:  React router, rendering content by modular templates.  

   1.2 Institutional content must by HTML generated in server-side.  The server-side (institucional) input content is a database (or set of files) of [HTML5-onlyContent](https://github.com/okfn-brasil/HTML5-onlyContent/blob/master/spec.md).

2. Institutional content and pages are specified by **Figma**. See  https://www.figma.com/files/recent?fuid=969362987840116767  or zip.

3. All pages are template-based, and templates are defined in the requirements, with rules and documentation. See Examples foilder.

4. The client-side framework must be React-compatible or non-:

5. Official assets: SVGs .. reuse.

-----

## Other rules and implementation requirements

...

--------------

----------------

# DRAFTS - to remember later
Copy/paste from issues, to be filtered and summarised.

### Project decisions

(from [issue 17](https://github.com/AddressForAll/site-v2/issues/17))

* Reassess if there are new requirements in the new issues of the project:
   - Implement toggle of drop-down menus in the top navigation bar
   - Implement a way to use .html files to be "injected" as section components;
   - All project images must be referenced through relative paths;

* Plan how to introduce the new layout in CSS and templates

* Plan multilingual architecture in ReactJS

* Decide whether to pre-parser the content (HTML input), so that anyone using any HTML editor can update the content.

### Server-side template language

(from [issue 21](https://github.com/AddressForAll/site-v2/issues/21))

[Template system](https://en.wikipedia.org/wiki/Web_template_system) Systems help to reuse standardized pieces of content. *Server-side web-templates* perform resolution (eg placeholder expansion) on server, arrive as static HTML on *client-side*.

A simple, highly interoperable and platform-independent solution is [Mustache5 template language](https://mustache.github.io/mustache.5.html).
It can be used in both PostreSQL and ReactJS from *server-side*, and can be used at *client-side*. Mustache5 is a directive for the global project, including documentation and technical reports.

On the other hand, as it is already a website decision to use ReactJS as a *server-side* and *client-side* "content framework", it would be convenient to use its template language directly: [JSX Embedding Expressions] (https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx).

In the future, if the most comfortable decision doesn't prove to be efficient, we can go back and translate all templates to Mustache.

Template uses:

* multilingual content;
* pre-parser the HTML content (instead Javascript with embedded-HTML);
* documentation (see [documentation_generator](https://github.com/AddressForAll/documentation_generator) and *mkdocs* replacement)
* "long-time dynamical" reports and illustrations based on database or statistics, see [digital-guard/stats](https://github.com/digital-guard/stats)
* generic reuse over "sister websites" (see OSMcodes and Digital-guard domains).

# Topic requiriments

## Server-side router requirements

(from [issue 8](https://github.com/AddressForAll/site-v2/issues/8))

Add here (at this issue text) a list of requirements we need to remember.   Check also #7 about website vesions.

1. The *server-side React router* will be used in v2.1.0 for `www.AddressForAll.org`  (that redirects to  `AddressForAll.org`) routing.

2. The same *server-side React router* will be used to implement other routing tasks, mainly for [`docs.AddressForAll.org`](http://docs.AddressForAll.org). <br/>See [documentation_generator](https://github.com/AddressForAll/documentation_generator), that must to be adapted  to deliver pages to the router.

3. Intranet pages (login)....
4. ...

## Dowload selector and loadCutGeo-kit

(from [issue 16](https://github.com/AddressForAll/site-v2/issues/16) and  [digital-guard/loadCutGeo-kit's issue 16](https://github.com/digital-guard/loadCutGeo-kit/issues/2))

All published "filtered data" as CutGeo (ex. [git.digital-guard.org/preservCutGeo-BR2021](http://git.digital-guard.org/preservCutGeo-BR2021) GeoJSON files)  can be downloaded  directly from Github website, with no bandwidth consumption from AddressForAll.

The ideal interface is a step-by-step form to select all user-needs and express it as a *JSON specification* (like a *config* file).  This specification can be used by external software, as provided for in [digital-guard/loadCutGeo-kit/issues/2](https://github.com/digital-guard/loadCutGeo-kit/issues/2), or in a "download needs" webpage.

Now we have a "conceptual reference" for selection concepts, see [digital-guard/stats/docs/report-public](https://digital-guard.github.io/stats/docs/pt/report-public).

**Requirements for the selection interface:**

Some options, like license options, are few ones, can be pre-loaded into the interface, some others need ajax-check. All are available as microservice. The first draft of the interface can use only HTML `<input text>`, `<input checkbox>` and `<select>` tags. Input text can be enhanced by auto-complete.

* **License [family](https://github.com/digital-guard/licenses/blob/master/data/families.csv)** filter.  `<input checkbox>` with names and on-mouse-over hint explanation.
* **Jurisdiction** filter, by country or more specific (ISOlabel_ext). `<select>` or map or `<input text>` auto-autocomplete.
* **Layer** filter.  `<input checkbox>` with names and icons.
* **Donor** filter.  `<select>`.
* **Date of donation** filter (received date). `<input text>` (year or year-month or interval).
* **package number** restriction (text box). `<input text>`.

The "check filters" is a `<input submit>` button listing filter countings, but future interface can use React to enable/disable filters (perhaps need all lists in the Javascript memory)... For both, perhaps, a  interface for change filter order (by drag and drop)  is interesting.

## Site v2 subversions
(from [issue 7](https://github.com/AddressForAll/site-v2/issues/7))

From July 2020 to July 2022 the "website version" was v1. Some of its source code is at http://git.AddressForAll.org/site-v1

This *git* repository, and its [`/docs` requirements specification](http://git.AddressForAll.org/site-v2/blob/main/docs/en/generalSpec.md) here, is about "website **version 2**", and adopted [semantic versioning](https://semver.org/), given a version number as `MAJOR.MINOR.PATCH`.
The development was organized in 3 moments:

* **Version 2.0.0** is only **for test** and discussions, we will publish it at http://teste.addressforall.org

* **Version 2.1.0** will be publish at http://addressforall.org , replacing the current website. <br/>  We have **tight deadlines** for that, and no special requirement about layout or performance. We need only to publish good multilingual content, and "plug to website" the first data visualization interfaces, like [digital-guard/preservDataViz](https://github.com/digital-guard/preservDataViz). <br/>Will be a good  web site for institutional content, and **experimental** for interfaces, APIs (microservice endpoints), downloads, etc.

* **Version 2.2.0** will be a "definitive replacement" of experimental parts, and can change layout (CSS). Will  be the  long-term, mature and stable layout and structure.<br/>No deadline for it.


## Multi-language contents
(from [issue 1](https://github.com/AddressForAll/site-v2/issues/1))

Decision in ReactJS context?

## Multipage site instead SPA

(from [issue 6](https://github.com/AddressForAll/site-v2/issues/6))

In the begining of content planing there was a decision abou the two alternatives:

* Multi-Page Application: a "classic website" (e.g. old Wordpress websites), with many HTML pages. Multi in opposition of "one page site".

* Single Page Application - SPA: in part is like a "one page site". The purpose of this approach is to display corporate information in the same place and provide external links to related topics through "calls to action" that act as an entry point to the parts/features of the project that you want to highlight.

Decision: SPA is "not for now", versions 2.0.0 and 2.1.0 are urgent and must use "old classic Web" as reference. SPA, as a  kind of optimization, may be appreciated in future 2.2.0+ website versions, but only for some group of pages, not for all website.

"Single *vs* Multi-Page Application" is not a dilema here. It is an architecture decision for "smarthphone application" development, but the AddressForAll website  is not an *application* in that sense, is more like a "classic website" (e.g. old Wordpress websites). So this is a **requirement restriction**:  the AddressForAll webpages can be optimized, grouping correlated pages in one, using   SPA strategy, but not all (v2.2.0) website.

Other requirement restriction: our target audience, it is not "all the Web", we have very low pageviews per day, and it is not for entertainment or selling...  Is important to include into [/docs/generalSpec](https://github.com/AddressForAll/site-v2/blob/main/docs/en/generalSpec.md) a target audience definition.

## SEO and Semantic Web

The Semantic Web technology adds a semantic layer into webpages. Our multipage solution, perhaps website version 2.2.0 or 2.4.0, will add [Schema.org](http://schema.org) semantic in a transparent way, like [this Lexml-DOU/demo](https://okfn-brasil.github.io/lexml-dou/demo/prop2_02.html).
