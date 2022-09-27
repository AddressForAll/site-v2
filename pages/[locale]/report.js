/* eslint-disable @next/next/no-img-element */
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import Layout from "../../components/layout";

import React, { useRef, useState } from 'react';
import { Vega, VegaLite }          from 'react-vega';


const spec1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "usermeta": {"embedOptions": {"actions": false,/* "renderer": "svg"*/}},
  "description": "",
  "data": { "url": "https://osm.codes/_sql/stats_donors_prospection"},
  "transform": [{"filter": "datum.donor_status > 0"}],
  "background": "transparent",
  "encoding": {
    "y": {"field": "donor_status", "type": "nominal", "title": "donor_status"},
    "x": {"field": "accumulated_amount", "type": "quantitative", "scale": {"domain": [0,150]},"title": "number of donors"},
    "tooltip": [
      {"field": "accumulated_amount", "type": "quantitative"}
    ],
      "color": {"value": "#ff9900"}
  },
  
  "layer": [{
    "mark": {"type": "bar"},
  }, {
    "mark": {
      "type": "text",
      "align": "left",
      "baseline": "middle",
      "dx": 3
    },
    "encoding": {
      "text": {"field": "accumulated_amount", "type": "quantitative"}
    }
  }]
};

const spec2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "usermeta": {"embedOptions": {"actions": false,/* "renderer": "svg"*/}},
  "description": "",
  "data": { "url": "https://osm.codes/_sql/stats_donated_packcomponent_classgrouped"},
  //"transform": [{"filter": "datum.ftname_class > 0"}],
  "background": "transparent",
  "encoding": {
    "y": {"field": "ftname_class", "type": "nominal", "title": "Layer"},
    "x": {"field": "amount", "type": "quantitative", "title": "Packages"},
    "tooltip": [
      {"field": "amount", "type": "quantitative"}
    ]
  },
  "layer": [{
    "mark": "bar",

  }, {
    "mark": {
      "type": "text",
      "align": "left",
      "baseline": "middle",
      "dx": 3
    },
    "encoding": {
      "text": {"field": "amount", "type": "quantitative"}
    }
  }]
};

const spec3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "usermeta": {"embedOptions": {"actions": false,/* "renderer": "svg"*/}},
  "description": "",
  "data": { "url": "https://osm.codes/_sql/stats_donated_packcomponent"},
  //"transform": [{"filter": "datum.ftname_class > 0"}],
  "background": "transparent",
  "encoding": {
    "y": {"field": "ftname_class", "type": "nominal", "title": "Layer"},
    "x": {"aggregate": "count","field": "ftname_class", "type": "quantitative", "title": "Packages"},
    "tooltip": [
      {"aggregate": "count","field": "ftname_class", "type": "quantitative"}
    ]
  },
  "layer": [{
    "mark": "bar",

  }, {
    "mark": {
      "type": "text",
      "align": "left",
      "baseline": "middle",
      "dx": 3
    },
    "encoding": {
      "text": {"aggregate": "count","field": "ftname_class", "type": "quantitative"}
    }
  }]
};

const spec4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "usermeta": {"embedOptions": {"actions": false,/* "renderer": "svg"*/}},
  "description": "",
  "data": {"url": "https://osm.codes/_sql/stats_donated_pack_timeline"},
  "transform": [{"filter": "datum.accepted_date > 2019"}],
  "background": "transparent",
  "mark": {"type": "area", "line": true, "point": true,     "line": {
      "color": "darkgreen"
    },},
  "encoding": {
    "x": {
      "timeUnit": "yearmonthdate", "field": "accepted_date", "type": "temporal", "title": "Date",
      "scale": {"nice": "yearmonth"},
      "axis": {"axisWidth": 0, "format": "%Y", "labelAngle": 0}
    },
    "y": {
      "field": "accumulated_amount","type": "quantitative","title": "Donated packages"
    }
  },
  "config": {"cell": {"width": 300, "height": 200}}
};

export default function graficosexample() {
  return (
    <Layout>
      <section id="report">
        <div className="flex-img">
          <img alt="data flow" src={`/img/A4A_method-funilDoacoes2022-06.png`} />
        </div>
        <Vega spec={spec1}/>
        <Vega spec={spec3}/>
        <Vega spec={spec4}/>
      </section>
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };

