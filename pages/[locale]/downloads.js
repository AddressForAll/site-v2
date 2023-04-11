import { useEffect, useState } from "react";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";
import Layout from "../../components/layout";

//import markdown from "../../content/list_downloads.md";
import downloadList from "../../content/downloads";

//const mdCont = markdown;

const converter = new Converter();

export default function Downloads() {
  const { t } = useTranslation("common");
  const [level_1, setLevel_1] = useState(undefined);
  const [level_1Index, setLevel_1Index] = useState(undefined);
  const [level_2, setLevel_2] = useState(undefined);
  const [level_2Index, setLevel_2Index] = useState(undefined);
  const [level_3, setLevel_3] = useState(undefined);
  const [level_3Index, setLevel_3Index] = useState(undefined);

  useEffect(() => {
    if (level_1) {
      for (let i = 0; i <= downloadList.length; i++) {
        if (downloadList[i]?.title === level_1) {
          setLevel_1Index(i);
          if (downloadList[i]?.items && downloadList[i]?.items.length === 1) {
            setLevel_2(downloadList[i]?.items[0].title);
            setLevel_2Index(0);
          }
          return;
        }
      }
    } else {
      setLevel_1Index(undefined);
      setLevel_2(undefined);
      setLevel_2Index(undefined);
      setLevel_3(undefined);
      setLevel_3Index(undefined);
    }
  }, [level_1]);

  useEffect(() => {
    if (level_2) {
      for (let i = 0; i <= downloadList[level_1Index].items.length; i++) {
        if (downloadList[level_1Index]?.items[i]?.title === level_2) {
          setLevel_2Index(i);
          if (
            downloadList[level_1Index]?.items[i]?.items &&
            downloadList[level_1Index]?.items[i]?.items.length === 1
          ) {
            setLevel_3(downloadList[level_1Index]?.items[i]?.items[0].title);
            setLevel_3Index(0);
          }
          return;
        }
      }
    } else {
      setLevel_2(undefined);
      setLevel_2Index(undefined);
      setLevel_3(undefined);
      setLevel_3Index(undefined);
    }
  }, [level_1Index, level_2]);

  const DownloadItem = ({ downloads }) => {
    return (
      <div style={{ marginTop: 10 }}>
        <h5 style={{ margin: 0 }}>Downloads</h5>
        {downloads.map((download, index) => (
          <div key={index}>
            <a href={download.url} download target="_blank" rel="noreferrer">
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#1b439a",
                  color: "white",
                  padding: 6,
                  borderRadius: 6,
                  border: "none",
                  fontSize: "12pt",
                }}
              >
                {download.title}
              </button>
            </a>
            {download?.items && (
              <div>
                {download.items.map((downloadItem) => (
                  <a
                    key={downloadItem.title}
                    href={downloadItem.url}
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      style={{
                        width: "100%",
                        backgroundColor: "#3A9948",
                        color: "white",
                        padding: 6,
                        borderRadius: 6,
                        border: "none",
                        fontSize: "12pt",
                      }}
                    >
                      {downloadItem.title} ({downloadItem.hash})
                    </button>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <section
        id="downloads"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(t("downloads.md")),
        }}
      ></section>
      <section id="select-downloads" className="flex-container">
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div
              style={{
                display: "flex",
                flexDirection: " column",
                width: "33%",
              }}
            >
              <span>Level 1</span>
              <input
                type="search"
                list="level_1"
                placeholder="Selecione"
                value={level_1}
                onChange={(event) => setLevel_1(event.target.value)}
                style={{ fontSize: "12pt", padding: "4px" }}
              />
              <datalist id="level_1">
                {downloadList.map((level1Item) => (
                  <option key={level1Item.title} value={level1Item.title} />
                ))}
              </datalist>
            </div>
            {level_1Index !== undefined && (
              <div
                style={{
                  display: "flex",
                  flexDirection: " column",
                  width: "33%",
                }}
              >
                <span>Level 2</span>
                <input
                  type="search"
                  list="level_2"
                  placeholder="Selecione"
                  value={level_2}
                  onChange={(event) => setLevel_2(event.target.value)}
                  style={{
                    fontSize: "12pt",
                    padding: "4px",
                  }}
                />
                <datalist id="level_2">
                  {downloadList[level_1Index]?.items?.map((level2Item) => (
                    <option key={level2Item.title} value={level2Item.title} />
                  ))}
                </datalist>
              </div>
            )}
            {level_2Index !== undefined &&
              downloadList[level_1Index]?.items[level_2Index]?.items && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: " column",
                    width: "33%",
                  }}
                >
                  <span>Level 3</span>
                  <input
                    type="search"
                    list="level_3"
                    placeholder="Selecione"
                    value={level_3}
                    onChange={(event) => setLevel_3(event.target.value)}
                    style={{
                      fontSize: "12pt",
                      padding: "4px",
                    }}
                  />
                  <datalist id="level_3">
                    {downloadList[level_1Index]?.items[level_2Index]?.items.map(
                      (level3Item) => (
                        <option
                          key={level3Item.title}
                          value={level3Item.title}
                        />
                      )
                    )}
                  </datalist>
                </div>
              )}
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div
              style={{
                display: "flex",
                flexDirection: " column",
                width: "33%",
              }}
            >
              {downloadList[level_1Index]?.downloads && (
                <DownloadItem
                  downloads={downloadList[level_1Index]?.downloads}
                />
              )}
            </div>
            {level_1Index !== undefined && (
              <div
                style={{
                  display: "flex",
                  flexDirection: " column",
                  width: "33%",
                }}
              >
                {downloadList[level_1Index]?.items[level_2Index]?.downloads && (
                  <DownloadItem
                    downloads={
                      downloadList[level_1Index]?.items[level_2Index]?.downloads
                    }
                  />
                )}
              </div>
            )}
            {level_2Index !== undefined &&
              downloadList[level_1Index]?.items[level_2Index]?.items && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: " column",
                    width: "33%",
                  }}
                >
                  {downloadList[level_1Index]?.items[level_2Index]?.items[
                    level_3Index
                  ].downloads && (
                    <DownloadItem
                      downloads={
                        downloadList[level_1Index]?.items[level_2Index]?.items[
                          level_3Index
                        ].downloads
                      }
                    />
                  )}
                </div>
              )}
          </div>
        </div>
      </section>
      {/* 
      <section
        id="list_downloads"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(mdCont),
        }}
      ></section>
      */}
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
