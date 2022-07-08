import { useState, useEffect } from 'react';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

const api_key = process.env.OPEN_WEATHER_KEY;
const qURL = `/weather?q=kalchini,IN&units=metric&APPID=${api_key}`;

const WeatherCast = () => {
  const [data, setData] = useState([]);
  const source = Axios.CancelToken.source();

  const getWeatherCast = () => {
    axios
      .get(qURL, { cancelToken: source.token })
      .then((data) => {
        setData(data.data.main);
        //console.log(data.data.main);
      })
      .catch(function (error) {
        if (Axios.isCancel(error)) {
          //console.log('weatherCast Request canceled');
        } else {
          console.log(error);
        }
      });
  };
  const fetchData = () => {};

  useEffect(() => {
    getWeatherCast();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className='p'>
      <ul>
        <div className='flex-x centerXY'>
          <div className='p' key={Math.random().toString(36).substr(2, 9)}>
            <li>
              Kalchini:
              <br /> {data.temp}
            </li>
          </div>
          <div>
            <li>
              Feels Like: <br /> {data.feels_like}
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default WeatherCast;
