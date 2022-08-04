import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
// import { useTranslation } from "next-i18next";
import Map from "../../components/map";

export default function Mapexample() {
  return (
    <section id="map">
      <Map />
    </section>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };