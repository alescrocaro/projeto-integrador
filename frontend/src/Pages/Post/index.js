import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import HeaderMenu from '../../components/HeaderMenu';
import StickyFooter from '../../components/StickyFooter';
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
    <>
      <HeaderMenu />
      {
        posts.map((item) => (
          <StyledCard
            key={item.id}
            owner={item.userName}
            description={item.description}
          />
        ))
      }
      <StickyFooter />
    </>
  );
};
