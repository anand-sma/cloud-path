import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { ContactlessOutlined, SystemUpdate } from '@material-ui/icons';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://cdn.contentful.com//spaces',
});
const space_id = process.env.CONTENTFUL_SPACE_ID;
const environment_id = 'master';
const access_token = process.env.CONTENTFUL_API_KEY;
const qURL = `/${space_id}/environments/${environment_id}/entries?access_token=${access_token}`;

const BlogPost = () => {
  const [data, setData] = useState([]);
  const source = Axios.CancelToken.source();
  const getBlogPosts = () => {
    axios
      .get(qURL, { cancelToken: source.token })
      .then((data) => {
        setData(data.data.items);
        console.log(data.data.items);
      })
      .catch((err) => {
        if (Axios.isCancel(err)) {
          //console.log('blogPosts Request canceled');
        } else {
          console.error(err);
        }
      });
  };
  useEffect(() => {
    getBlogPosts();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <ul>
        <h2>Blog Posts</h2>
        {data.map((data) => (
          <div key={data.sys.id}>
            <li>Title: {data.fields.title}</li>
            <li>Section: {data.fields.section}</li>
            <li>Category: {data.fields.category}</li>
            <li>Author: {data.fields.author}</li>
            <li>Article: {documentToReactComponents(data.fields.article)}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default BlogPost;
