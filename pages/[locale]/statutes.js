/* eslint-disable @next/next/no-img-element */
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";

const converter = new Converter();

export default function Statutes() {
  const { t } = useTranslation("common");
  return (
    <section id="statutes" className="flex-container">
      <p>
        Este é um resumo legível por não-juristas, que não substitui o
        <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm">
          {" "}
          Estatuto em inteiro teor
        </a>
        , para onde convergem os links abaixo.
      </p>
      <h2>Resumo do Estatuto do Instituto AddressForAll</h2>
      <table width="100%" border="0">
        <tbody>
          <tr>
            <td width="10%">
              <img src="/img/official/statute/image5.png" width="100" alt="image 5" />
            </td>
            <td>
              O <b>Instituto de Tecnologias Geo-Sociais AddressForAll</b>
              <br />é uma Associação brasileira sem fins lucrativos, com sede
              em&nbsp;São&nbsp;Paulo/SP.
              <p>
                O Instituto poderá atuar em parceria com governo, empresas e
                outras instituições, inclusive&nbsp;internacionais.
              </p>
            </td>
            <td width="150">
              <img src="/img/official/statute/image1.png" width="120" alt="image 1" />
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <img src="/img/official/statute/image2.png" alt="image 2" />
            </td>
            <td colSpan="2">
              Acolhimento, conhecimento livre, dados abertos, descentralização,
              ética, participação, qualidade da informação geoespacial,
              respeito, tolerância, transparência e unidade.
              <p>
                Promover a abertura, fusão, construção colaborativa e
                preservação de dados geoespaciais livres, de utilidade pública
                para o Brasil, com foco em endereços postais, pontos de entrega
                e acessos rurais.
              </p>
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <img src="/img/official/statute/image4.png" width="100" alt="image 4" />
            </td>
            <td colSpan="2">
              <b>
                <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec2">
                  Objetivos institucionais
                </a>
              </b>
              : <b>1</b>. Promover a abertura, fusão, construção colaborativa e
              padronização de dados e metadados geoespaciais relativos a
              endereços e demais elementos relacionados; <b>&nbsp;2</b>.
              Realizar a curadoria, tutela e preservação digital dos dados
              adquiridos ou gerados pelo Instituto; &nbsp;<b>3</b>. Garantir
              manutenção de sua infraestrutura digital; <b>4</b>. Promover e
              incentivar pesquisas tecnológicas relacionadas aos objetivos do
              Instituto.
            </td>
          </tr>

          <tr>
            <td>
              <img src="/img/official/statute/image8.png" alt="image 8" />{" "}
            </td>
            <td colSpan="2">
              <p>
                <b>
                  <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#term-AssociadosEfetivos">
                    Associado Efetivo
                  </a>
                  :
                </b>
                &nbsp;curador que aderir publicamente à missão e valores, bem
                como ser aceito e contribuir com VALOR1 por ano. Tem poder de
                voto nas decisões gerais e administrativas do Instituto.
              </p>
              <p>
                <b>
                  <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#term-AssociadosHonorarios">
                    Associado Honorário
                  </a>
                </b>
                : pessoa física convidada por sua notória reputação.
              </p>
              <p>
                <b>
                  <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#term-AssociadosInstitucionais">
                    Associado Institucional
                  </a>
                </b>
                : pessoa jurídica que apresentar afinidade com a missão e
                valores, bem como contribuir com R$ VALOR2/ano, poderá ser
                representada por associado individual&nbsp;que assumir tal
                compromisso.
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="/img/official/statute/image3.png"
                width="100"
                alt="image 3"
              />
            </td>
            <td colSpan="2">
              <p>
                A{" "}
                <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec6">
                  governança
                </a>{" "}
                geral sobre os associados e o{" "}
                <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec4">
                  patrimônio
                </a>{" "}
                do Instituto é efetuada pelos seguintes órgãos sociais compostos
                apenas de Associados Efetivos:{" "}
                <b>
                  <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#term-AssembleiaGeral">
                    Assembleia Geral
                  </a>
                  ,{" "}
                  <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#term-DiretoriaExecutiva">
                    Diretoria Executiva
                  </a>
                </b>{" "}
                e{" "}
                <b>
                  <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#term-ConselhoFiscal">
                    Conselho Fiscal
                  </a>
                </b>
                .
              </p>
              <p>
                A{" "}
                <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#term-PlataformaProjetos">
                  Plataforma de Projetos
                </a>{" "}
                permite a comunidade participar mais ativamente e encubar
                projetos que, uma vez sustentáveis, podem se tornar
                independentes.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        Localização das cláusulas e seções essenciais, nos termos do{" "}
        <strong>artigo 54 do Código Civil</strong>:
      </p>

      <ol type="I" className="roman">
        <li>
          Denominação (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl1.1">
            cláusula 1.1
          </a>
          ), os fins (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec2">
            seção&nbsp;2
          </a>
          ) e a sede da associação (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl1.1.1">
            cl.&nbsp;1.1.1
          </a>
          );
        </li>

        <li>
          Requisitos para a admissão (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl6.5">
            cl.&nbsp;6.5
          </a>
          ), demissão e exclusão (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl6.9">
            cl. 6.9
          </a>
          ) dos associados;
        </li>

        <li>
          Direitos e deveres dos associados (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec7">
            sec.&nbsp;7
          </a>
          );
        </li>

        <li>
          Fontes de recursos para sua manutenção (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl4.5">
            cl.&nbsp;4.5
          </a>
          );
        </li>

        <li>
          Modo de constituição e de funcionamento dos órgãos deliberativos (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl6.10">
            cl.&nbsp;6.10
          </a>
          ,{" "}
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl6.11">
            cl.&nbsp;6.11
          </a>
          &nbsp;e{" "}
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec8">
            sec.&nbsp;8
          </a>
          );
        </li>

        <li>
          Condições para a alteração das disposições estatutárias e para a
          dissolução (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec9">
            sec.&nbsp;9
          </a>
          );
        </li>

        <li>
          Forma de gestão administrativa (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec6">
            sec.&nbsp;6
          </a>{" "}
          e{" "}
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#sec8">
            sec.&nbsp;8
          </a>
          ) e de aprovação das respectivas contas (
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl6.1.1">
            cl.&nbsp;6.1.1
          </a>{" "}
          e{" "}
          <a href="https://addressforall.org/_private/A4A-Estatuto2020-04-03.htm#cl8.2.2">
            cl.&nbsp;8.2.2
          </a>
          ).
        </li>
      </ol>
      <p></p>

      <hr />
      <p>(em construção - histórico e comprovantes burocráticos)</p>
      <div style={{ backgroundColor: "#CCC", fontsize: "85%", padding: "3em" }}>
        <p>
          Todos os documentos oficiais da AddressForAll são identificados
          através do
          <a href="https://pt.wikipedia.org/wiki/Lex_(URN)">padrão URN LEX</a>,
          e podem ter a sua integridade confirmada por <i>digest</i> de hash
          criptográfica dos cartórios brasileiros (
          <a href="http://uniproof.com.br/#doublesha256">SHA256-double</a>).
        </p>
        <h3>Opções de Estatuto em inteiro teor:</h3>
        <dl>
          <dt>
            <a href="https://addressforall.org/urn:lex::estatuto:2020-04-03">
              urn:lex::estatuto:2020-04-03
            </a>
          </dt>
          <dd>
            HTML original, para leitura <i>online</i> (incluindo links acima) ou{" "}
            <a href="https://search.google.com/structured-data/testing-tool#url=http%3A%2F%2Faddressforall.org%2Furn%3Alex%3A%3Aestatuto%3A2020-04-03">
              <b>catalogação</b> por metadados
            </a>
            .
            <br />
            <code className="smallCode">
              sha256d-743891a09c2a47073dda5ef5d83bc1c7ec12254c6b7528fcc5161477213bfc11
            </code>
            .
          </dd>

          <dt>
            <a href="https://addressforall.org/urn:lex::estatuto:2020-04-03~pdf.assign">
              urn:lex::estatuto:2020-04-03~pdf.assign
            </a>
          </dt>
          <dd>
            Estatuto em formato PDF assinado digitalmente (ICP-Brasil),
            distribuído para fins de impressão.
            <br />
            <code className="smallCode">
              sha256d-928bedb269891feb0f7cebd295c42eb53c9ffc346d398d3439efb640c64c5518
            </code>
            .
          </dd>
        </dl>
        <h3>Documentos intermediários da tramitação e registro do Estatuto:</h3>
        Em sequência temporal, cada um dos documentos produzidos para se cumrpir
        o rito cartorial de registro, e tomando-se o cuidado de não perder a
        referência aos identificadores URN LEX e hases de integridade.
        <dl>
          <dt>
            <a href="https://addressforall.org/urn:lex::colecao:2020-04-03;v7">
              urn:lex::colecao:2020-04-03;v7
            </a>
          </dt>
          <dd>
            Coleção contendo <b>atas, solcitação de registro e Estatuto</b>,
            fonte original HTML para leitura <i>online</i>
            ou
            <a href="https://search.google.com/structured-data/testing-tool#url=http%3A%2F%2Faddressforall.org%2F_private%2FA4A-colecao2020-04-v7.htm">
              <b>catalogação</b> por metadados
            </a>
            .
            <br />
            <code className="smallCode">
              sha256d-90291555ecb4cfacc9160bc6a1f6a7572ab9b5c2a890cbeefbc2bda40de18761
            </code>
            .
          </dd>

          <dt>
            <a href="https://addressforall.org/urn:lex::estatuto:2020-04-03~pdf.assign">
              urn:lex::estatuto:2020-04-03~pdf.assign
            </a>
          </dt>
          <dd>
            Coleção convertida (do HTML) para formato PDF, e assinada
            digitalmente (ICP-Brasil). Util para impressão e como evidência
            documental do que foi ingerido e destruído pelo cartório.
            <br />
            <code className="smallCode">
              sha256d-928bedb269891feb0f7cebd295c42eb53c9ffc346d398d3439efb640c64c5518
            </code>
            .
          </dd>

          <dt>
            <a href="https://addressforall.org/urn:lex::colecao:2020-04-03;v7.reg~pdf.assign">
              urn:lex::colecao:2020-04-03;v7registrado~assinado.pdf
            </a>
          </dt>
          <dd>
            Coleção reformatada pelo cartório para fins de registro formal:
            documento reformatado assinado pelo cartório, e{" "}
            <b>registrado oficialmente</b>. A reformatação degrada a
            visualização, remove assinaturas e links do PDF fornecido para o
            cartório.
            <br />
            <code className="smallCode">
              sha256d-a48e5178931c4b1a4805ff0d61ff674280a28cd52af8feb0e500d8fbdc0fbf8f
            </code>
            .
          </dd>
        </dl>
        <p>
          {" "}
          O Estatuto contido na Coleção foi incluso por software, o que garante
          que ambos conteúdos são idênticos.
        </p>
        <p>
          Todos os documentos tiveram sua integrade confirmada e registrada ao
          longo de toda a tramitação, de modo que todas as versões acima são
          autênticas e passíveis de verificação, desde a origem (HTML) até o
          registro em cartório. Em particular os hashes SHA256-double indicados
          na
          <a href="https://addressforall.org/_private/A4A-colecao2020-04-v7.htm#colecao1apresent">
            apresentação da Coleção
          </a>
          , podem ser confirmados em qualquer dispositivo de auditoria de
          hashes, tal como a
          <a href="http://uniproof.com.br/#doublesha256">Uniproof</a>.
        </p>
        <hr />
        Você pode baixar qualquer um dos documentos e <b>auditar</b> a{" "}
        <i>SHA256d</i>, confirmando sua integridade, através da{" "}
        <a href="http://uniproof.com.br/#doublesha256">
          ferramenta online Uniproof
        </a>
        ou através do comando Linux
        <pre>
          openssl dgst -sha256 -binary MeuDocumento | openssl dgst -sha256
        </pre>
        <h3>Porque tantos formatos e tantans versões?</h3>
        <p>
          O HTML é o formato ideal e preferível para todas as ocasições. Até
          mesmo para impressão via navegador, não fica tão mal pois foi
          preparado para isso. Todavia vivemos tempos de de uma lenta transição
          tecnológica, e{" "}
          <a href="https://stackoverflow.com/a/21345708/287948">
            a promessa de um &quotHTML bom para imprimir&quot ainda não se
            concretizou
          </a>
          , vem sendo adiada a pelo menos 10 anos.
        </p>
        <p>
          Sem uma transição completa, não é possível substituir o antigo e
          inadequado padrão PDF para o moderno e ecossistêmico{" "}
          <a href="https://en.wikipedia.org/wiki/EPUB">EPUB</a>, que
          corresponde, a grosso modo, a um HTML zipado.
        </p>
        <p>
          No Brasil, além do cenário tecnológico, há o cenário do lobby das
          grandes empresas em torno do governo e dos cartórios. Devido a esse
          lobby na formulação das regras e normas técnicas, o padrão de
          assinatura digital não permite outros padrões exceto o PDF, apesar do
          seu concorrente, o EPUB ser plenamente elegível e até mais adequado
          para isso.
        </p>
        <p>
          Por fim, os cartórios tem seu próprio lobby institucional junto aos
          governos estaduais, onde garantem que tecnologias como Blockchain e as
          tradicionais checksums não sucateiem a obrigatoriedade de uso das
          empresas cartoriais. Ao invés de apenas registarem o checksum (hash)
          de cada documento, datando seu registro, e acerscentar a assinatura do
          cartório ao PDF assinado,{" "}
          <b>obrigam o usuário a pagar pelo serviço de reformatar o PDF </b>, e
          com isso destruindo as assinaturas originais e mais importantes, das
          partes que assumem a responsabilidade juidica pelo documento.{" "}
        </p>
      </div>
    </section>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
