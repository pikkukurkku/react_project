import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";

function AccuWeather () {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const getWeather = () => {
        axios
        .get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/1028635?apikey=SS7lIBwntX2mwADj0HCQfkDxr4siSQHo")
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
    
      useEffect(() => {
        console.log("useEffect");
        getWeather();
      }, []);
    

      const convertToCelsius = (fahrenheit) => {
        return ((fahrenheit - 32) / 1.8).toFixed(0); 
      };


      if (loading) return <Spinner />;

    return (
        <div>
      <h1>AccuWeather Forecast for this location</h1>
      {weather && (
        <div>        
          <h3>{weather.Headline.Text}</h3>
          <p><b>Date:</b> {weather.DailyForecasts[0].Date}</p>
          <p><b>Temperature:</b> between {convertToCelsius(weather.DailyForecasts[0].Temperature.Minimum.Value)}°C and {convertToCelsius(weather.DailyForecasts[0].Temperature.Maximum.Value)}°C</p>
          <p><b>Day:</b> {weather.DailyForecasts[0].Day.IconPhrase}</p>
          <p><b>Night:</b> {weather.DailyForecasts[0].Night.IconPhrase}</p>
          {weather.DailyForecasts[0].Day.HasPrecipitation && (
            <p><b>Precipitation:</b> {weather.DailyForecasts[0].Day.PrecipitationType} ({weather.DailyForecasts[0].Day.PrecipitationIntensity})</p>
          )}
        </div>
      )}
    </div>

    )
}


export default AccuWeather