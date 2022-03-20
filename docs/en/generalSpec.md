# Site requirements specification

## Philosophical pillars
Design, architecture and implementation philosophy.

1. [**Separation of concerns**](https://en.wikipedia.org/wiki/Separation_of_concerns)


2. **Simplicity**: Seek zen-like simplicity in which there is nothing to add and nothing to take away.

3. **Human-editable and machine-usable**: HTML is semantic and useful for  *transparency*, content searching, etc.

4. **Reuse**: reuse the building blocks and existing standards.

5. **Extensibility and cross technology**: institutional (`www`) and `docs` subdomains of `addressForAll.org` support a broad range of languages, technologies and infrastructures – avoid being tied to any one specific system.  We can "plug" maps, animations, etc. without risk and without development cost. Design for extensibility and customisation. This makes hard things possible and permits future evolution.

## Terminology and definitions

* **Institutional contents**: in a *Separation of concerns* context, the public communication of the site's owner with legal value.  In the *implementation* context, it Must be static per page and [*transparent*](https://en.wikipedia.org/wiki/Transparency_(behavior)) for [Internet Archive Registration](https://archive.org/), [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) and [formal registry offices](https://pt.wikipedia.org/wiki/F%C3%A9_p%C3%BAblica).

* **Interface and dynamical content**: non-institutional content, including non-static content, like navigation menus, interactive animations, etc.

* **Institutional content's language**: the [HTML `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) used to express  the language that institutionaql HTML content elements are written in. In general the `lang` at  `<main>` or `<article>` sections.

* **Navigation and interface language**: the [HTML `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) used to express  the language that interface MUST use, even to navigate over multiple institutional languages.

------

## Lembretes

Sites AddressForAll disponíveis, e respectivas fontes, quando houverem:

* ***template* Batista**,   HTML e CSS mais limpos, https://elpbatista.github.io/pdv2/examples/
   - https://github.com/elpbatista/pdv2

* site **Corrente** (versão 1) http://addressForAll.org
   - https://github.com/AddressForAll/site-v1

* tentativa frustrada **v0.2**, http://teste.addressForAll.org
   - **FIGMA**: pedir pro Thierry. Prototipação (*wireframe*) do conteúdo e sua distribuição. <br/> Esta em https://www.figma.com/files/recent?fuid=969362987840116767  <br/>Ver também arquivo [Figma.zip](https://github.com/AddressForAll/newSite-v0.0-LIXO/raw/main/_siteDocs/Figma.zip) contendo a versão PDF da especificação [Figma](https://en.wikipedia.org/wiki/Figma_(software)) original do site. Tentar https://www.figma.com/files/recent?fuid=969362987840116767

   - Primeiro rascunhho de React, https://github.com/AddressForAll/newSite-v0.2-LIXO
   - Primeiro rascunho de conversão do Figma, https://github.com/AddressForAll/newSite-v0.0-LIXO

* ...

Materiais:
* assets do git do site Corrente: logos antigos, etc.

* assets e documentação *template* Batista: modelos de SVG e cia.

* Novo Logo, etc. em [neste Sharepoint thierry_addressforall_org/EveRtTmxiyJFtj](https://addressforall-my.sharepoint.com/:f:/g/personal/thierry_addressforall_org/EveRtTmxiyJFtj7Yowkts48BrhtXYxq-CK5irxfad7zwNA?e=LW8Goa).

Componentes de exemplo:

* http://addressforall.org/teste2/
   - https://github.com/digital-guard/preservDataViz
   - [make generate_pages](https://github.com/digital-guard/preserv/blob/main/src/makefile#L176) (.. onde mais Claiton documentou?)
* ...
