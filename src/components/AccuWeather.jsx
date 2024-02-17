import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AccuWeather.css";

function AccuWeather({ locationKey }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = () => {
      axios
        .get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${
            import.meta.env.VITE_ACCU_KEY
          }`
        )
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          setWeather(response.data);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };

    if (locationKey) {
      getWeather();
    }
  }, [locationKey]);

  const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) / 1.8).toFixed(0);
  };

  if (loading) return <Spinner />;

  return (
    <div className="forecast">
      <h1>AccuWeather Forecast for this location</h1>
      <a
        href="https://www.accuweather.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./aw-logo.png" alt="aw-logo" />
      </a>
      {weather && (
        <div>
          <h3>{weather.Headline.Text}</h3>
          <p>
            <b>Date:</b> {weather.DailyForecasts[0].Date}
          </p>
          <p>
            <b>Temperature:</b> between{" "}
            {convertToCelsius(
              weather.DailyForecasts[0].Temperature.Minimum.Value
            )}
            °C and{" "}
            {convertToCelsius(
              weather.DailyForecasts[0].Temperature.Maximum.Value
            )}
            °C
          </p>
          <p>
            <b>Day:</b> {weather.DailyForecasts[0].Day.IconPhrase}
          </p>
          <p>
            <b>Night:</b> {weather.DailyForecasts[0].Night.IconPhrase}
          </p>
          {weather.DailyForecasts[0].Day.HasPrecipitation && (
            <p>
              <b>Precipitation:</b>{" "}
              {weather.DailyForecasts[0].Day.PrecipitationType} (
              {weather.DailyForecasts[0].Day.PrecipitationIntensity})
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default AccuWeather;
