import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Container from '../../components/Container';
import Layout from '../../components/Layout';
import StyledCard from '../../components/Card';

export default function ListPosts({ data }) {  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/posts');
      console.log('item de posts',data);

      setPosts(data);
    };
    fetch();
  }, []);

  return (
    <Layout>
      <Container container>
        {
          posts.map((post) => (
            <StyledCard
              key={post.id}
              post={post}
            />
          ))
        }
      </Container>
    </Layout>
  );
};
