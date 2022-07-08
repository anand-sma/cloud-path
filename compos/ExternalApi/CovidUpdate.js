import Axios from 'axios';
import { useState, useEffect } from 'react';

export const axios = Axios.create({
  baseURL: 'https://api.covid19api.com',
});

const qURL = '/summary';

const CovidUpdate = ({ style }) => {
  const [data, setData] = useState([]);

  const source = Axios.CancelToken.source();

  const getCovidData = () => {
    axios
      .get(qURL, { cancelToken: source.token })
      .then((data) => {
        setData(data.data.Countries[76]);
        //console.log(data.data.Countries[76]);
      })
      .catch(function (error) {
        if (Axios.isCancel(error)) {
          //console.log('covidUpdate Request canceled');
        } else {
          console.error(error);
        }
      });
  };

  useEffect(() => {
    getCovidData();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <ul>
        <div className={style}>
          <div className={`p`} key={Math.random().toString(36).substr(2, 9)}>
            <li>New Recovered: {data.NewRecovered}</li>
            <li> New Confirmed: {data.NewConfirmed}</li>
            <li> New Deaths: {data.NewDeaths}</li>
          </div>
          <div className={`p`}>
            <li> Total Recovered: {data.TotalRecovered}</li>
            <li> Total Confirmed: {data.TotalConfirmed}</li>
            <li> Total Deaths: {data.TotalDeaths}</li>
          </div>
        </div>
      </ul>
    </>
  );
};

export default CovidUpdate;
