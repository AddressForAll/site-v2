import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import React, { useState, useEffect, useRef } from "react";
import MapLayout from "../../components/maplayout";

import Map from "ol/Map";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import TileLayer from "ol/layer/Tile";
import "ol/ol.css";

export default function OpenLayersHelloWorld() {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    const initialMap = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    setMap(initialMap);
  }, []);

  return (
    <MapLayout>
      <div
        id="map"
        style={{ height: "100vh", width: "100%" }}
        ref={mapElement}
        className="map-container"
      />
    </MapLayout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
