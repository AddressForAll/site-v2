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
