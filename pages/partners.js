import { useTranslation } from "next-export-i18n";
import { Converter } from "showdown";

const converter = new Converter();

export default function Partners() {
  const { t } = useTranslation();
  return (
    <section id="partners" className="flex-container">
      <div
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(t("partners.md")),
        }}
      ></div>
      <ul>
        <li>
          <img src="img/doadores/araucaria.png" alt="Araucária" />
        </li>
        <li>
          <img src="img/doadores/atibaia.png" alt="Atibaia" />
        </li>
        <li>
          <img src="img/doadores/belo-horizonte.png" alt="Belo Horizonte" />
        </li>
        <li>
          <img src="img/doadores/cabreuva.png" alt="Cabreúva" />
        </li>
        <li>
          <img src="img/doadores/canoas.png" alt="Canoas" />
        </li>
        <li>
          <img src="img/doadores/contagem.png" alt="Contagem" />
        </li>
        <li>
          <img src="img/doadores/curitiba.png" alt="Curitiba" />
        </li>
        <li>
          <img src="img/doadores/florianopolis.png" alt="Florianópolis" />
        </li>
        <li>
          <img src="img/doadores/fortaleza.png" alt="Fortaleza" />
        </li>
        <li>
          <img src="img/doadores/goiania.png" alt="Goiania" />
        </li>
        <li>
          <img
            src="img/doadores/governador-valadares.png"
            alt="Governador Valadares"
          />
        </li>
        <li>
          <img src="img/doadores/gravatai.png" alt="Gravataí" />
        </li>
        <li>
          <img src="img/doadores/guarulhos.png" alt="Guarulhos" />
        </li>
        <li>
          <img src="img/doadores/ign-peru.png" alt="IGN Perú" />
        </li>
        <li>
          <img src="img/doadores/itanhaem.png" alt="Itanhaem" />
        </li>
        <li>
          <img src="img/doadores/itu.png" alt="Itu" />
        </li>
        <li>
          <img src="img/doadores/jaragua-do-sul.png" alt="Jaragua do Sul" />
        </li>
        <li>
          <img src="img/doadores/joao-pessoa.png" alt="Joao Pessoa" />
        </li>
        <li>
          <img src="img/doadores/joinville.png" alt="Joinville" />
        </li>
        <li>
          <img src="img/doadores/jundiai.png" alt="Jundiaí" />
        </li>
        <li>
          <img
            src="img/doadores/laranjal-paulista.png"
            alt="Laranjal Paulista"
          />
        </li>
        <li>
          <img src="img/doadores/limeira.png" alt="Limeira" />
        </li>
        <li>
          <img src="img/doadores/manaus.png" alt="Manaus" />
        </li>
        <li>
          <img src="img/doadores/natal.png" alt="Natal" />
        </li>
        <li>
          <img src="img/doadores/osasco.png" alt="Osasco" />
        </li>
        <li>
          <img src="img/doadores/pato-branco.png" alt="Pato Branco" />
        </li>
        <li>
          <img src="img/doadores/paulina.png" alt="Paulina" />
        </li>
        <li>
          <img src="img/doadores/pinhais.png" alt="Pinhais" />
        </li>
        <li>
          <img src="img/doadores/piracicaba.png" alt="Piracicaba" />
        </li>
        <li>
          <img src="img/doadores/porto-alegre.png" alt="Porto Alegre" />
        </li>
        <li>
          <img src="img/doadores/recife.png" alt="Recife" />
        </li>
        <li>
          <img src="img/doadores/ribeirao-preto.png" alt="Ribeirao Preto" />
        </li>
        <li>
          <img src="img/doadores/rio-branco.png" alt="Rio Branco" />
        </li>
        <li>
          <img src="img/doadores/rio-de-janeiro.png" alt="Rio de Janeiro" />
        </li>
        <li>
          <img src="img/doadores/santa-maria.png" alt="Santa Maria" />
        </li>
        <li>
          <img
            src="img/doadores/sao-bernardo-do-campo.png"
            alt="Sao Bernardo do Campo"
          />
        </li>
        <li>
          <img
            src="img/doadores/sao-jose-dos-pinhais.png"
            alt="San Jose dos Pinhais"
          />
        </li>
        <li>
          <img src="img/doadores/sao-paulo.png" alt="Sao Paulo" />
        </li>
        <li>
          <img src="img/doadores/sorocaba.png" alt="Sorocaba" />
        </li>
        <li>
          <img src="img/doadores/teresina.png" alt="teresina" />
        </li>
        <li>
          <img src="img/doadores/vitoria.png" alt="Vitoria" />
        </li>
      </ul>
    </section>
  );
}
