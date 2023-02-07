import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";
import Layout from "../../components/layout";
import { Autocomplete, TextField } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";

import markdown from "../../content/list_downloads.md";
import { useEffect, useState } from "react";

const mdCont = markdown;

const converter = new Converter();

export default function Downloads() {
  const { t, i18n } = useTranslation("common");

  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const callCountryAPI = async () => {
    try {
      const res = await fetch(
        `https://api.osm.codes/jurisdiction_autocomplete`
      );
      const data = await res.json();
      if (data) {
        const countries = data.sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countries);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const callStateAPI = async (countryCode) => {
    try {
      const res = await fetch(
        `https://api.osm.codes/jurisdiction_autocomplete/${countryCode}`
      );
      const data = await res.json();
      if (data) {
        const states = data.sort((a, b) => a.name.localeCompare(b.name));

        setStates(states);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const callCitiesAPI = async (countryCode, stateCode) => {
    try {
      const res = await fetch(
        `https://api.osm.codes/jurisdiction_autocomplete/${countryCode}-${stateCode}`
      );
      const data = await res.json();
      if (data) {
        const cities = data.sort((a, b) => a.name.localeCompare(b.name));

        setCities(cities);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onCountrySelection = (event, value) => {
    setSelectedCountry(value);
  };

  const onStateSelection = (event, value) => {
    setSelectedState(value);
  };

  const onCitieSelection = (event, value) => {
    setSelectedCity(value);
  };

  const filterOptions = createFilterOptions({
    stringify: (option) => {
      return (
        option.abbreviation +
        " " +
        option.name +
        " " +
        option.synonymous.join(" ")
      );
    },
  });

  const shouldShowCountriesAutocomplete = () => {
    return countries && countries.length !== 0;
  };

  const shouldShowStatesAutocomplete = () => {
    return selectedCountry && states && states.length !== 0;
  };

  const shouldShowCitiesAutocomplete = () => {
    return selectedState && cities && cities.length !== 0;
  };

  useEffect(() => {
    callCountryAPI();
  }, []);

  useEffect(() => {
    setSelectedState(null);
    setStates(null);

    if (selectedCountry) {
      callStateAPI(selectedCountry.abbreviation);
    }
  }, [selectedCountry]);

  useEffect(() => {
    setSelectedCity(null);
    setCities(null);

    if (selectedState) {
      callCitiesAPI(selectedCountry.abbreviation, selectedState.abbreviation);
    }
  }, [selectedState]);

  return (
    <Layout>
      <section
        id="downloads"
        className="flex-container"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(t("downloads.md")),
        }}
      ></section>

      {shouldShowCountriesAutocomplete() && (
        <Autocomplete
          disablePortal
          options={countries}
          onChange={onCountrySelection}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => {
            return option.abbreviation === value.abbreviation;
          }}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={t("downloads.countries_input_label")} />}
        />
      )}

      {shouldShowStatesAutocomplete() && (
        <Autocomplete
          disablePortal
          options={states}
          onChange={onStateSelection}
          getOptionLabel={(option) => option.name}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={t("downloads.states_input_label")} />}
        />
      )}

      {shouldShowCitiesAutocomplete() && (
        <Autocomplete
          disablePortal
          options={cities}
          onChange={onCitieSelection}
          getOptionLabel={(option) => option.name}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={t("downloads.cities_input_label")} />}
        />
      )}
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
