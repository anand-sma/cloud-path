import { useState, useEffect } from 'react';
import Axios from 'axios';
import Link from 'next/link';
import styles from '../../styles/NewsHeadlineIndia.module.scss';

export const axios = Axios.create({
  baseURL: 'https://newsapi.org/v2',
});

const qURL = `top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`;

function GetNewsData() {
  const [data, setData] = useState([]);
  const source = Axios.CancelToken.source();

  const getNewsData = () => {
    axios
      .get(qURL, { cancelToken: source.token })
      .then((data) => {
        setData(data.data.articles);
        console.log(data.data.articles[0]);
      })
      .catch(function (error) {
        if (Axios.isCancel(error)) {
          //console.log('newsUpdate Request canceled');
        } else {
          console.error(error);
        }
      });
  };

  useEffect(() => {
    getNewsData();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <ul>
      {data &&
        data.map((news) => (
          <div
            key={Math.random().toString(36).substr(3, 9)}
            className={`${styles.pb}`}
          >
            <li>
              <h4>{news.title}</h4>
            </li>
            <li>{news.content}</li>
            <Link href={'/newsheadlines/' + news.source.id}>
              <a>
                <span>
                  <em>--- read more ---</em>
                </span>
              </a>
            </Link>
          </div>
        ))}
    </ul>
  );
}

export default GetNewsData;
