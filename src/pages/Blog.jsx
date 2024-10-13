import React, { useEffect, useState } from 'react';
import Heading from '../components/Blog/Heading';
import BlogItems from '../components/Blog/BlogItems';
import axios from 'axios';
import Loading from '../components/Loading/Loading';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLogaing] = useState(true);
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products').then(res => {
      setBlogData(res.data);
      setLogaing(false);
    });
  }, []);
  if (loading) return <Loading />;
  blogData.length = 5;
  return (
    <>
      <Heading />
      <div className="container">
        {blogData.map(item => (
          <BlogItems key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Blog;
