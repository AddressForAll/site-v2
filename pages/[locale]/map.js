import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import Layout from "../../components/layout";
import Map from "../../components/map";

export default function Mapexample() {
  return (
    <Layout>
      <section id="map">
        <Map />
      </section>
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };